import React, { Component } from 'react';

class VenueCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const venues = this.props.venues;
    return (
      <div className="card-container">
        {venues.length === 0 ? (
          <h1>Search a city</h1>
        ) : (
          venues.map(venue => {
            return (
              <div className="card" key={venue.venue.id}>
                <h4 className="card__heading">{venue.venue.name}</h4>
                <div className="card__details">
                  <ul>
                    <li>
                      Address: <br />
                      {venue.venue.location.formattedAddress.map(item => {
                        return `${item} `;
                      })}
                    </li>
                    <li>Venue Type: {venue.venue.categories[0].name}</li>
                    <li>Weather: </li>
                  </ul>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default VenueCard;
