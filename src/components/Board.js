import React from 'react';
import '../css/Board.css';
import SelectHeader from './SelectHeader';
import CreateGrid from './CreateGrid';

class Board extends React.Component {
  constructor(){
    super()

this.state = {
  numbPhotos: "10",
  category: "computers"
}
}
  render() {
    return(
      <div className='game-board'>
        <CreateGrid
          pickSize={this.pickSize}
          />
      </div>
    );
}
}

export default Board;
