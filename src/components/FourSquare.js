import { fourSquareKeys } from '../Keys';

const FourSqaure = {
  getVenues(inputValue) {
    const endpoint = 'https://api.foursquare.com/v2/venues/explore';
    const version = '20180323';
    const fourSqUrl = `${endpoint}?client_id=${fourSquareKeys.clientId}&client_secret=${fourSquareKeys.clientSecret}&near=${inputValue}&v=${version}&limit=4`;

    fetch(fourSqUrl).then(response => response.json());

    // this.setState({ city: data.response.geocode.where });
    // this.setState({ location: data.response.geocode.displayString });
    // this.setState({ venues: data.response.groups[0].items });
  }
};

export default FourSqaure;
