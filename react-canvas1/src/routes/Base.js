import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import Konva from 'konva'
import {Stage, Layer, Rect, Text} from 'react-konva';

class Base extends React.Component {
    constructor() {
        super();
        this.change_color = this.change_color.bind(this)
    }

    state = {
        color: Konva.Util.getRandomColor()
    }

    change_color() {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    }

    render() {
        var width = 100
        var height = 100
        return <div>
            base
            <div>
                <Stage
                    width={width}
                    height={height}
                    style={{width, height,border:'1px solid #eee'}}
                >
                    <Layer>
                        <Rect
                            width={50}
                            height={50}
                            fill={this.state.color}
                            shadowBlur={5}
                            onClick={
                                this.change_color
                            }
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

export default connect(mapStateToProps)(Base)

