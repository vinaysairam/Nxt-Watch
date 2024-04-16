/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/control-has-associated-label */
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import './index.css'
import {
  Nav,
  ImgLg,
  Ul,
  LogOutBtn,
  ImgPf,
  ThemeBtn,
  Div2,
  PP,
  Cancle,
  Confirm,
} from './styledComponents'
import ReactContext from '../../Context/ReactContext'

const Header = props => (
  <ReactContext.Consumer>
    {value => {
      const {isDark, onDark} = value
      const logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const theme = () => {
        onDark()
      }
      return (
        <Nav isDark={isDark}>
          <Link to="/">
            <ImgLg
              src={
                isDark === true
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <Ul>
            <li>
              <ThemeBtn
                isDark={isDark}
                type="button"
                data-testid="theme"
                onClick={theme}
              >
                {isDark === true ? <IoSunnyOutline /> : <FaMoon />}
              </ThemeBtn>
            </li>
            <li>
              <ImgPf
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </li>
            <li>
              <div>
                <Popup
                  modal
                  isDark={isDark}
                  trigger={
                    <LogOutBtn isDark={isDark} type="button">
                      Logout
                    </LogOutBtn>
                  }
                >
                  {close => (
                    <Div2 isDark={isDark}>
                      <PP isDark={isDark}>Are you sure, you want to logout?</PP>
                      <Cancle
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </Cancle>
                      <Confirm type="button" onClick={logout}>
                        Confirm
                      </Confirm>
                    </Div2>
                  )}
                </Popup>
              </div>
            </li>
          </Ul>
        </Nav>
      )
    }}
  </ReactContext.Consumer>
)

export default withRouter(Header)
