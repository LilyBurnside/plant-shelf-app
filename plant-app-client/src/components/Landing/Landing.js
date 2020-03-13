import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import TokenService from '../../services/token-service'
import './Landing.css'

export default class Landing extends React.Component {
  
  //Once I set up auth I can render login vs logout

  // renderLoginLink() {
  //   return(
  //     <div className='Landing not-logged-in'>
  //       <Link
  //         to='/login'>
  //         Log in
  //       </Link>
  //       <Link
  //         to='/register'>
  //           Register
  //       </Link>
  //     </div>
  //   )
  // }

  render() {
    return(
      <div className='Landing'>
        <section className='title'>
          <h1>The Plant Shelf</h1>
          <p>Find the right plant for you</p>
          <Link to='/quiz'>
            <button className='find-match'>Find my match ></button>
          </Link>
        </section>

        <section className='lower'>
          <Link to='/login'>
            <button className='login'>Login to show my plant shelf</button>
          </Link>
        </section>
      </div>
    )
  }
}