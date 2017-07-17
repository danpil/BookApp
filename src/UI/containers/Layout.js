import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from './../../actions/books';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { NavDrawer } from './../components';
import { Header, Main } from '../styled/Layout';

injectTapEventPlugin();

class Layout extends Component {
  componentDidMount() {
    if (this.props.books.data.length === 0) {
      this.props.fetchBooks();
    }

    console.log(this.props.books.data);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer />
          <Header>BooksApp</Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  state => ({
    books: state.books,
  }),
  { fetchBooks },
)(Layout);
