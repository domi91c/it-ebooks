import React, {Component} from 'react/';
import '../App.css'
import {Row, Col, Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap/lib';


class Search extends Component {


  constructor() {
    super();
  }


  render() {

    return (
      <form style={{marginTop: 100}}>
        <Form inline>
          <FormGroup controlId="formInlineName">
            <FormControl type="text" placeholder="Search books..."/>
          </FormGroup>
          {' '}
          <Button type="">
            GO!!!
          </Button>
        </Form>
      </form>


    );
  }

}


export default Search;


