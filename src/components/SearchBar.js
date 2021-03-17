import React, { Component } from 'react';
import logo from '../img/logo.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.onSubmit && typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.value);
    }
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="search-bar">
        <img src={logo} alt="trillo logo" className="logo" />

        <form action="#" className="search" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search__input"
            placeholder="Search cities"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button className="submit__button" type="submit">
            <i className="fas fa-search search-icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
