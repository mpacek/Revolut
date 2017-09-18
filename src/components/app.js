import React, { Component } from 'react';
import ExchangeForm from '../containers/exchange_form';
import ExchangeCarousel from '../containers/exchange_carousel';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Revolut App</h1>
        <ExchangeForm />
        <ExchangeCarousel />
      </div>
    );
  }
}
