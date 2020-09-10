import React, { useState } from 'react'
import shawarma from '../../assets/images/shawarma.svg'
import { OutlinedInput } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import './Intro.scss'

const Intro = () => {

    const [name, setName] = useState('')

    const handleSubmit = () => {
        console.log(name)
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
                                className={name === '' ? 'intro-submit-icon' : 'intro-submit-icon ready'}
                                onClick={handleSubmit}
                            />
                        </InputAdornment>}
                    value={name}
                    onChange={e => { setName(e.target.value) }}
                    onKeyPress={e => { if (e.key === 'Enter' && name !== '') handleSubmit() }}
                />
            </div>
        </div>
    )
}

export default Intro