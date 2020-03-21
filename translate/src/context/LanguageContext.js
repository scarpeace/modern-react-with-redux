import React from 'react'


// Step by step
// Create the context object
// Define the contextType aonde tá sendo importado (tem que ser 'contextType')
// Acess the this.context

//Aqui tem a string 'english' setando o valor padrão do contextObject 

const Context = React.createContext('english');

export class LanguageStore extends React.Component {

  state = {
    language: 'english',
  };

  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;