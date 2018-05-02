import React from 'react';
import '../css/SelectHeader.css';
import CreateGrid from './CreateGrid';


class SelectHeader extends React.Component {
  constructor(){
    super()
}

  render() {
    return(
      <div className='wrapper'>
      <div className="grid-size">
        <div className="select-btn size-select size-10" onClick = {() =>  this.props.pickSizeCreateGrid(10)}>10</div>
        <div className="select-btn size-select size-25" onClick = {() =>  this.props.pickSizeCreateGrid(25)}>25</div>
        <h2 className="title size-title">Select # Of Photos</h2>
      </div>
      <div className="category">
        <div className="select-btn  cat-select select-computers">Computers</div>
        <div className="select-btn  cat-select select-animals">Animals</div>
        <div className="select-btn  cat-select select-sports">Sports</div>
        <h2 className="title cat-title">Select Category</h2>
      </div>
    </div>
    );
}
}



export default SelectHeader;
