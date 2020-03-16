import React from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
    // console.log(password.value)
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        console.log(res)
        TokenService.saveAuthToken(res.token)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='loginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='loginForm-user_name'>
            User name
          </label>
          <input
            required
            className='input-loginForm'
            name='user_name'
            id='loginForm-user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='loginForm-password'>
            Password
          </label>
          <input
            required
            className='input-loginForm'
            name='password'
            type='password'
            id='loginForm-password'>
          </input>
        </div>
        <button className='button-loginForm' type='submit'>
          Login
        </button>
      </form>
    )
  }
}