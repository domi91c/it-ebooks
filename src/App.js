import React, {Component} from 'react/';
import './App.css'
import {Grid, Row, Col} from 'react-bootstrap/lib';
import Navigation from './components/Navigation';
import fetch from "isomorphic-fetch/"
import Book from './components/Book';
import Search from './components/Search';


class App extends Component {

  constructor() {
    super();
    this.URL = "http://it-ebooks-api.info/v1/search/sql/";
    this.state = {
      books: []
    };
  };

  componentDidMount() {
    fetch(this.URL)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({books: json.Books});

      });
  };

  renderBooks() {
    this.state.books.forEach(function (book) {
      console.log(book.Title);
    });
    return (
      this.state.books.map(function (book, index) {
        return (
          <div className="" >
            <Book className=""  key={index} title={book.Title} image={book.Image} description={book.Description}/>
          </div>
        );
      })
    )
  }


  render() {
    console.log(this.state.books);
    return (
      <Grid>
        <Navigation />
        <Search />
        <Row className="" style={{marginTop: 100}}>
          {this.renderBooks()}
        </Row>
      </Grid>

    );
  }
}

export default App;
