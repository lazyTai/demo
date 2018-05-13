import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import Konva from 'konva'
import {Stage, Layer, Rect, Text} from 'react-konva';
import megerCanvas2 from './megerCanvas2'

class testMergeCanvas extends React.Component {
    constructor() {
        super();
        this.state = {
            image: new window.Image(),
            newImage: new window.Image(),
        }
    }

    render() {
        return <div>
            <img src={this.state.newImage.src} alt=""/>
        </div>
    }

    componentDidMount() {
        var self = this;
        this.state.image.src = "http://p7whtc26y.bkt.clouddn.com/18-4-29/34552105.jpg"
        this.state.image.crossOrigin = "anonymous"; //关键
        this.state.image.onload = () => {
            var newImage = megerCanvas2(this.state.image)
            self.setState({
                newImage
            })
        }
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(testMergeCanvas)