import React from 'react'
import { connect } from 'react-redux'
import Person from './Person/Person'
import SimpleBar from 'simplebar-react'
import './People.scss'

const People = () => {
    return (
        <div className='People'>
            <SimpleBar style={{ maxHeight: '100%' }}>
                {people.map(x => (
                    <Person key={x.id} id={x.id} name={x.name} />
                ))}
            </SimpleBar>
        </div>
    )
}

export default connect(null)(People)

const people = [
    { id: 0, name: 'Asif' },
    { id: 1, name: 'Elizabeth' },
    { id: 2, name: 'Jason' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Ella' },
    { id: 5, name: 'Gokul' },
    { id: 6, name: 'Amber' },
    { id: 7, name: 'Asif' },
]