import React, { Component } from 'react';
import hotel1 from '../img/hotel1.jpg';
import hotel2 from '../img/hotel2.jpg';
import hotel3 from '../img/hotel3.jpg';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venueImg: []
    };
  }

  render() {
    return (
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotel1} alt="Photo of hotel 1" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel2} alt="Photo of hotel 2" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel3} alt="Photo of hotel 3" className="gallery__photo" />
        </figure>
      </div>
    );
  }
}

export default Gallery;
