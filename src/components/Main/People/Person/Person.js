import React from 'react'
import { connect } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Card from '@material-ui/core/Card'
import './Person.scss'

const Person = ({ id, name }) => {
    return (
        <Card className='Person' classes={{ root: 'Person' }}>
            <div className='Person-icon-container'>
                <AccountCircleIcon
                    // style={{ fill: colors[id % colors.length] }}
                />
            </div>
            <div className='Person-text-container'>
                <span className='name'>{name}</span>
                <span className='money'>$0.00</span>
            </div>

        </Card>
    )
}

export default connect(null)(Person)

// const colors = [
//     '#ffc100',
//     '#7192BE',
//     '#63B995',
//     '#FF5D73',
// ]