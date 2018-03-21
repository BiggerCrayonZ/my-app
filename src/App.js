import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    //Crea el provedor de un Google Auth Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogOut() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    //Si el usuario está logeado
    if (this.state.user) {
      return (
        <div className="card">
          <img className="card-img-top" src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <div className="card-body">
            <h5 className="card-title">
              Hola {this.state.user.displayName}
            </h5>
            <button className="card-text btn btn-primary" onClick={this.handleLogOut} >Cerrar Sesión</button>
          </div>
        </div>
      );
    } else {
      //Si no lo está 
      return (
        <button className="btn btn-primary" onClick={this.handleAuth}>Login con Google</button>
      );
    }

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">InstaCoon</h1>
        </header>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default App;

// class Hello extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return (
//       <h1>{this.props.saludo}</h1>
//     )
//   }
// }

//React.render(<Hello saludo="Hola mundo"/>, document.getElementById('root'));
