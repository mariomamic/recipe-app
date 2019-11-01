import React, { Component, Fragment } from 'react';
import './App.css';
import { recipes } from './mockDatabase';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

class App extends Component {
  state = {
    recipes: recipes,
    pageIndex: 1
  };

  detailsPage = (index) => {
    switch (index) {
      default:
      case 1:
        return (<RecipeList recipes={this.state.recipes} changeDetails={this.changeDetails} />)
      case 0:
        return (<RecipeDetails recipes={this.state.details_id} changeIndex={this.changeIndex} />)
    }
  }

  changeIndex = index => { this.setState({ pageIndex: index }) }

  changeDetails = (index, id) => { this.setState({ pageIndex: index, details_id: id }) }

  render() {
    return (
      <Fragment>
        {this.detailsPage(this.state.pageIndex)}
      </Fragment>
    );
  }
}

export default App;
