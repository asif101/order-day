import React from 'react'
import { connect } from 'react-redux'
import './Person.scss'

const Person = ({ name }) => {
    return (
        <div className='Person'>
            {name}
        </div>
    )
}

export default connect(null)(Person)