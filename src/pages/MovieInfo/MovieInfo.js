import React, { Fragment, useState } from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
return( 
    <Fragment>    
    <div class="wrapper">
      <div class="main_card">
        <div class="card_left">
          <div class="card_datails">
          <h1>{props.movie.Title}</h1>
            <div class="card_cat">
              <p class="PG">{props.movie.Rated}</p>
              <p class="year">{props.movie.Released}</p>
              <p class="genre">{props.movie.Genre}</p>
              <p class="time">{props.movie.Runtime}</p>
            </div>
            <p class="disc">{props.movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
</Fragment>  
      )
}

export default MovieInfo