import React, { useState } from 'react'
import { connect } from 'react-redux'
import { OutlinedInput } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { updateItem } from '../../../../store/actions/orderActions'
import { selectItem } from '../../../../store/actions/appStateActions'
import { isNumber } from '../../../../utils/assertUtils'
import './Item.scss'

const Item = ({ data, selected, last, updateItem, selectItem }) => {

    const [costBuffer, setCostBuffer] = useState(data.cost.toFixed(2))

    const makeGroup = () => {
        return (
            <div className='item-group-container'>
                <PeopleAltIcon />
                <span>{data.owners.length}</span>
            </div>
        )
    }

    return (
        <>
            <ClickAwayListener onClickAway={() => { if (selected) { selectItem(null); setCostBuffer(data.cost.toFixed(2)) } }}>
                <ListItem className={selected ? 'Item selected' : 'Item'} onClick={() => { selectItem(data.id) }}>
                    <div className='item-left-container'>
                        <FastfoodIcon />
                        <OutlinedInput
                            multiline
                            className='name'
                            disabled={!selected}
                            value={data.name}
                            onChange={e => {
                                updateItem({ ...data, name: e.target.value })
                            }}
                        />
                    </div>
                    <div className='item-right-container'>
                        {data.owners.length > 1 && makeGroup()}
                        <OutlinedInput
                            className='cost'
                            disabled={!selected}
                            value={costBuffer}
                            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                            onChange={e => {
                                setCostBuffer(e.target.value)
                                const num = parseFloat(e.target.value)
                                if (isNumber(num)) {
                                    updateItem({ ...data, cost: num })
                                }
                            }}
                        />
                    </div>
                </ListItem>
            </ClickAwayListener>
            {!last && <Divider />}
        </>
    )
}

export default connect(null, { updateItem, selectItem })(Item)