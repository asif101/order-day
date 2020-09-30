import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { OutlinedInput } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import { isNumber } from '../../../../utils/assertUtils'
import { updateTax, updateTip } from '../../../../store/actions/orderActions'


import './Totals.scss'

const Totals = ({ order, updateTax, updateTip }) => {

    const [selected, setSelected] = useState(null)
    const [taxBuffer, setTaxBuffer] = useState(order.tax.toFixed(2))
    const [tipBuffer, setTipBuffer] = useState(order.tip.toFixed(2))

    const handleClickAway = () => {
        setTaxBuffer(order.tax.toFixed(2))
        setTipBuffer(order.tip.toFixed(2))
        setSelected(null)
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Card className='totals-container'>
                <List className='list'>
                    <ListItem className='subtotal-container'>
                        <span className='label'>{'Subtotal:'}</span>
                        <span className='value'>{'$    ' + order.subtotal.toFixed(2)}</span>
                    </ListItem>
                    <Divider />
                    <ListItem
                        className={selected === 'tax' ? 'tax-container selected' : 'tax-container'}
                        onClick={() => { setSelected('tax') }}
                    >
                        <span className='label'>{'Tax:'}</span>
                        <OutlinedInput
                            className='value'
                            disabled={selected !== 'tax'}
                            value={taxBuffer}
                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                            onChange={e => {
                                setTaxBuffer(e.target.value)
                                const num = parseFloat(e.target.value)
                                if (isNumber(num)) updateTax(num)
                            }}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem
                        className={selected === 'tip' ? 'tip-container selected' : 'tip-container'}
                        onClick={() => { setSelected('tip') }}
                    >
                        <span className='label'>{'Tip:'}</span>
                        <OutlinedInput
                            className='value'
                            disabled={selected !== 'tip'}
                            value={tipBuffer}
                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                            onChange={e => {
                                setTipBuffer(e.target.value)
                                const num = parseFloat(e.target.value)
                                if (isNumber(num)) updateTip(num)
                            }}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem className='total-container'>
                        <span className='label'>{'Total:'}</span>
                        <span className='value'>{'$   ' + order.total.toFixed(2)}</span>
                    </ListItem>
                </List>
            </Card >
        </ClickAwayListener>
    )
}

const mapStateToProps = ({ order }) => ({ order })

export default connect(mapStateToProps, { updateTax, updateTip })(Totals)