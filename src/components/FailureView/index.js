/* eslint-disable no-unused-vars */
import './index.css'
import ReactContext from '../../Context/ReactContext'

const FailureView = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <div className="bg">
          <img
            className="img-fl"
            alt="failure view"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          />

          <h1>Oops! Something Went Wrong</h1>
          <p>
            We are having some trouble to complete your request. Please try
            again.
          </p>
          <button type="button">Retry</button>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default FailureView
