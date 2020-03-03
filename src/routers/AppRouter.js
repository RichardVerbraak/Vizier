import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import MovieDetailPage from '../components/MovieDetailPage'
import WatchlistPage from '../components/WatchlistPage'
import LoginPage from '../components/LoginPage'

// Needed to spread out the props, these props are given by the Route (match, history, location) and are used inside of the component
// The detail page now rerenders because of the React key triggering another mount of the component
// The key changes depending on the id in the current URL

// Change path to the current request like /discover/popular to dashboard
// Give Dashboard page props so that the components inside have access to the url params

const AppRouter = () => {    
        return (
            <Router>
                    <Switch>
                        <Redirect exact from="/" to="/discover/Popular" />
                        <Route path="/discover/Popular" component={DashboardPage}/>
                        <Route
                            exact={true} 
                            path="/movie/:id" 
                            render={(props) => (
                                <MovieDetailPage key={props.match.params.id} {...props} />
                            )}
                        />
                        <Route path="/watchlist" component={WatchlistPage}/>
                        <Route path="/login" component={LoginPage}/>                    
                    </Switch>            
            </Router>
            
        )    
}

export default AppRouter

// Add later in Switch
// <Route component={NotFoundPage}/>