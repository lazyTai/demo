export default function (state = {
    list: []
}, action) {
    switch (action.type) {
        case "update_item_lists":
            var list = action.payload.tempList
            return {
                ...state,
                list
            };
        default :
            return state;
    }
}