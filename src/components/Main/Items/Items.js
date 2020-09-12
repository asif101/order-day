import React from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item'
import { Card } from '@material-ui/core'
import List from '@material-ui/core/List'
import SimpleBar from 'simplebar-react'
import './Items.scss'

const Items = () => {
    return (
        <div className='Items'>
            <SimpleBar style={{ maxHeight: '100%' }}>
                <Card className='items-container'>
                    <List>
                        {items.map((x, i) => <Item
                            key={i}
                            data={x}
                            last={i + 1 === items.length}
                        />)}
                    </List>
                </Card>
            </SimpleBar>
        </div>
    )
}

export default connect(null)(Items)


const items = [
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
]