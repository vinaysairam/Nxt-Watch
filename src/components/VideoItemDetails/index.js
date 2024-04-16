import {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {RiSave3Line} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactContext from '../../Context/ReactContext'
import FailureView from '../FailureView'
import SideBar from '../SideBar'
import Header from '../Header'
import './index.css'
import {
  MainContainer,
  Sidebar,
  MainSection,
  UlEl,
  LI1,
  Div22,
  Div441,
  Div442,
  Div443,
} from './styledComponents'
import {Div6, PP, P1, Div44, Imglg, Div4} from '../Home/styledComponents'

class VideoItemDetails extends Component {
  state = {
    trendingList: {},
    isLoading: true,
    isFail: false,
    isLike: false,
    isDisLike: false,
    isSave: false,
  }

  componentDidMount() {
    this.getTrendingData()
  }

  onSuccess = val => {
    const upData = {
      channel: {
        name: val.channel.name,
        profileImageUrl: val.channel.profile_image_url,
        subscriberCount: val.channel.subscriber_count,
      },
      description: val.description,
      videoUrl: val.video_url,
      id: val.id,
      publishedAt: val.published_at,
      thumbnailUrl: val.thumbnail_url,
      title: val.title,
      viewCount: val.view_count,
    }
    this.setState({trendingList: upData, isLoading: false})
  }

  onLike = () => {
    const {isLike} = this.state
    this.setState({isLike: !isLike})
  }

  onDisLike = () => {
    const {isDisLike} = this.state
    this.setState({isDisLike: !isDisLike})
  }

  onFailure = () => {
    this.setState({isFail: true})
  }

  onRetry = () => {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
      this.onSuccess(data.video_details)
    } else {
      this.onFailure()
    }
  }

  render() {
    const {
      trendingList,
      isLoading,
      isFail,
      isLike,
      isDisLike,
      isSave,
    } = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark, onSave} = value
          const onSaveBtn = () => {
            this.setState({isSave: !isSave})
            onSave(trendingList)
          }
          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar isDark={isDark}>
                  <SideBar />
                </Sidebar>
                <MainSection data-testid="videoItemDetails" isDark={isDark}>
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
                        <UlEl data-testid="videoItemDetails" isDark={isDark}>
                          <LI1>
                            <ReactPlayer
                              url={trendingList.videoUrl}
                              controls
                              className="vd"
                            />
                            <PP isDark={isDark}>{trendingList.title}</PP>
                            <Div22>
                              <Div44>
                                <P1 isDark={isDark}>
                                  {trendingList.viewCount}
                                </P1>
                                <P1 isDark={isDark}>
                                  {trendingList.publishedAt}
                                </P1>
                              </Div44>
                              <Div44>
                                <Div441
                                  type="button"
                                  onClick={this.onLike}
                                  isLike={isLike}
                                >
                                  <AiOutlineLike />
                                  <p>Like</p>
                                </Div441>
                                <Div442
                                  type="button"
                                  onClick={this.onDisLike}
                                  isDisLike={isDisLike}
                                >
                                  <BiDislike />
                                  <p>Dislike</p>
                                </Div442>
                                <Div443
                                  type="button"
                                  isSave={isSave}
                                  onClick={onSaveBtn}
                                >
                                  <RiSave3Line />
                                  <p>Saved</p>
                                </Div443>
                              </Div44>
                            </Div22>
                            <hr />
                            <Div4>
                              <Imglg
                                src={trendingList.channel.profileImageUrl}
                                alt="channel logo"
                              />
                              <Div6>
                                <PP>{trendingList.channel.name}</PP>
                                <Div44>
                                  <P1>
                                    {trendingList.channel.subscriberCount}{' '}
                                    subscribers
                                  </P1>
                                </Div44>
                                <P1>{trendingList.description}</P1>
                              </Div6>
                            </Div4>
                          </LI1>
                        </UlEl>
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

export default VideoItemDetails
