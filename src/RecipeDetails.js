import React, { Component, Fragment } from 'react'
import { recipe } from './mockDetails';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe,
    };
  }
  render() {
    const  {
      title,
      ingredients
    } = this.state.recipe;

  const {changeIndex} = this.props
    

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button" className="btn btn-dark mb-10" onClick={()=> changeIndex(1)}>Back to Recipes</button>
          </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <h6 className="text">{title}</h6>
          <ul className="list-group mt-14">
            <h2 className="mt-4 mb-6">Ingredients</h2>
            {
              ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group">
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
        </div>
      </div>
      </Fragment>
    );
  }
}
export default RecipeDetails
