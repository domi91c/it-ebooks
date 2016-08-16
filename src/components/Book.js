import React, {Component} from 'react';
import '../App.css'
import {Grid, Row, Col} from 'react-bootstrap/lib';


class Book extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={3} className="m-b-3" style={{}}>
          <img src={this.props.image} alt="" className="img-thumbnail m-a-3" />
        </Col>
        <Col xs={9}>
          <h1 className="">{this.props.title}</h1>
          <p>{this.props.description}</p>
        </Col>
      </Row>
    );
  }
}

export default Book;


