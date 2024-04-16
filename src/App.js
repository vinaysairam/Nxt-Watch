import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ReactContext from './Context/ReactContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import Home from './components/Home'
import './App.css'

class App extends Component {
  state = {isDark: false, isActiveBar: 'home', getPrime: true, savedList: []}

  onDark = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  getPrimeFnc = () => {
    this.setState({getPrime: false})
  }

  isActivebar = val => {
    this.setState({isActiveBar: val})
  }

  onSave = val => {
    const {savedList} = this.state
    const check = savedList.find(l => l.id === val.id)
    if (check) {
      const filter1 = savedList.filter(l => l.id !== val.id)
      this.setState({savedList: filter1})
    } else {
      this.setState(prevState => ({savedList: [...prevState.savedList, val]}))
    }
  }

  render() {
    const {isDark, isActiveBar, getPrime, savedList} = this.state
    return (
      <ReactContext.Provider
        value={{
          isDark,
          savedList,
          onDark: this.onDark,
          isActiveBar,
          isActivebar: this.isActivebar,
          getPrime,
          getPrimeFnc: this.getPrimeFnc,
          onSave: this.onSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <NotFound />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
