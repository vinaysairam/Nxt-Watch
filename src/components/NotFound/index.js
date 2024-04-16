import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import ReactContext from '../../Context/ReactContext'
import FailureView from '../FailureView'
import {
  MainContainer,
  Sidebar,
  MainSection,
  Div1,
  Heading,
  UlEl,
  LiEl,
  ImgTh,
  Div2,
} from './styledComponents'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'
import {Div6, PP, P1, Div44, UlCard} from '../Home/styledComponents'

class NotFound extends Component {
  state = {trendingList: [], isLoading: true, isFail: false}

  componentDidMount() {
    this.getTrendingData()
  }

  onSuccess = val => {
    const upData = val.map(l => ({
      channel: {
        name: l.channel.name,
        profileImageUrl: l.channel.profile_image_url,
      },
      id: l.id,
      publishedAt: l.published_at,
      thumbnailUrl: l.thumbnail_url,
      title: l.title,
      viewCount: l.view_count,
    }))
    this.setState({trendingList: upData, isLoading: false})
  }

  onFailure = () => {
    this.setState({isFail: true})
  }

  getTrendingData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const option = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.videos)
    } else {
      this.onFailure()
    }
  }

  render() {
    const {trendingList, isLoading, isFail} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar isDark={isDark}>
                  <SideBar />
                </Sidebar>
                <MainSection isDark={isDark}>
                  <UlCard>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                      alt="not found"
                    />
                    <h1>Page Not Found</h1>
                    <p>
                      We are sorry, the page you requested could not be found
                    </p>
                  </UlCard>
                </MainSection>
              </MainContainer>
            </>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default NotFound
