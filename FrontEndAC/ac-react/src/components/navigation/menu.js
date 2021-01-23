import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BugPage from '../pages/bugs/bugpage';
import FishPage from '../pages/fishes/fishpage';
import SeaPage from '../pages/sea creatures/seapage';
import HomePage from '../pages/homepage';
import FavouritesPage from '../pages/favouritespage';
import FishInfoTest from '../pages/fishes/fishinfotest';

export default class Menu extends Component {
    render() {
        return (

            <>
                <Router>
                    <nav>
                        <ul>
                            <li className="slide-toggle">
                                <Link to="/">home</Link>
                            </li>
                            <li className="slide-toggle">
                                <Link to="/fishes">fishes</Link>
                            </li>
                            <li className="slide-toggle">
                                <Link to="/bugs">bugs</Link>
                            </li>
                            <li className="slide-toggle">
                                <Link to='/seacreatures'>sea creatures</Link>
                            </li>
                            <li className="slide-toggle">
                                <Link to='/favourites'>favourites</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>

                        <Route path='/fishes'>
                            <FishPage />
                        </Route>
                        <Route path='/bugs'>
                            <BugPage />
                        </Route>
                        <Route path='/seacreatures'>
                            <SeaPage />
                        </Route>
                        <Route path='/favourites'>
                            <FavouritesPage />
                        </Route>
                        <Route path='/fishinfotest/:fishId' fishId='FishInfoTest' component={FishInfoTest} />

                        <Route path='/'>
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}