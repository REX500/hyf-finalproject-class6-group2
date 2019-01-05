import React from 'react'
import { Link } from 'react-router-dom'
import Module from '../modules/Module'
class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      class: [],
      modulesarr: []
    }
  }

  componentWillReceiveProps({ classdata }) {
    this.setState({ class: this.props.classdata })
  }
  deleteClass(id) {
      fetch(`api/classes/${id}`, {
      method: 'DELETE',
         })
         .then(req=>console.log(req))
  }

  componentDidMount() {
    
    const id = this.props.classdata.classid
    console.log(id)
    fetch(`/api/classesmodules/${ id }`)
      .then(res => res.json())
      .then(modulesarr => this.setState({modulesarr}))
      .catch(console.log)
  }

  componentDidCatch() {
    this.setState({class: this.props.classdata})
    console.log(this.state.class)
  }

  render() {
       return (
      <div>
        <div className="col-md-6">
          <div className="card shadow-sm mb-3">
            <div className="card-body">

              <h5 className="card-title">{this.props.classdata.classname} </h5>
              <div className="row">
              <Link
                      to={`/modules/addtoclass/${this.props.classdata.classid}`}
                      //params={{ testvalue: "hello" }}
                      className="btn btn-info mr-2 ml-2"
                    >
                      <i className="fa fa-pencil" /> Add a module
                    </Link>
              </div>
              <div className="row">
                {this.state.modulesarr.map(datacm => {
                  return <Module cllmod={datacm} />
                })}
              </div>
              
              <button

                          className="btn btn-danger"
                onClick={() => this.deleteClass(this.props.classdata.classid)}>
                <i className="fa fa-trash" />

              </button>
            </div>
          </div>
        </div>
      </div>
      //
    )
  }
}

export default Class
