import React, { Component, Fragment } from 'react'
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const {recipes, changeDetails } = this.props;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-undertext">Recipes</h1>
              <input type="text" placeholder="Search Recipe here..." />  <button type="submit"><i class="fa fa-search"></i></button>
            </div>  
          </div>
          <div className="row"> 
          { recipes.map(recipe => { return <Recipe key={recipe.recipe_id} recipe={recipe} changeDetails={()=>changeDetails(0, recipe.recipe_id)} />; })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default RecipeList