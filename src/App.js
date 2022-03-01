import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
// import MenuLeft from '../../my-app/src/componenst/menuLeft';
import { Button } from 'reactstrap';
import Home from './page/home';
import Add from './page/add'
import Edit from './page/edit'
import ADDVoucher from './page/addVoucher'
export default function App() {
  return (
    <div>
      <h3 style={{margin:5, padding:5}}>Elixer_ADMIN</h3>
      <div>
        
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={Add} />
            <Route exact path='/edit/id=:id' component={Edit} />
            <Route exact path='/addVoucher' component={ADDVoucher}/>
          </Switch>
        </Router>
        
      </div>

     
    </div>
  )
}
