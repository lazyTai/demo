import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, } from 'react-router'
import { Link } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from '../components/Loading'

// const PageBase = Loadable({
//     loader: () => import('./base'),
//     loading: Loading
// });

class Layout extends React.Component {
    render() {
        return <div>
            <div>这是 redux-saga</div>
            <div>https://www.jianshu.com/p/89ed2a01a3db</div>

            <div>
                <Link to={"/app/base"}>base</Link><br />

            </div>
            <div>
                Switch
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return { store: state }
}

export default connect(mapStateToProps)(Layout)

