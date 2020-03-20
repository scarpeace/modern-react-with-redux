import React from 'react'

import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class App extends React.Component {

  state = {
    language: 'english'
  }

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a Language
        <i onClick={() => { this.onLanguageChange('english') }} className="flag us" />
          <i onClick={() => { this.onLanguageChange('portuguese') }} className="flag br" />
        </div>
        {/* Aqui 'value' tem que ser 'value' */}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={'red'}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;