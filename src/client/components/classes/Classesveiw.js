import React from 'react'
//import Progress from '../layouts/Progress'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: []
          };
      }
  

     render () {

     return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm mb-3">
              <div className="card-body">
                <h5 className="card-title">{this.props.classdata.classname} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Class
