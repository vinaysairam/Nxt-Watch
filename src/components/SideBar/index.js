import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {FiSave} from 'react-icons/fi'
import {FaFire} from 'react-icons/fa'
import {
  Ul,
  Li,
  P,
  Div1,
  Div3,
  H1,
  UL,
  Para,
  ImgLg,
  Li1,
} from './styledComponents'
import ReactContext from '../../Context/ReactContext'

const SideBar = () => (
  <ReactContext.Consumer>
    {value => {
      const {isActiveBar, isActivebar, isDark} = value
      console.log(isActiveBar)
      const isActiveTab1 = () => {
        isActivebar('home')
      }
      const isActiveTab2 = () => {
        isActivebar('trending')
      }
      const isActiveTab3 = () => {
        isActivebar('gaming')
      }
      const isActiveTab4 = () => {
        isActivebar('saved')
      }
      return (
        <Div1>
          <Ul isDark={isDark}>
            <Link style={{textDecoration: 'none'}} to="/">
              <Li
                isDark={isDark}
                isActiveBar={isActiveBar === 'home'}
                onClick={isActiveTab1}
              >
                <AiFillHome />
                <P isDark={isDark} isActiveBar={isActiveBar === 'home'}>
                  Home
                </P>
              </Li>
            </Link>
            <Link to="/trending" style={{textDecoration: 'none'}}>
              <Li
                isDark={isDark}
                isActiveBar={isActiveBar === 'trending'}
                onClick={isActiveTab2}
              >
                <FaFire />
                <P isDark={isDark} isActiveBar={isActiveBar === 'trending'}>
                  Trending
                </P>
              </Li>
            </Link>
            <Link to="/gaming" style={{textDecoration: 'none'}}>
              <Li
                isDark={isDark}
                isActiveBar={isActiveBar === 'gaming'}
                onClick={isActiveTab3}
              >
                <SiYoutubegaming />
                <P isDark={isDark} isActiveBar={isActiveBar === 'gaming'}>
                  Gaming
                </P>
              </Li>
            </Link>
            <Link to="/saved-videos" style={{textDecoration: 'none'}}>
              <Li
                isDark={isDark}
                isActiveBar={isActiveBar === 'saved'}
                onClick={isActiveTab4}
              >
                <FiSave />
                <P isDark={isDark} isActiveBar={isActiveBar === 'saved'}>
                  Saved videos
                </P>
              </Li>
            </Link>
          </Ul>
          <Div3 isDark={isDark}>
            <H1 isDark={isDark}>CONTACT US</H1>
            <UL isDark={isDark}>
              <Li1>
                <ImgLg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt=" facebook logo"
                />
              </Li1>
              <Li1>
                <ImgLg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </Li1>
              <Li1>
                <ImgLg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt=" linked in logo"
                />
              </Li1>
            </UL>
            <Para isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </Para>
          </Div3>
        </Div1>
      )
    }}
  </ReactContext.Consumer>
)

export default SideBar
