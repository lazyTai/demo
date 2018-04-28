import {
    TYPE_SHIRT,
    TYPE_PHONE,
    TYPE_PILLOW,
    TYPE_GLASS,
    TYPE_QUILT,
    TYPE_MINISKIRT,
    ORIGINAL_PRODUCT_WIDTH,
    ORIGINAL_PRODUCT_HEIGHT
} from '../constants'
import _ from 'lodash'


import {effects} from 'dva/saga'
// console.log(effects.put)
export function isImage(file) {
    var ImgType = ["gif", "jpeg", "jpg", "bmp", "png"];//图片
    if (!RegExp("\.(" + ImgType.join("|") + ")$", "i").test(file.name.toLowerCase())) {
        console.log("不是指定图片格式,重新选择");
        return false;
    } else {
        return true
    }
}


export function array_remove_obj(_array, _obj) {
    var _index = null;
    _array.map((_item, index) => {
        if (_item.id == _obj) {
            _index = index
        }
    })
    _array.splice(_index, 1)
    return _array
}

export function array_distinct_insert_item(_array, item) {
    var _isIn = false;
    _array.map((_item) => {
        if (_item.id == item) {
            _isIn = true
        }
    })
    if (!_isIn) {
        _array.push(item)
    }
    return _array
}

export function array_update_item(_array, item) {
    var _isIn = false;
    var _index = null;
    _array.map((_item, index) => {
        if (_item.id == item) {
            _isIn = true;
            _index = index
        }
    })
    if (!_isIn) {
        _array[_index] = item
    }
    return _array
}

export function adapter_size(imgDom) {
    var _width = imgDom.width;
    var _height = imgDom.height
    var diagonal_big = Math.sqrt(ORIGINAL_PRODUCT_WIDTH * ORIGINAL_PRODUCT_WIDTH + ORIGINAL_PRODUCT_HEIGHT * ORIGINAL_PRODUCT_HEIGHT)
    var diagonal_small = Math.sqrt(_width * _width + _height * _height)
    var ratio = diagonal_small / diagonal_big;
    return {w: ratio * _width / 10, h: _height * ratio / 10, ratio: ratio}

}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function uuid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export function isMatch(myreg, str) {
    //声明邮箱正则
    //对输入的值进行判断
    return myreg.test(str);
}

export function set_state_reducer(state, actions) {
    var {payload} = actions
    require('lodash').map(payload, (item, key) => {
        state[key] = item
    })
    return {...state}
}

export function set_state(obj) {
    return (name_space) => {
        return effects.put({
            type: `${name_space}/set_state`,
            payload: obj
        })
    }
}

export function set_history(history) {
    window.__history__ = history;
    return
}

export function get_history() {
    return window.__history__;
}

export function * get_state(namespace) {
    return yield effects.select(state => state[namespace]);
}

export function find_item_in_array_by_id(key,id,array){
    var _obj={};
    _.each(array,(item)=>{
        if(item[key]==id){
            _obj=item
            return false;
        }
    })
    return _obj
}