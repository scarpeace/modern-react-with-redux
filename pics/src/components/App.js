import React from 'react'
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar"
import ImageList from './ImageList'

class App extends React.Component{
  
  state ={
    photos : []
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`,{
    params:{query: term},  
    })
    .catch(err => console.log(err));
    this.setState({photos: response.data.results})
  }

  render(){
    return (
      <div className="ui container mt-2" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList photos={this.state.photos}/>
      </div>
    )
  }
}

export default App;