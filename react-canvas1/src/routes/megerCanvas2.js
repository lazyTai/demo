const canvasForNew = document.createElement("canvas")
export default function createBrikImage(beauty) {
    var beautyW = beauty.width;
    var beautyH = beauty.height;
    var ctx = canvasForNew.getContext("2d");
    canvasForNew.width = beautyW*2
    canvasForNew.height = beautyH*2
    // ctx.scale(.5, .5)

    showImageLeft1(beauty)
    showImageLeft2(beauty)

    showImageHalfDown(beauty)
    showImageRight(beauty)
    showImageHalfUp(beauty)

    /*cavans 转出图片*/
    return convertCanvasToImage(canvasForNew)
}

function convertCanvasToImage(canvas) {
    var image = new Image();
    image.crossOrigin="anonymous"; //关键
    image.src = canvas.toDataURL("image/png");
    return image
}

function showImageHalfUp(beauty) {
    var mycv = canvasForNew
    var ctx = mycv.getContext("2d");
    var beautyW = beauty.width
    var beautyH = beauty.height
    ctx.drawImage(beauty,
        0, 0, beautyW, beautyH / 2,
        beautyW, beautyH + beautyH / 2, beautyW, beautyH / 2);
}

function showImageRight(beauty) {
    var mycv = canvasForNew
    var ctx = mycv.getContext("2d");
    var beautyW = beauty.width;
    var beautyH = beauty.height;
    ctx.drawImage(beauty,
        0, 0, beautyW, beautyH,
        beautyW, beautyH / 2, beautyW, beautyH);
}

function showImageHalfDown(beauty) {
    var mycv = canvasForNew
    var ctx = mycv.getContext("2d");
    var beautyW = beauty.width
    var beautyH = beauty.height
    ctx.drawImage(beauty,
        0, beautyH / 2, beautyW, beautyH / 2,
        beautyW, 0, beautyW, beautyH / 2);
}

function showImageLeft1(beauty) {
    var mycv = canvasForNew
    var ctx = mycv.getContext("2d");
    var beautyW = beauty.width;
    var beautyH = beauty.height;
    ctx.drawImage(beauty,
        0, 0, beautyW, beautyH,
        0, 0, beautyW, beautyH);
}

function showImageLeft2(beauty) {
    var mycv = canvasForNew
    var ctx = mycv.getContext("2d");
    var beautyW = beauty.width;
    var beautyH = beauty.height;
    ctx.drawImage(beauty,
        0, 0, beautyW, beautyH,
        0, beautyH, beautyW, beautyH);
}