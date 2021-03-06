import React, { useState } from 'react'
import { connect } from 'react-redux'
import { InputBase } from '@material-ui/core'
import { setName } from '../../store/actions/orderActions'
import People from './People/People'
import Items from './Items/Items'
import './Main.scss'

const Main = ({ order, setName }) => {

    const [bufferName, setBufferName] = useState(order.name)

    const handleSubmit = () => {
        console.log(bufferName)
        setName(bufferName)
    }

    return (
        <div className='Main'>
            <div className='top-bar'>
                <InputBase
                    classes={{ root: 'main-name-root', input: 'main-name-input' }}
                    value={bufferName}
                    onChange={e => { setBufferName(e.target.value) }}
                    onKeyPress={e => { if (e.key === 'Enter' && bufferName !== '') handleSubmit() }}
                />
            </div>
            <div className='body'>
                <People />
                <Items />
            </div>
        </div>
    )
}

const mapStateToProps = ({ order }) => ({ order })


export default connect(mapStateToProps, { setName })(Main)