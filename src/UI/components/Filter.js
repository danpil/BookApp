import React, { Component } from 'react';
import ListBook from './List';
import { connect } from 'react-redux';
import { Loading, FilterField } from './../components';

class Filter extends Component {
  state = {
    books: this.props.books.data.map(this.toFormatBook.bind(this)),
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.books.data !== this.state.books) {
      this.setState({
        books: nextProps.books.data.map(this.toFormatBook.bind(this)),
      });
    }
  }

  toFormatText(txt) {
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    return toTitleCase(txt.replace(/[^A-Z]+/gi, ' '));
  }

  toFormatBook(book) {
    return {
      ...book,
      titleFormat: this.toFormatText(book.title),
    };
  }

  filterList(event) {
    let updatedList = this.props.books.data.map(this.toFormatBook.bind(this));
    updatedList = updatedList.filter(function(book) {
      return (
        book.titleFormat
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ books: updatedList });
  }

  render() {
    if (!this.props.books.isFetched)
      return <Loading isLoading={this.props.books.isFetched} />;

    if (this.props.books.isFetched) {
      return (
        <div>
          <FilterField onChange={this.filterList.bind(this)} />
          <ListBook books={this.state.books} />
        </div>
      );
    }
  }
}

export default connect(state => ({
  books: state.books,
}))(Filter);
