import React from 'react'
import axios from 'axios'
import qs from 'qs'


const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      axios
        .delete(`/api/users/${action.payload}`)
        .then(console.log)
        .catch(console.error)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    // case 'ADD_USEER':
    // axios.post(`/api/users/${action.payload}`)
    // .then(users=>({users}))

    case 'ADD_MODULE':
    console.log('adding context')
    console.log(action.payload)

    axios.post(`/api/modules`, action.payload )
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    return{
      ...state,
      modules:[action.payload,
      ...state.modules]
    }
    default:
      return state
  }
}

export class Provider extends React.Component {
  state = {
    users: [],
    modules:[],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {
    axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(console.error)
      axios
      .get('/api/modules')
      .then(res => this.setState({ modules: res.data }))
      .catch(console.error)
  }

  render = () => (
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  )
}

export const Consumer = Context.Consumer
