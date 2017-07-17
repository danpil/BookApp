import React, { Component } from 'react';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import Loading from './Loading';
import Form from './Form';
import { deletedBook, changeBook } from './../../actions/books';

class Book extends Component {
  onSubmit = () => {
    //e.preventDefault();
    console.log(this.props.form.book.values);
    this.props.changeBook(this.props.params.id, this.props.form.book.values);
    this.props.changeRoute('/');
  };

  onDelete = e => {
    e.preventDefault();
    console.log(this.props.params.id);
    this.props.deletedBook(this.props.params.id);
    this.props.changeRoute('/');
  };

  render() {
    if (this.props.books.isFetched) {
      const book = this.props.books.data.filter(book => {
        return book.id === this.props.params.id;
      })[0];

      return (
        <div>
          <Form
            onSubmit={this.onSubmit}
            onDelete={this.onDelete}
            id={book.id}
            initialValues={{
              title: book.title,
              author: book.author,
              date: new Date(book.date),
            }}
          />
        </div>
      );
    }

    if (!this.props.books.isFetched)
      return <Loading isLoading={this.props.books.isFetched} />;
  }
}

export default connect(
  state => ({
    books: state.books,
    form: state.form,
  }),
  dispatch => ({
    changeRoute: url => dispatch(routerActions.push(url)),
    deletedBook: id => dispatch(deletedBook(id)),
    changeBook: (id, data) => dispatch(changeBook(id, data)),
  }),
)(Book);
