import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Search.module.css";
import {fetchData} from '../api';

export default function Search() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState("");

  function validateForm() {
    return name.length > 0 && year.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, year);
    const newData = fetchData(name, year);
    setData(newData);     
  }

  

  return (

    <div className="Search">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Movie Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="year" bsSize="large">
          <ControlLabel>Movie Year</ControlLabel>
          <FormControl
            type="number"
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
