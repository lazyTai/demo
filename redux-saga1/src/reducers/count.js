export default function (state = {
    value: 0
}, action) {
    switch (action.type) {
        case 'add' :
            var value = state.value + 1;
            return {
                ...state,
                value
            }
            break;
        case 'down' :
            var value = state.value - 1;
            return {
                ...state,
                value
            }
            break;
        default :
            return state;
            break
    }
}