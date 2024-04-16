import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import ReactContext from '../../Context/ReactContext'
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
import {Div6, PP, P1, Div44} from '../Home/styledComponents'

class Trending extends Component {
  state = {isLoading: true, isFail: false}

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
    this.setState({isLoading: false})
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
    if (response.ok === true) {
      this.onSuccess(data.videos)
    } else {
      this.onFailure()
    }
  }

  render() {
    const {isLoading, isFail} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark, savedList} = value
          console.log(savedList)
          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar isDark={isDark}>
                  <SideBar />
                </Sidebar>
                <MainSection data-testid="savedVideos" isDark={isDark}>
                  <Div1 isDark={isDark}>
                    <Div2 isDark={isDark}>
                      <FaFire />
                    </Div2>
                    <Heading isDark={isDark}>Saved Videos</Heading>
                  </Div1>
                  {isFail === true ? (
                    <div className="bg">
                      <img
                        className="img-fl"
                        alt="failure view"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                      />

                      <h1>Oops! Something Went Wrong</h1>
                      <p>
                        We are having some trouble to complete your request.
                        Please try again.
                      </p>
                      <button type="button" onClick={this.onRetry}>
                        Retry
                      </button>
                    </div>
                  ) : (
                    <>
                      {isLoading === true ? (
                        <div data-testid="loader" className="ld">
                          <Loader
                            type="ThreeDots"
                            color="#0b69ff"
                            height="50"
                            width="50"
                          />
                        </div>
                      ) : (
                        <>
                          {savedList.length === 0 ? (
                            <>
                              <img
                                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                                alt="no saved videos"
                              />
                              <h1>No saved videos found</h1>
                              <p>Save your videos by clicking a button</p>
                            </>
                          ) : (
                            <UlEl data-testid="savedVideos" isDark={isDark}>
                              {savedList.map(l => (
                                <Link
                                  key={l.id}
                                  to={`/videos/${l.id}`}
                                  style={{textDecoration: 'none'}}
                                >
                                  <LiEl>
                                    <ImgTh
                                      src={l.thumbnailUrl}
                                      alt={l.channel.name}
                                    />
                                    <Div6>
                                      <PP className="hh" isDark={isDark}>
                                        {l.title}
                                      </PP>
                                      <P1 className="pd">{l.channel.name}</P1>
                                      <Div44 className="pd">
                                        <P1>{l.viewCount} views</P1>
                                        <P1>{l.publishedAt}</P1>
                                      </Div44>
                                    </Div6>
                                  </LiEl>
                                </Link>
                              ))}
                            </UlEl>
                          )}
                        </>
                      )}
                    </>
                  )}
                </MainSection>
              </MainContainer>
            </>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Trending
