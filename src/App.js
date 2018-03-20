import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
