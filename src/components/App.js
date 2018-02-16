import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
        <div className="game">
          <div className='wrapper'>
          <div className="grid-size">
            <div className="select-btn size-select size-10">10</div>
            <div className="select-btn size-select size-25">25</div>
            <h2 className="title size-title">Number Of Pictures</h2>
          </div>
          <div className="category">
            <div className="select-btn  cat-select select-computers">Computers</div>
            <div className="select-btn  cat-select select-animals">Animals</div>
            <div className="select-btn  cat-select select-sports">Sports</div>
            <h2 className="title cat-title">Select Category</h2>
          </div>
        </div>
          <Board />
        </div>
    );
  }
}

export default App;
