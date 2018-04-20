import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable';
import Loading from './components/Loading'
import store from './store'
/* page  */
const PageLayout = Loadable({
    loader: () => import('./routes/layout'),
    loading: Loading
});

export default () => <Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app" />} />
            <Route path="/app" component={PageLayout} />
        </Switch>

    </Router>
</Provider> 