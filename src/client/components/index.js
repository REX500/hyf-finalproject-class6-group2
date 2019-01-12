import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users/Users'
import UserForm from './users/user-form'
import Calender from './calender/Calender'
import ClassesCalender from './classes/Calender'
import AddClass from './_classes/AddClass'
import Modules from './modules/Modules'
import ModuleForms from './modules/module-form'
import Home from './pages/home'
import Profile from './users/profile'

class Main extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/profile' component={Profile} />
      <Route path='/calender' component={Calender} />
      <Route path='/classes' component={ClassesCalender} />
      <Route path='/classes/add' component={AddClass} />

      <Route path='/modules' component={Modules} />
      <Route path='/modules/add' component={ModuleForms.AddModule} />
      <Route path='/modules/edit/:id' component={ModuleForms.EditModule} />
      <Route path='/modules/addtoclass' component={ModuleForms.Addtoclass} />

      <Route path='/users' component={Users} />
      <Route path='/users/add' component={UserForm.AddUser} />
      <Route path='/users/edit/:id' component={UserForm.EditUser} />

      <Route render={() => 'Page not found'} />
    </Switch>
  )
}

export default Main
