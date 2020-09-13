import { SET_NAME } from '../actions/types'

const initState = {
    name: 'Maneki Meko', //null
    people: [
        { id: 0, name: 'Asif' },
        { id: 1, name: 'Elizabeth' },
        { id: 2, name: 'Jason' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Ella' },
        { id: 5, name: 'Gokul' },
        { id: 6, name: 'Amber' },
        { id: 7, name: 'Asif' },
    ],
    items: [],
    tax: 0,
    tip: 0,
    subtotal: 0,
    total: 0
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