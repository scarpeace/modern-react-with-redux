import React from 'react'
import LanguageContext from '../context/LanguageContext'

class LanguageSelector extends React.Component {

static contextType = LanguageContext

  render() {
    return (
      <div>
        Select a Language
        <i onClick={() => { this.context.onLanguageChange('english') }} className="flag us" />
        <i onClick={() => { this.context.onLanguageChange('portuguese') }} className="flag br" />
      </div>
    )
  }
}

export default LanguageSelector