import React from 'react';
import '../css/CreateGrid.css';
import SelectHeader from './SelectHeader';

class CreateGrid extends React.Component {

//   constructor() {
//     super()
//     this.pickSize = this.pickSize.bind(this);
// }

pickSize(size) {
  const photoCount = this.props.numbPhotos[size];
  return <div className='card'>Memory Card</div>;
    }

    render() {
      return (<div>Grid</div>)
    }
  }

export default CreateGrid;
