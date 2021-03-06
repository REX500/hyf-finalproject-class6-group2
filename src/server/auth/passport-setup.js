const mysql = require('mysql2')
//Create a mysql pool as to not manage connection quite as tediously
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})
// const connection = mysql.createConnection(process.env.JAWSDB_URL)
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

//serialize or "encrypt" a user into a cookie to send to the client
passport.serializeUser((user, done) => {//db
  done(null, user.github_token)
})

//deserialize or "decrypt" the cookie into readable information
passport.deserializeUser((id, done) => {
  pool.query(
    'select * FROM users where github_token = ?',
    [id],
    (err, results, fields) => {
      if (err) {
        throw new Error('Something went wrong while retriving a users id!\n' + err)
      } else {
        done(null, results[0])
      }
    }
  )
})

passport.use(
  new GitHubStrategy(
    //Variables sent to the passport stategy set up in a .env file. These varies depending on stategy.
    //You can get these variables from the authentication provider you use such as
    //google twitter facebook or github. As Long as it's OAuth2.0
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK
    },
    (accessToken, refreshToken, profile, done) => { // profile: github
      //passport callbaack, that uses our mysql database to first check if we already have a user with the unique github_ID
      pool.query(
        'select * FROM users WHERE github_token = ?',
        [profile._json.id],
        async (err, results, fields) => { // results: db
          if (err) {
            throw new Error('Something went wrong in fething a user!' + err)
          } else if (
            results === undefined ||
            results.length === 0 ||
            results[0].github_token === undefined
          ) {

            //If no user is found with the provided id, create one.
            pool.query(
              'INSERT INTO users (github_token, name, github_username, type, avatar) VALUES( ?, ?, ?, ?, ?)',
              [
                profile._json.id,
                profile._json.name,
                profile._json.login,
                profile._json.type,
                profile._json.avatar_url
              ],
              (err, results, fields) => {
                if (err) {
                  throw new Error('Whoops! could not add GitHub User to DB!' + err)
                } else {
                  const user = {
                    id: results.insertId,
                    avatar: profile._json.avatar_url,
                    name: profile._json.name,
                    type: profile._json.type,
                    github_username: profile._json.login,
                    github_token: profile._json.id
                  }
                  //then send to passport.js for serialization the user we just created and tell it that we're done
                  //checking if the user exists
                  done(null, user)
                  return user
                }
              }
            )
          } else {
            //if user already exists and there is no need for a new user send the existing user to passport.js for serialization
            done(null, results[0])
            return results[0]
          }
        }
      )
    }
  )
)
