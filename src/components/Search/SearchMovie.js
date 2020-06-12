import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from "./SearchMovie.module.css";

export default class SearchMovie extends Component {

    state = {
        name: '',
        year: '',
        data: ''
    }

    validateForm = () => {
        return this.state.name.length > 0 && this.state.year.length > 0;
    }

    handleNameChange = (event) => this.setState({name: event.target.value});

    handleYearChange = (event) => this.setState({year: event.target.value});
    
    handleSubmit = (event) => {
            const{name, year, data} = this.state;
            const {onFormSubmit} = this.props;
            onFormSubmit(name, year);
            event.preventDefault()  
          }

    render() {
        return (
            <div className={classes.Search}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <FormControl
                        placeholder='Movie Name'
                        autoFocus
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    </div>

                    <div>
                    <FormControl
                        placeholder='Movie Year'
                        type="number"
                        value={this.state.year}
                        onChange={this.handleYearChange}/>
                    </div>
                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                    Submit
                    </Button>
                </form>
                
            </div>
        )
    }
}
