import {put, call, take, fork} from 'redux-saga/effects';
import {takeEvery, takeLatest} from 'redux-saga'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* effect_add_Async() {
    yield  call(delay, 1000)
    yield put({type: 'add'})
}

function* effect_down_Async() {
    yield  call(delay, 1000)
    yield put({type: 'down'})
}

export function* countAppAdd() {
    while (true) {
        yield take("add_Async");
        yield call(effect_add_Async)

    }
}

export function* countAppDown() {
    while (true) {
        yield take("down_Async");
        yield call(effect_down_Async)

    }
}