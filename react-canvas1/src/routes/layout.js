import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const PageBase = Loadable({
    loader: () => import('./base'),
    loading: Loading
});

class Layout extends React.Component {
    render() {
        return <div>
            <div>这是 react-konva的demosssss</div>
            <div>https://github.com/lavrton/react-konva</div>
            <Switch>
                <Route path={"/app/base"} component={PageBase}></Route>
            </Switch>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Layout)

