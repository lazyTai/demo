import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'react-router'
import {Link} from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const Page_counterApp = Loadable({
    loader: () => import('./Page_counterApp'),
    loading: Loading
});
const Page_todolistApp = Loadable({
    loader: () => import('./todolistApp'),
    loading: Loading
});

class Layout extends React.Component {
    render() {
        return <div>
            <div>这是 redux-saga</div>
            <div>https://www.jianshu.com/p/89ed2a01a3db</div>
            <div>https://www.jianshu.com/p/7cac18e8d870</div>
            <div>https://github.com/guangqiang-liu/redux-saga-counterApp</div>
            <div>
                <Link to={"/app/counterApp"}>counterApp</Link><br/>
                <Link to={"/app/todolistApp"}>todolistApp</Link><br/>
            </div>
            <div style={{padding: 30}}>
                <Switch>
                    <Route path={"/app/counterApp"} component={Page_counterApp}></Route>
                    <Route path={"/app/todolistApp"} component={Page_todolistApp}></Route>
                </Switch>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Layout)

