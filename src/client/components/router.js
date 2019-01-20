import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users'
import UserForm from './users/user-form'
import Calender from './_calender/Calender'
import ClassesCalender from './classes'
import AddClass from './_classes/AddClass'
import Modules from './modules'
import Home from './pages/home'
import Profile from './users/Profile'
import Form from './_form/Form'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'

class Routers extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/calender' component={Calender} />
      <Route path='/classes' component={ClassesCalender} />
      <Route path='/classes/add' component={AddClass} />

      <Route path='/modules' component={Modules} exact />
      <Route path='/modules/edit/:id' component={EditModule} exact />
      <Route path='/modules/add' component={AddModule} />

      <Route path='/users' component={Users} exact />
      <Route path='/users/add' component={UserForm.AddUser} />
      <Route path='/users/edit/:id' component={UserForm.EditUser} />
      <Route path='/users/:id' render={() => <Profile />} />
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/form' component={Form} exact />

      <Route render={() => 'Page not found'} />
    </Switch>
  )
}

export default Routers
