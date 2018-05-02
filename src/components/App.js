import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';
import SelectHeader from './SelectHeader';

class App extends Component {
  render() {
    return (
        <div className="game">
          <SelectHeader />
          <Board />
        </div>
    );
  }
}

export default App;
