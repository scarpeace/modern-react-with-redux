import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = { latitute: null, errorMessage: "" }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitute: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {

    if (!this.state.latitute && this.state.errorMessage) {
      return (<div>Error Message:  {this.state.errorMessage} </div>)
    }
    if (this.state.latitute && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.latitute} />
    }
    return <Spinner />
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)