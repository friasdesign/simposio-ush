// @flow

import React, {Component} from 'react'
import './App.sass'

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'
import Notification from './components/Notification'

// VIEWS _______________________________________________________________________
import Home from './views/Home'
import Speakers from './views/Speakers'
import About from './views/About'
import Schedule from './views/Schedule'
import Registration from './views/Registration'
import Location from './views/Location'

class App extends Component {
  state: {
    menuOpen: boolean,
    navigateTo: string
  }

  constructor(props: any) {
    super(props)

    this.state = {
      menuOpen: false,
      navigateTo: ''
    }

    ;(this:any).toggleMenu = this.toggleMenu.bind(this)
    ;(this:any).closeAndNavigate = this.closeAndNavigate.bind(this)
  }

  toggleMenu(): void {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  closeAndNavigate(hashName: string): void {
    this.setState({
      menuOpen: false,
      navigateTo: hashName
    })
  }

  componentDidUpdate() {
    const {
      navigateTo
    } = this.state

    if(navigateTo) {
      location.hash = navigateTo
      this.setState({
        navigateTo: ''
      })
    }
  }

  render() {
    const {
      menuOpen
    } = this.state

    return (
      <div className="app">
        <Navbar menuOpen={menuOpen} closeAndNavigate={this.closeAndNavigate} toggleMenu={this.toggleMenu} />
        <main className={`content-container ${menuOpen ? 'no-scroll' : ''}`}>
          <Home/>
          <About/>
          <Speakers/>
          <Schedule/>
          <Registration/>
          <Location/>
        </main>
        <Notification/>
        <footer className="main-footer">
          <small>contact@friasdesign.com – Frias Design®</small>
        </footer>
      </div>
    )
  }
}

export default App
