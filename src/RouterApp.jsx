import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GameList from './GameList'
import GamePage from './GamePage'

const RouterApp = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={GameList} />
                <Route exact path='/game/:id' component={GamePage} />
            </Switch>
        </Router>
    )
}

export default RouterApp