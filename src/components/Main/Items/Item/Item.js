import React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { OutlinedInput } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import './Item.scss'

const Item = ({ data, selected, last }) => {

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
            <ListItem className={selected ? 'Item selected' : 'Item'} >
                <div className='item-left-container'>
                    <FastfoodIcon />
                    <OutlinedInput
                        className='name'
                        disabled={!selected}
                        value={data.name}
                    />
                </div>
                <div className='item-right-container'>
                    {data.owners.length > 1 && makeGroup()}
                    <OutlinedInput
                        className='cost'
                        disabled={!selected}
                        value={data.cost}
                        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                    />
                </div>
            </ListItem>
            {!last && <Divider />}
        </>
    )
}

export default connect(null)(Item)