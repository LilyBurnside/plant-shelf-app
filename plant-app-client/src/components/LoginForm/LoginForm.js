import React from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import QuizContext from '../../contexts/QuizContext'
import './LoginForm.css'

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  static contextType = QuizContext


  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.token)
        this.props.onLoginSuccess()
        this.context.setUserId(res.payload.user_id)
      })
      .catch(this.context.setError)
    
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