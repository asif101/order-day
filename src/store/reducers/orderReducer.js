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
    items: [
        {
            name: 'Spicy Chili Burger with Extra Mayo',
            cost: 12.46,
            owners: [0, 1]
        },
        {
            name: 'Udon',
            cost: 16.46,
            owners: [4]
        },
        {
            name: 'Hot Dog',
            cost: 12.46,
            owners: [2]
        },
    ],
    tax: 0,
    tip: 0,
    subtotal: 12.46,
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