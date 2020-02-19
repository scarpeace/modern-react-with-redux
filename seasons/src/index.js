import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      latitute: null,
      errorMessage: ""
    }


  }

  render() {

    window.navigator.geolocation.getCurrentPosition(
      (position) => { this.setState({ latitute: position.coords.latitude }) },
      (err) => { this.setState({ errorMessage: err.message }) }
    );


    if (!this.state.latitute && this.state.errorMessage) {
      return (<div>Error Message:  {this.state.errorMessage} </div>)
    }
    if (this.state.latitute && !this.state.errorMessage) {
        return (<div>Latitude:  {this.state.latitute} </div>)
    }
    
    return (<div>Loading...</div>)
    
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)