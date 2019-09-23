import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import MainView from './Components/MainView/MainView';
import Settings from './Components/Settings/Settings';

export default (
    <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={MainView}  path='/Main'/>
        <Route component={Settings} exact path='/Settings'/>
    </Switch>
)