import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BugPage from '../pages/bugpage';
import FishPage from '../pages/fishpage';
import SeaPage from '../pages/seapage';

export default class Menu extends Component {
    render() {
        return (

            <>
                <Router>
                    <nav>
                        <ul>
                            <li className="slide-toggle">
                                <Link to="/fishpage">fishes</Link>
                            </li>
                            <li className="slide-toggle">
                                <Link to="/bugpage">bugs</Link>
                            </li>
                            <li className="slide-toggle">
                                <Link to='/seapage'>sea creatures</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/fishpage'>
                            <FishPage />
                        </Route>
                        <Route path='/bugpage'>
                            <BugPage />
                        </Route>
                        <Route path='/seapage'>
                            <SeaPage />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}