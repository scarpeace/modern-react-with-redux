import React from 'react'

import UserCreate from './UserCreate'
import { LanguageStore } from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {


  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />
          {/* Aqui 'value' tem que ser 'value' */}
          <ColorContext.Provider value={'red'}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App;