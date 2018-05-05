import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import Konva from 'konva'
import {Stage, Layer, Rect, Text} from 'react-konva';

class MegerCanvas extends React.Component {
    render() {
        return <div>
            <canvas width={100} height={100} style={{background:"#eee"}}>

            </canvas>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(MegerCanvas)