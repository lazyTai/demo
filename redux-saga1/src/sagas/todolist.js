import {call, take, put, select} from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* asyAddItem() {
    try {
        yield delay(500)
        return {success: true}
    } catch (e) {
        put({type: "addItemError"})
        return {success: false}
    }

}

export function* add_item_flow() {
    while (true) {
        var request = yield take('add_item_flow');
        var res = yield call(asyAddItem)
        if (res.success) {
            let tempList = yield select(state => state.todoList.list)
            tempList.push({
                id: Date.now(),
                value: request.payload
            })
            yield put({type: 'update_item_lists', payload: {tempList}})
        }
    }

}