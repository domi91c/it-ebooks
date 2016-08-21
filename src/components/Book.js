import React, {Component} from 'react';
import '../App.css'
import {Grid, Row, Col} from 'react-bootstrap/lib';


class Book extends React.Component {
  constructor() {
    super();

  }


  render() {
    setTimeout(() => {
      this.setState({title: "Bob"})
    }, 1000);

    return (
      <Row className="well">
        <Col xs={3} className="">
          <img src={this.props.image} alt="" className="img-thumbnail "/>
        </Col>
        <Col xs={9}>
          <h1 className="">
            <mark>{this.props.title}</mark>
          </h1>
          <p>{this.props.description}</p></Col>
      </Row>
    );
  }
}

export default Book;


