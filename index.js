import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Tabela from './Tabela';
import './style.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>

        <Hello
        />
           
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
