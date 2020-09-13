import { SET_NAME, ADD_ITEM, UPDATE_ITEM } from '../actions/types'

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
            id: 0,
            name: 'Spicy Chili Burger with Extra Mayo',
            cost: 12.46,
            owners: [0, 1]
        },
    ],
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
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case UPDATE_ITEM:
            const items = [...state.items]
            let foundIndex = items.findIndex(x => x.id === action.item.id)
            if(foundIndex > -1) items[foundIndex] = action.item
            else console.warn('Warning: Did not find item to update')
            return {
                ...state,
                items: items
            }
        default:
            return state
    }
}