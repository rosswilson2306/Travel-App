import React, { Component } from 'react';
import Gallery from './Gallery';
import Overview from './Overview';
import VenueInfo from './VenueInfo';
import SearchBar from './SearchBar';
import FourSquare from './FourSquare';
import { fourSquareKeys } from '../Keys';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      location: '',
      venues: '',
      cityRating: 0,
      ratingVotes: 0,
      weather: ''
    };
  }

  handleSubmit = inputValue => {
    console.log(inputValue);

    // Rating
    const rating = Math.floor(Math.random() * 100) / 10;
    this.setState({ cityRating: rating });

    // Votes
    const votes = Math.floor(Math.random() * 500);
    this.setState({ ratingVotes: votes });

    // FourSquare
    const endpoint = 'https://api.foursquare.com/v2/venues/explore';
    const version = '20180323';
    const fourSqUrl = `${endpoint}?client_id=${fourSquareKeys.clientId}&client_secret=${fourSquareKeys.clientSecret}&near=${inputValue}&v=${version}&limit=4`;

    fetch(fourSqUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ city: data.response.geocode.where });
        this.setState({ location: data.response.geocode.displayString });
        this.setState({ venues: data.response.groups[0].items });
      });
  };

  render() {
    return (
      <main className="hotel-view">
        <SearchBar onSubmit={this.handleSubmit} />
        <Gallery />
        <Overview
          cityName={this.state.city}
          location={this.state.location}
          cityRating={this.state.cityRating}
          ratingVotes={this.state.ratingVotes}
        />
        <VenueInfo venues={this.state.venues} />
      </main>
    );
  }
}

export default Main;
