import React from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item'
import Totals from './Totals/Totals'
import Button from '@material-ui/core/Button'
import { Card } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import SimpleBar from 'simplebar-react'
import { addItem } from '../../../store/actions/orderActions'
import './Items.scss'

const Items = ({ items, selectedItemId, addItem }) => {

    const makeItems = () => {
        if (items.length > 0) return items.map((x, i) => <Item
            key={i}
            data={x}
            selected={x.id === selectedItemId}
            last={i + 1 === items.length}
        />)
        else return <ListItem className='no-items-placeholder'><span>No Items</span></ListItem>
    }

    return (
        <div className='Items'>
            <SimpleBar style={{ maxHeight: '100%' }}>
                <Card className='items-container'>
                    <List className='list'>
                        {makeItems()}
                    </List>
                </Card>
                <Button
                    className='add-item-button'
                    color="primary"
                    variant="contained"
                    onClick={addItem}
                >Add Item</Button>
                <Totals />
            </SimpleBar>
        </div>
    )
}

const mapStateToProps = ({ order, appState }) => ({
    items: order.items,
    selectedItemId: appState.selectedItemId
})

export default connect(mapStateToProps, { addItem })(Items)