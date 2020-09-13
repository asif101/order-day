import React from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item'
import { Card } from '@material-ui/core'
import List from '@material-ui/core/List'
import SimpleBar from 'simplebar-react'
import './Items.scss'

const Items = ({ order }) => {
    return (
        <div className='Items'>
            <SimpleBar style={{ maxHeight: '100%' }}>
                <Card className='items-container'>
                    <List>
                        {order.items.map((x, i) => <Item
                            key={i}
                            data={x}
                            last={i + 1 === order.items.length}
                        />)}
                    </List>
                </Card>
            </SimpleBar>
        </div>
    )
}

const mapStateToProps = ({ order }) => ({ order })

export default connect(mapStateToProps)(Items)