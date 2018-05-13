import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import Konva from 'konva'
import {Stage, Layer, Rect, Text} from 'react-konva';
import megerCanvas2 from "./megerCanvas2";


class fillImage extends React.Component {

    constructor() {
        super()
        this.state = {
            image: new window.Image(),
            diffX: 0,
            diffY: 0,
        }
        this.state.image.setAttribute("crossOrigin",'Anonymous')
        this.state.image.src = "http://p7whtc26y.bkt.clouddn.com/18-4-30/62319414.jpg";
    }

    componentDidMount() {
        var self = this;
        this.state.image.onload = () => {
            self.setState({
                image: megerCanvas2(this.state.image)
            })
        }
    }

    render() {
        var width = 1000;
        var height = 1000
        return <div>
            fillImage
            <div>
                <Stage
                    width={width}
                    height={height}
                    style={{width, height, border: '1px solid #eee'}}
                >
                    <Layer>
                        <Rect
                            width={600}
                            height={600}
                            fillPatternImage={this.state.image}
                            fillPatternScale={{x: .1, y: .1}}
                            // fillPatternOffsetX={-100}
                            fillPatternOffsetX={this.state.diffX}
                            fillPatternOffsetY={this.state.diffY}
                            fillPatternRepeat={"no-repeat"}
                            onMouseDown={(e) => {
                                this.move = true;
                                this.startX = e.evt.pageX
                                this.oldX = e.evt.pageX

                                this.startY = e.evt.pageY
                                this.oldY = e.evt.pageY
                                // console.log("onMouseDown ")
                            }}
                            onMouseMove={(e) => {
                                if (this.move) {
                                    this.startX = e.evt.pageX;
                                    this.startY = e.evt.pageY
                                    this.setState({
                                        diffX: this.state.diffX + (this.startX - this.oldX) * 5,
                                        diffY: this.state.diffY + (this.startY - this.oldY) * 5
                                    })
                                    this.oldY = e.evt.pageY
                                    this.oldX = e.evt.pageX
                                }
                            }}
                            onMouseUp={() => {
                                this.move = false
                                // console.log("onMouseUp ")
                            }}
                            onMouseLeave={() => {
                                this.move = false
                                // console.log("onMouseUp ")
                            }}
                        />
                    </Layer>
                </Stage>
            </div>
        </div>
    }
}


function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(fillImage)