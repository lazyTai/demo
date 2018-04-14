import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'

class Base extends React.Component {
    render() {
        return <div>
            base
            <a href="https://codesandbox.io/s/new">
                <img alt="Edit new" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
            </a>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Base)

