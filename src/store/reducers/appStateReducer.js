import { SELECT_ITEM } from '../actions/types'

const initState = {
    selectedItemId: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return {
                ...state,
                selectedItemId: action.selectedItemId
            }
        default:
            return state
    }
}