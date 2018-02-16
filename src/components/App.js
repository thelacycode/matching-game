import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
        <div className="game">
          <div className="board-size">
            <div className="size-select size-10">10</div>
            <div className="size-select size-25">25</div>
            <h2 className="size-title">Number Of Pictures</h2>
          </div>
          <div className="catergory">
            <div className="cat-select select-computers">Computers</div>
            <div className="cat-select select-animals">Animals</div>
            <div className="cat-select select-sports">Sports</div>
            <h2 className="cat-title">Select Category</h2>
          </div>
          <Board />
        </div>
    );
  }
}

export default App;
