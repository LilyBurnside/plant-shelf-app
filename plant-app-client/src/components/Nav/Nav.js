import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuizContext from '../../contexts/QuizContext'
import TokenService from '../../services/token-service'
import './Nav.css'

export default class Nav extends Component {

  static contextType = QuizContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.clearUserId()
    window.location.reload()
  }

  renderLogoutLink() {
    return (
      <div className='Nav__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Link
          to='/wishlist'>
            My wishlist
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Nav__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return <>
      <nav className='Nav'>
        <h1>
          <Link to='/'>
            {/* <FontAwesomeIcon className='blue' icon='gift' /> */}
            {' '}
            Plant Shelf
          </Link>
        </h1>
        <span className='Nav__tagline--wide'>Find your plant</span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

     
    </>
  }
}