import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {add_item_flow} from "../sagas/todolist";
import _ from 'lodash'

class todolistApp extends React.Component {
    constructor() {
        super();
    }

    state = {
        value: ''
    }

    changeValue(e) {
        const value = e.target.value
        this.setState({value})
    }


    render_array() {
        var list = this.props.store.todoList.list;
        var _array = [];
        _.map(list, (item) => {
            _array.push(
                <div key={item.id}>{item.value}</div>
            )
        })
        return _array
    }

    render() {
        var {add_item_flow} = this.props
        var {value} = this.state
        return <div>
            <input type="text" defaultValue={this.state.value}
                   onChange={this.changeValue.bind(this)}
            /> <br/>
            <button onClick={
                () => {
                    add_item_flow(value)
                }
            }>add item
            </button>
            <div>
                {this.render_array()}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

function mapActionToProps(dispatch) {
    return {
        add_item_flow: bindActionCreators((payload) => {
            return {type: "add_item_flow", payload}
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapActionToProps)(todolistApp)

