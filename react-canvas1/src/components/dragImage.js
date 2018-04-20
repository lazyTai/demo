import React from 'react'
import {connect} from 'react-redux';
import PropsTypes from 'prop-types'
import {Route, Switch,} from 'dva/router'
import Konva from 'konva'
import {Stage, Layer, Rect, Text, Image, Group, Circle} from 'react-konva';

class dragImage extends React.PureComponent {

    state = {
        image: new window.Image()
    }

    onDragMove(e) {
        var _circle = e.target;
        var group = _circle.getParent();
        var topLeft = group.get('.top_left')[0];
        var topRight = group.get('.top_right')[0];
        var bottomRight = group.get('.bottom_right')[0];
        var bottomLeft = group.get('.bottom_left')[0];
        var image = group.get('.image')[0];

        var anchorX = _circle.getX();
        var anchorY = _circle.getY();

        // update anchor positions
        switch (_circle.getName()) {
            case 'top_left':
                topRight.setY(anchorY);
                bottomLeft.setX(anchorX);
                break;
            case 'top_right':
                topLeft.setY(anchorY);
                bottomRight.setX(anchorX);
                break;
            case 'bottom_right':
                bottomLeft.setY(anchorY);
                topRight.setX(anchorX);
                break;
            case 'bottom_left':
                bottomRight.setY(anchorY);
                topLeft.setX(anchorX);
                break;
        }

        image.position(topLeft.position());

        var width = topRight.getX() - topLeft.getX();
        var height = bottomLeft.getY() - topLeft.getY();
        if (width && height) {
            image.width(width);
            image.height(height);
        }
        this.props.onChangeSize && this.props.onChangeSize.call(this, {
            width, height,
        })

    }

    render() {
        const image_x = 0;
        const image_y = 0;
        const image_w = 100
        const image_h = 100
        return <Group
            draggable>
            <Image
                name={"image"}
                x={image_x}
                y={image_y}
                image={this.state.image}
                width={image_w}
                height={image_h}
                dragOnTop={false}
            />
            <Circle
                name={"top_left"}
                x={image_x}
                y={image_y}
                stroke={'#666'}
                fill={'#ddd'}
                strokeWidth={2}
                radius={8}
                draggable={true}
                dragOnTop={true}
                onDragMove={this.onDragMove.bind(this)}
            />
            <Circle
                name={"top_right"}
                x={image_x + image_w}
                y={image_y}
                stroke={'#666'}
                fill={'#ddd'}
                strokeWidth={2}
                radius={8}
                draggable={true}
                dragOnTop={true}
                onDragMove={this.onDragMove.bind(this)}
            />
            <Circle
                name={"bottom_left"}
                x={image_x}
                y={image_y + image_h}
                stroke={'#666'}
                fill={'#ddd'}
                strokeWidth={2}
                radius={8}
                draggable={true}
                dragOnTop={true}
                onDragMove={this.onDragMove.bind(this)}
            />
            <Circle
                name={"bottom_right"}
                x={image_x + image_w}
                y={image_y + image_h}
                stroke={'#666'}
                fill={'#ddd'}
                strokeWidth={2}
                radius={8}
                draggable={true}
                dragOnTop={true}
                onDragMove={this.onDragMove.bind(this)}
            />
        </Group>
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = this.props.src
        image.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                image: image
            });
        };
    }
}

function mapStateToProps(state) {
    return {store: state}
}

dragImage.propTypes = {
    src: PropsTypes.string.isRequired,
    onChangeSize: PropsTypes.func,
}

export default connect(mapStateToProps)(dragImage)

