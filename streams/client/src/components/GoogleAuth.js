import React from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'
class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '194701035403-slnk3fcehfpohgskmpp55hvrnd682m9u.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        //Pega a instância do da autenticação naquele momento.
        this.auth = window.gapi.auth2.getAuthInstance();
        //Verifica se o usuário está logado e dispara a Action pro Redux
        this.onAuthChange(this.auth.isSignedIn.get());
        //Adiciona event listener no "isSignedIn" que fica dentro do gapi. Se ele mudar, um novo evento é disparado para o Redux para atualizar o estado Global. 
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn === true){
      let id = this.auth.currentUser.get().getId()
      this.props.signIn(id);
    }else{
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
            Sign Out
        </button>
      )
    }
    return (
      <button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon" />
        Sign in with Google
      </button>
    )
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);