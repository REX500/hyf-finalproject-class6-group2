import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import UserMenu from './User-menu'
import NavigationDrawer from '../NavigationDrawer'
import Progress from '../progress'
import { Consumer } from '../../../context'
const styles = {
  root: {
    flexGrow: 1,
    marginBottom:64
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    height: '40px'
  }
}

function Navbar(props) {
  const { classes } = props
  return (
    <Consumer>
      {({ loading }) => (
        <div className={classes.root}>
          {loading && <Progress />}
          <AppBar position='fixed'>
            <Toolbar>
              <NavigationDrawer />

              <Typography variant='h6' color='inherit' className={classes.grow}>
                <Button component={Link} to='/' color='inherit'>
                  <img
                    className={classes.logo}
                    src='/images/logo-white.svg'
                    alt='HackYourFuture Copenhagen'
                  />
                </Button>
              </Typography>

<<<<<<< HEAD:src/client/components/layouts/navbar/Navbar.js
          <Button component={Link} to='/users/' color='inherit'>
            Users
          </Button>
          <Button component={Link} to='/classes/' color='inherit'>
            Classes
          </Button>
          <Button component={Link} to='/modules/' color='inherit'>
            Modules
          </Button>
          <Button component={Link} to='/roles/' color='inherit'>
            Roles
          </Button>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </div>
=======
              <Button component={Link} to='/users/' color='inherit'>
                Users
              </Button>
              <Button component={Link} to='/classes/' color='inherit'>
                Classes
              </Button>
              <UserMenu />
            </Toolbar>
          </AppBar>
        </div>
      )}
    </Consumer>
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c:src/client/components/layouts/navbar/navbar.js
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
