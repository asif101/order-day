import React from 'react'
import { connect } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Card from '@material-ui/core/Card'
import { updateItem } from '../../../../store/actions/orderActions'
import './Person.scss'

const Person = ({ id, name, items, selectedItemId, updateItem }) => {

    const isOwnerOfSelectedItem = selectedItemId !== null ? items[selectedItemId].owners.includes(id) : false

    const handleClick = e => {
        if (selectedItemId !== null) {
            let owners = [...items[selectedItemId].owners]
            if (isOwnerOfSelectedItem) owners = owners.filter(x => x !== id)
            else owners.push(id)
            updateItem({ ...items[selectedItemId], owners })
        }
    }

    return (
        <Card className={isOwnerOfSelectedItem ? 'Person owner' : 'Person'} onClick={handleClick}>
            <div className='Person-icon-container'>
                <AccountCircleIcon />
            </div>
            <div className='Person-text-container'>
                <span className='name'>{name}</span>
                <span className='money'>$0.00</span>
            </div>
        </Card>
    )
}

const mapStateToProps = ({ order, appState }) => ({
    items: order.items,
    selectedItemId: appState.selectedItemId,
})

export default connect(mapStateToProps, { updateItem })(Person)