import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import Loadable from 'react-loadable';
import Loading from './components/Loading'
const { ConnectedRouter } = routerRedux;

/* page  */
const PageLayout = Loadable({
    loader: () => import('./routes/base'),
    loading: Loading
});

export default ({ history, app }) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app" />} />
                <Route path="/app" component={PageLayout} />
            </Switch>

        </ConnectedRouter>
    );
}