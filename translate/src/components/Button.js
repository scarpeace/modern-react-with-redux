import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class Button extends React.Component {

  // Aqui tem que ser contextType porque é uma palavra especial do React
  // o static adiciona uma propriedade a classe Button; é a mesma coisa de colocar Button.contextType = LanguageContext

  static contextType = LanguageContext

  renderSubmit = (value) => {
    return value === 'english' ? 'Submit' : 'Enviar'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {this.renderSubmit(this.context.language)}
      </button>
    )
  }

  render() {

    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button