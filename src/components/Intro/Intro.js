import React, { useState } from 'react'
import { connect } from 'react-redux'
import shawarma from '../../assets/images/shawarma.svg'
import { OutlinedInput } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { setName } from '../../store/actions/orderActions'
import './Intro.scss'

const Intro = ({ setName }) => {

    const [bufferName, setBufferName] = useState('')

    const handleSubmit = () => {
        console.log(bufferName)
        setName(bufferName)
    }

    return (
        <div className='Intro'>
            <div className='intro-image-container'>
                <img src={shawarma} className="intro-image" alt="logo" />
            </div>
            <div className='intro-text-container'>
                <span>Where are we ordering from today?</span>
                <OutlinedInput
                    classes={{ root: 'intro-text-input', input: 'intro-text-input' }}
                    variant="outlined"
                    endAdornment={
                        <InputAdornment position="end">
                            <ArrowForwardIcon
                                className={bufferName === '' ? 'intro-submit-icon' : 'intro-submit-icon ready'}
                                onClick={handleSubmit}
                            />
                        </InputAdornment>}
                    value={bufferName}
                    onChange={e => { setBufferName(e.target.value) }}
                    onKeyPress={e => { if (e.key === 'Enter' && bufferName !== '') handleSubmit() }}
                />
            </div>
        </div>
    )
}



export default connect(null, { setName })(Intro)