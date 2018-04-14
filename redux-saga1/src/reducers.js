import {combineReducers} from 'redux'

import CountReducer from './reducers/count'
import todoList from './reducers/todoLists'

export default combineReducers({
    count: CountReducer,
    todoList: todoList,
})