import React from 'react'

import youtube from "../apis/youtube"
import SearchBar from "./SearchBar"
import VideoDetails from "./VideoDetails"
import VideoList from "./VideoList"

class App extends React.Component {

  state = {
    videos: []
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    const { items } = response.data
    this.setState({ videos: items })
  }


  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <h2>I have {this.state.videos.length} videos</h2>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;