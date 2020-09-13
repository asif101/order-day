import { SELECT_ITEM } from './types'

export const selectItem = selectedItemId => ({
    type: SELECT_ITEM,
    selectedItemId
})