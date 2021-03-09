import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import BuildControls from './components/BuildControls/BuildControls'

class App extends Component {
  render() {
    return (
        <Layout>
          <BurgerBuilder />
          <BuildControls />
        </Layout>
    );
  }
}

export default App;
