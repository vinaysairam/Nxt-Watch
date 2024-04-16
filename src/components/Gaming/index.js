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
import {Div6, PP, P1, Div44} from '../Home/styledComponents'

class Gaming extends Component {
  state = {trendingList: [], isLoading: true, isFail: false}

  componentDidMount() {
    this.getTrendingData()
  }

  onSuccess = val => {
    const upData = val.map(l => ({
      id: l.id,
      thumbnailUrl: l.thumbnail_url,
      title: l.title,
      viewCount: l.view_count,
    }))
    this.setState({trendingList: upData, isLoading: false})
  }

  onRetry = () => {
    this.getTrendingData()
  }

  onFailure = () => {
    this.setState({isFail: true})
  }

  getTrendingData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
                <MainSection data-testid="gaming" isDark={isDark}>
                  <Div1 isDark={isDark}>
                    <Div2 isDark={isDark}>
                      <FaFire />
                    </Div2>
                    <Heading isDark={isDark}>Gaming</Heading>
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
                        <UlEl data-testid="gaming" isDark={isDark}>
                          {trendingList.map(l => (
                            <LiEl key={l.id}>
                              <Link
                                to={`/videos/${l.id}`}
                                style={{textDecoration: 'none'}}
                              >
                                <ImgTh
                                  src={l.thumbnailUrl}
                                  alt="video thumbnail"
                                />
                                <Div6 className="p1">
                                  <PP className="pd hh" isDark={isDark}>
                                    {l.title}
                                  </PP>
                                  <Div44 className="pd">
                                    <P1 className="pd">{l.viewCount}</P1>
                                    <P1 className="pd">Watching Worldwide</P1>
                                  </Div44>
                                </Div6>
                              </Link>
                            </LiEl>
                          ))}
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

export default Gaming
