import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BugPage from '../pages/bugs/bugpage';
import FishPage from '../pages/fishes/fishpage';
import SeaPage from '../pages/sea creatures/seapage';
import HomePage from '../pages/homepage';
import FavouritesPage from '../pages/favouritespage';
import FishInfo from '../pages/fishes/fishinfo';
import BugInfo from '../pages/bugs/buginfo';
import SeaInfo from '../pages/sea creatures/seainfo';

export default class Menu extends Component {
    render() {
        return (

            <>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="/fishes">fishes</Link>
                            </li>
                            <li>
                                <Link to="/bugs">bugs</Link>
                            </li>
                            <li>
                                <Link to='/sea'>sea creatures</Link>
                            </li>
                            <li>
                                <Link to='/favourites'>favourites</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/fishes' component={FishPage} />
                        <Route path='/bugs' component={BugPage} />
                        <Route path='/sea' component={SeaPage} />
                        <Route path='/favourites' component={FavouritesPage} />
                        <Route path='/fishinfo/:fishId' component={FishInfo} />
                        <Route path='/buginfo/:bugId' component={BugInfo} />
                        <Route path='/seainfo/:seaId' component={SeaInfo} />
                        <Route path='/' component={HomePage} />
                    </Switch>
                </Router>
            </>
        );
    }
}