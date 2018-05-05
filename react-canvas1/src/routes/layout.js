import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import {Link} from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const PageBase = Loadable({
    loader: () => import('./base'),
    loading: Loading
});
const PageDraw = Loadable({
    loader: () => import('./Drawing'),
    loading: Loading
});
const PageFillImage = Loadable({
    loader: () => import('./fillImage'),
    loading: Loading
});
const MegerCanvas = Loadable({
    loader: () => import('./megerCanvas'),
    loading: Loading
});

class Layout extends React.Component {
    render() {
        return <div>
            <div>这是 react-konva的demosssss</div>
            <div>https://github.com/lavrton/react-konva</div>

            <div>
                <Link to={"/app/base"}>base</Link><br/>

                <Link to={"/app/draw"}>draw</Link>
                <Link to={"/app/fill-image"}>PageFillImage</Link>
                <Link to={"/app/merger-canvas"}>merger-canvas</Link>
            </div>
            <div style={{padding: 30}}>
                <Switch>
                    <Route path={"/app/base"} component={PageBase}></Route>
                    <Route path={"/app/draw"} component={PageDraw}></Route>
                    <Route path={"/app/fill-image"} component={PageFillImage}></Route>
                    <Route path={"/app/merger-canvas"} component={MegerCanvas}></Route>
                </Switch>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Layout)

