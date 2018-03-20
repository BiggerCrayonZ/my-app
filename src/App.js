import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  handleAuth (){
    //Crea el provedor de un Google Auth Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">InstaCoon</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleAuth}>Login con Google</button>
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
