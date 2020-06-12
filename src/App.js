import React, { Component } from 'react'
import {Route} from "react-router-dom";
import SearchMovie from './components/Search/SearchMovie';
// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import axios from 'axios';
import MovieInfo from './pages/MovieInfo/MovieInfo';
import MovieDetails from './pages/MovieDetails/MovieDetails';

export default class App extends Component {
    
   state = {
       name: '',
       year: '',
       data: ''
   }

    fetchData = async(name, year) => {
        const url = "http://www.omdbapi.com";
        //http://www.omdbapi.com/?t=Guardians&y=2014&plot=full&apikey=84b50371
        let changeableUrl = `${url}/?t=${name}&y=${year}&plot=full&apikey=84b50371`;;
        
        try{
            const {data} = await axios.get(changeableUrl);
            this.setState({data: data});
            console.log(name, year, data);
            return data;
        }
        catch(error){
            console.log(error);
        }
    }

    render() {
        return (
        <div>
            <Nav />
            <SearchMovie onFormSubmit={this.fetchData}></SearchMovie>
            <div className="container">
            <Route exact={true} path="/">
                <MovieInfo movie={this.state.data}></MovieInfo>
            </Route>
            <Route exact path="/second">
                <MovieDetails movie={this.state.data}></MovieDetails>
            </Route>
            </div>
            
        </div>
);
}
}
