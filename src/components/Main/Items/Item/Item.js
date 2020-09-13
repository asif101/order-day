import React from 'react'
import { connect } from 'react-redux'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import './Item.scss'

const Item = ({ data, last }) => {

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
            <ListItem className='Item'>
                <div className='item-left-container'>
                    <FastfoodIcon />
                    <span className='name'>{data.name}</span>
                </div>
                <div className='item-right-container'>
                    {data.owners.length > 1 && makeGroup()}
                    <span className='money'>{'$' + data.cost}</span>
                </div>
            </ListItem>
            {!last && <Divider />}
        </>
    )
}

export default connect(null)(Item)