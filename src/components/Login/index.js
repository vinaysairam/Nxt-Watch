import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactContext from '../../Context/ReactContext'
import {
  Div1,
  Container,
  ImgLogo,
  Form,
  Label,
  Input,
  LoginBtn,
  CheckBox,
  Div2,
  P,
  Lb,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showPAss: true, error: ''}

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({error: errorMsg})
  }

  onSubData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onCheck = () => {
    const {showPAss} = this.state
    this.setState({showPAss: !showPAss})
  }

  render() {
    const {showPAss, error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <Div1 isDark={isDark}>
              <Container isDark={isDark}>
                <ImgLogo
                  src={
                    isDark === true
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Form onSubmit={this.onSubData} isDark={isDark}>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    isDark={isDark}
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.onUsername}
                  />
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    isDark={isDark}
                    type={showPAss ? 'password' : 'text'}
                    id="password"
                    placeholder="Password"
                    onChange={this.onPassword}
                  />
                  <Div2>
                    <CheckBox
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onCheck}
                    />
                    <Lb isDark={isDark} htmlFor="checkbox">
                      Show Password
                    </Lb>
                  </Div2>
                  <LoginBtn type="submit">Login</LoginBtn>
                  <P>{error}</P>
                </Form>
              </Container>
            </Div1>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Login
