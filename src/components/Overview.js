import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cityName = this.props.cityName;
    const location = this.props.location;
    const cityRating = this.props.cityRating;
    const ratingVotes = this.props.ratingVotes;

    return (
      <div className="overview">
        <h1 className="overview__heading">
          {cityName ? cityName : 'New York'}
        </h1>
        <div className="overview__location">
          <p className="input-location">
            {location ? location : 'New York, USA'}
          </p>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">
            {cityRating ? cityRating : '8.6'}
          </div>
          <div className="overview__rating-count">
            {ratingVotes ? `${ratingVotes} votes` : '429 votes'}
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
