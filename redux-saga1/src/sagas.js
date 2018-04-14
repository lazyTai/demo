import {fork} from 'redux-saga/effects'
import {countAppAdd, countAppDown} from './sagas/countApp'
import {add_item_flow} from './sagas/todolist'

export default function* () {
    yield  fork(countAppAdd)
    yield fork(countAppDown)
    yield  fork(add_item_flow)
}