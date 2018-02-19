import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Main from '../components/main';
import Single from '../components/single';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

export const Routes = () => (

            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path="/detail/:index" component={Single}/>
                </Switch>
            </Router>
);