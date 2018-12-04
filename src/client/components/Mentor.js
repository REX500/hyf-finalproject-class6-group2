import React from 'react'

const Mentor = props => {
  const {
          first_name,
          last_name,
          slack_nickname,
          type,
          bday,
          admission_date
        } = props.mentor

  return (
    <div className="col-md-6">
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title">{first_name} {last_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
          <p className="card-text">
            Birth date: {bday}<br />
            Admission date: {admission_date}
          </p>
          <a href={slack_nickname} className="card-link">Slack nickname</a>
        </div>
      </div>
    </div>
  )
}

export default Mentor