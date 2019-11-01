import React, { Component, Fragment } from 'react';

class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      recipe_id
    } = this.props.recipe;

    const {changeDetails} = this.props;

    return (
      <Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card"
              style={{ height: "250px" }} />
            <div className="card-body">
              <h6>{title}</h6>
              <div className="card-footer">
                <button type="button" className="btn btn-dark" onClick={changeDetails}>See more</button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Recipe