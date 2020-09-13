import React from 'react'
import { connect } from 'react-redux'
import { Card } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import './Totals.scss'

const Totals = ({ order }) => {

    return (
        <Card className='totals-container'>
            <List className='list'>
                <ListItem className='subtotal-container'>
                    <span className='label'>{'SUBTOTAL:'}</span>
                    <span className='value'>{'$' + order.subtotal}</span>
                </ListItem>
                <Divider />
                <ListItem className='tax-container'>
                    <span className='label'>{'Tax:'}</span>
                    <span className='value'>{'$' + order.tax}</span>
                </ListItem>
                <Divider />
                <ListItem className='tip-container'>
                    <span className='label'>{'Tip:'}</span>
                    <span className='value'>{'$' + order.tip}</span>
                </ListItem>
                <Divider />
                <ListItem className='total-container'>
                    <span className='label'>{'Total:'}</span>
                    <span className='value'>{'$' + order.total}</span>
                </ListItem>
            </List>
        </Card>
    )
}

const mapStateToProps = ({ order }) => ({ order })

export default connect(mapStateToProps)(Totals)