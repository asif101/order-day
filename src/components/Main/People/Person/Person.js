import React from 'react'
import { connect } from 'react-redux'
import PersonIcon from '@material-ui/icons/Person'
import './Person.scss'

const Person = ({ name }) => {
    return (
        <div className='Person'>
            <div className='Person-icon-container'>
                <PersonIcon />
            </div>
            <div className='Person-text-container'>
                <span className='name'>{name}</span>
                <span className='money'>$0.00</span>
            </div>

        </div>
    )
}

export default connect(null)(Person)