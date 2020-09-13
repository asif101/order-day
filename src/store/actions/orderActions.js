import { SET_NAME, ADD_ITEM } from './types'
import { selectItem } from './appStateActions'

export const setName = name => ({
    type: SET_NAME,
    name
})

export const addItem = () => (dispatch, getState) => {

    const { items } = getState().order
    const newId =  items.length > 0 ? Math.max(...items.map(x => x.id)) + 1 : 0
    dispatch({
        type: ADD_ITEM,
        item: { id: newId, name: '', cost: 0, owners: [] }
    })
    dispatch(selectItem(newId))

}