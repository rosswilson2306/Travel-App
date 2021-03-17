import React, { Component } from 'react';
import VenueCard from './VenueCard';

class VenueInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="description">
        <VenueCard venues={this.props.venues} />
      </div>
    );
  }
}

export default VenueInfo;
