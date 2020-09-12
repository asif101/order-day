import React from 'react'
import { connect } from 'react-redux'
import Person from './Person/Person'
import SimpleBar from 'simplebar-react'
import './People.scss'

const People = () => {
    return (
        <div className='People'>
            <SimpleBar style={{maxHeight: '100%'}}>
                {people.map((x, i) => (
                    <Person key={i} index={i} name={x} />
                ))}
            </SimpleBar>
        </div>
    )
}

export default connect(null)(People)

const people = [
    'Asif',
    'Elizabeth',
    'Jason',
    'Alex',
    'Ella',
    'Gokul',
    'Amber',
    'asif',
    'asif',
]