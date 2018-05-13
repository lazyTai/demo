import React from 'react'
import {connect} from 'react-redux';
import {Route, Switch,} from 'dva/router'
import Konva from 'konva'
import {Stage, Layer, Rect, Text} from 'react-konva';

class MegerCanvas extends React.Component {
    showImageO(beauty) {
        var mycv = document.getElementById("canvasForO");
        var ctx = mycv.getContext("2d");
        ctx.drawImage(beauty, 0, 0);
    }

    showImageHalfUp(beauty) {
        var mycv = document.getElementById("canvasForNew");
        var ctx = mycv.getContext("2d");
        var beautyW = beauty.width
        var beautyH = beauty.height
        ctx.drawImage(beauty,
            0, 0, beautyW, beautyH / 2,
            beautyW, beautyH + beautyH / 2, beautyW, beautyH / 2);
    }

    showImageRight(beauty) {
        var mycv = document.getElementById("canvasForNew");
        var ctx = mycv.getContext("2d");
        var beautyW = beauty.width;
        var beautyH = beauty.height;
        ctx.drawImage(beauty,
            0, 0, beautyW, beautyH,
            beautyW, beautyH / 2, beautyW, beautyH);
    }

    showImageHalfDown(beauty) {
        var mycv = document.getElementById("canvasForNew");
        var ctx = mycv.getContext("2d");
        var beautyW = beauty.width
        var beautyH = beauty.height
        ctx.drawImage(beauty,
            0, beautyH / 2, beautyW, beautyH / 2,
            beautyW, 0, beautyW, beautyH / 2);
    }

    showImageLeft1(beauty) {
        var mycv = document.getElementById("canvasForNew");
        var ctx = mycv.getContext("2d");
        var beautyW = beauty.width;
        var beautyH = beauty.height;
        ctx.drawImage(beauty,
            0, 0, beautyW, beautyH,
            0, 0, beautyW, beautyH);
    }

    showImageLeft2(beauty) {
        var mycv = document.getElementById("canvasForNew");
        var ctx = mycv.getContext("2d");
        var beautyW = beauty.width;
        var beautyH = beauty.height;
        ctx.drawImage(beauty,
            0, 0, beautyW, beautyH,
            0, beautyH, beautyW, beautyH);
    }

    convertCanvasToImage(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    render() {
        return <div>
            <canvas id="canvasForO" width={1000} height={1000} style={{background: "red"}}></canvas>
            <canvas id="canvasForNew" style={{background: "#eee"}}></canvas>
        </div>
    }

    componentDidMount() {
        var image = new Image();
        image.src = "http://p7whtc26y.bkt.clouddn.com/18-4-29/34552105.jpg"
        image.onload = () => {
            this.showImageO(image)
            var beautyW = image.width;
            var beautyH = image.height;
            var canvasForNew = document.getElementById("canvasForNew")
            var ctx = canvasForNew.getContext("2d");
            canvasForNew.width=beautyW
            canvasForNew.height=beautyH
            ctx.scale(.5,.5)

            this.showImageLeft1(image)
            this.showImageLeft2(image)

            this.showImageHalfDown(image)
            this.showImageRight(image)
            this.showImageHalfUp(image)


        }

    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(MegerCanvas)