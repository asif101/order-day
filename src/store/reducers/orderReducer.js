import { SET_NAME } from '../actions/types'

const initState = {
    name: 'Maneki Neko', //null
    people: [],
    items: [],
    tax: null,
    tip: null,
    subtotal: null,
    total: null
}


export default (state = initState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}