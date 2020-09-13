import React from 'react'
import { connect } from 'react-redux'
import Person from './Person/Person'
import SimpleBar from 'simplebar-react'
import './People.scss'

const People = ({ order }) => {
    return (
        <div className='People'>
            <SimpleBar style={{ maxHeight: '100%' }}>
                {order.people.map(x => (
                    <Person key={x.id} id={x.id} name={x.name} />
                ))}
            </SimpleBar>
        </div>
    )
}

const mapStateToProps = ({ order }) => ({ order })

export default connect(mapStateToProps)(People)