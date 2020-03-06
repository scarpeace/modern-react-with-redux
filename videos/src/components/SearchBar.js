import React from 'react'

class SearchBar extends React.Component {

  state = {
    term: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input id="search" type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;