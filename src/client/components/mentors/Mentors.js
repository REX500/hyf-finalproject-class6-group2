import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from 'react-router-dom/es/NavLink'
import { Link } from 'react-router-dom'

class Mentors extends React.Component {
  state = {
    mentors: []
  }
  deleteMentor(id) {
    this.setState(state => ({
      mentors: [...state.mentors.filter(state => state.id !== id)]
    }))

    fetch(`api/mentors/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  componentDidMount() {
    fetch('/api/mentors')
      .then(res => res.json())
      .then(mentors => this.setState({ mentors }))
      .catch(console.log)
  }

  render = () => {
    const { mentors } = this.state
    return (
      <div className="container">
        <h2>
          Mentors{' '}
          <NavLink to="/Mentors/add" className="btn btn-sm btn-success">
            <i className="fa fa-plus text-white" />
          </NavLink>
        </h2>
        {mentors.length === 0 ? (
          <Progress />
        ) : (
          <div className="row">
            {mentors.map(mentor => (
              <div key={mentor.id} className="col-md-6">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      {mentor.first_name} {mentor.last_name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {mentor.type}
                    </h6>
                    <p className="card-text">
                      Birth date: {mentor.bday}
                      <br />
                      Admission date: {mentor.admission_date}
                    </p>
                    <a href={mentor.slack_nickname} className="btn btn-info">
                      <i className="fa fa-github" aria-hidden="true">
                        {' '}
                      </i>{' '}
                      Github
                    </a>
                    <Link
                      to={`/Mentors/edit/${mentor.id}`}
                      className="btn btn-info mr-2 ml-2"
                    >
                      <i className="fa fa-pencil" /> Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteMentor(mentor.id)}
                    >
                      <i className="fa fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Mentors
