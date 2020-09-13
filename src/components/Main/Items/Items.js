import React from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item'
import Totals from './Totals/Totals'
import Button from '@material-ui/core/Button'
import { Card } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import SimpleBar from 'simplebar-react'
import './Items.scss'

const Items = ({ items }) => {

    const makeItems = () => {
        if (items.length > 0) return items.map((x, i) => <Item
            key={i}
            data={x}
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
                <Button className='add-item-button' color="primary" variant="contained">Add Item</Button>
                <Totals />
            </SimpleBar>
        </div>
    )
}

const mapStateToProps = ({ order }) => ({ items: order.items })

export default connect(mapStateToProps)(Items)