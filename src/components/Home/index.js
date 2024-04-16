/* eslint-disable eqeqeq */
/* eslint-disable import/named */
/* eslint-disable react/no-unused-state */
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {IoSearchSharp} from 'react-icons/io5'
import {Component} from 'react'
import {IoIosClose} from 'react-icons/io'
import ReactContext from '../../Context/ReactContext'
import './index.css'
import {
  MainContainer,
  Sidebar,
  MainSection,
  Div1,
  ImgLg,
  ButtonClose,
  Prime,
  P,
  ButtonGet,
  Input1,
  InputCard,
  ButtonSrc,
  UlCard,
  Li2,
  ImgThumb,
  Div4,
  Imglg,
  Div6,
  PP,
  P1,
  Div44,
} from './styledComponents'
import SideBar from '../SideBar'
import Header from '../Header'

class Home extends Component {
  state = {list: [], isLoading: true, searchQ: '', isFail: false}

  componentDidMount() {
    this.getData()
  }

  onSearch = event => {
    this.setState({searchQ: event.target.value})
  }

  success = val => {
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
    this.setState({list: upData, isLoading: false})
  }

  onSearchBtn = () => {
    const {searchQ, list} = this.state
    const filter1 = list.filter(l =>
      l.title.toLowerCase().includes(searchQ.toLowerCase()),
    )
    this.setState({list: filter1}, this.getData)
  }

  failure = () => {
    this.setState({isFail: true})
  }

  onRetry = () => {
    this.getData()
  }

  getData = async () => {
    const {searchQ} = this.state
    this.setState({isLoading: true})
    const url = `https://apis.ccbp.in/videos/all?search=${searchQ}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data.videos)
    } else {
      this.failure()
    }
  }

  enterKey = event => {
    if (event.key === 'Enter') {
      this.onSearchBtn()
    }
  }

  render() {
    const {list, isLoading, isFail} = this.state
    console.log(list)
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDark, getPrimeFnc, getPrime} = value
          const isRemove = () => {
            getPrimeFnc()
          }
          return (
            <>
              <Header />
              <MainContainer>
                <Sidebar isDark={isDark}>
                  <SideBar />
                </Sidebar>
                <MainSection data-testid="home" isDark={isDark}>
                  <Prime getPrime={getPrime} data-testid="banner">
                    <Div1>
                      <ImgLg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <ButtonClose
                        data-testid="close"
                        type="button"
                        onClick={isRemove}
                      >
                        <IoIosClose />
                      </ButtonClose>
                    </Div1>
                    <P>
                      Buy Nxt Watch Premium prepaid plans with <br /> UPI
                    </P>
                    <ButtonGet type="button">GET IT NOW</ButtonGet>
                  </Prime>
                  <InputCard isDark={isDark}>
                    <Input1
                      isDark={isDark}
                      type="search"
                      placeholder="Search"
                      onChange={this.onSearch}
                      onKeyDown={this.enterKey}
                    />
                    <ButtonSrc
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onSearchBtn}
                    >
                      <IoSearchSharp />
                    </ButtonSrc>
                  </InputCard>
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
                          {list.length === 0 ? (
                            <div className="bg-hm">
                              <img
                                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                                alt="no videos"
                                className="img-src"
                              />
                              <h1 className="hh"> No Search results found</h1>
                              <p className="p">
                                Try different key words or remove search filter
                              </p>
                              <button type="button" className="btn-rt">
                                Retry
                              </button>
                            </div>
                          ) : (
                            <UlCard isDark={isDark}>
                              {list.map(l => (
                                <Li2 key={l.id}>
                                  <Link
                                    to={`/videos/${l.id}`}
                                    style={{textDecoration: 'none'}}
                                    key={l.id}
                                  >
                                    <ImgThumb src={l.thumbnailUrl} />
                                    <Div4>
                                      <Imglg
                                        src={l.channel.profileImageUrl}
                                        alt={l.channel.name}
                                      />
                                      <Div6>
                                        <PP isDark={isDark}>{l.title}</PP>
                                        <P1>{l.channel.name}</P1>
                                        <Div44>
                                          <P1>{l.viewCount}</P1>
                                          <P1>{l.publishedAt}</P1>
                                        </Div44>
                                      </Div6>
                                    </Div4>
                                  </Link>
                                </Li2>
                              ))}
                            </UlCard>
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

export default Home
