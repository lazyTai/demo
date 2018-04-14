import React from 'react'
import {connect} from 'react-redux';

class Page_counterApp extends React.Component {
    render() {
        var {value} = this.props.store.count;
        var {dispatch} = this.props;
        return <div>
            <button onClick={() => {
                dispatch({type: 'add'})
            }}>add
            </button>
            <br/>
            <button onClick={() => dispatch({type: 'down'})}>---</button>
            <br/>
            <button onClick={() => dispatch({type: 'add_Async'})}>add 1s</button>
            <br/>
            <button onClick={() => dispatch({type: 'down_Async'})}>---- 1s</button>
            <br/>
            <div>
                {value}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state}
}

export default connect(mapStateToProps)(Page_counterApp)

