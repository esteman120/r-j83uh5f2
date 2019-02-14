import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      numeroCaracteres: 0,
      valor:""
    }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.contador.bind(this)} value={this.state.valor}></textarea>
        <div className="counter">{this.state.numeroCaracteres}</div>
      </div>
    );
  }

  contador(event){
      let numeroCaracteres = event.target.value.length;
      this.setState({
        valor: event.target.value,
        numeroCaracteres: numeroCaracteres
      });
  }
}

export default App;
