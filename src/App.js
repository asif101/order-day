import React from 'react'
import { connect } from 'react-redux'
import Intro from './components/Intro/Intro'
import Main from './components/Main/Main'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './App.scss'

const App = ({ name }) => {

  const getContent = () => {
    if (!name) return <Intro />
    else return <Main />
  }

  return (
    <div className="App">
      <SwitchTransition mode='out-in'>
        <CSSTransition key={!name} timeout={300} classNames='CSSTransition-fade'>
          {getContent()}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

const mapStateToProps = ({ order }) => ({ name: order.name })

export default connect(mapStateToProps)(App)