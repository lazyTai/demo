import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'

import Konva from 'konva'
import {Stage, Layer, Rect, Text, Image, Group, Circle} from 'react-konva';
import DrawImage from '../components/dragImage'

class Drawing extends React.PureComponent {
    state = {
        width: 100,
        height: 100,
        image_width_text: 100,
        image_height_text: 100
    }

    onChangeSize({width, height}) {
        // this.setState({
        //     image_width_text: "w:" + width,
        //     image_height_text: "h" + height
        // })
    }

    render() {
        var all_width = 600
        return <Stage
            width={all_width}
            height={all_width}
            style={{border: '1px solid #ccc'}}
        >
            <Layer>
                <DrawImage
                    src={"http://konvajs.github.io/assets/yoda.jpg"}
                    onChangeSize={this.onChangeSize.bind(this)}
                />

                <Text text={this.state.image_width_text}/>
                <Text text={this.state.image_height_text} y={20}/>
                <Text text={"image_l:"} y={40}/>
                <Text text={"image_t:"} y={60}/>

            </Layer>
        </Stage>
    }


}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)

(
    Drawing
)

