import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Table from './Table';

class Books extends Component {
  render() {
    console.log(this.props.books.data);
    return this.props.books.isFetched
      ? <Table data={this.props.books.data} />
      : <Loading isLoading={this.props.books.isFetched} />;
  }
}

export default connect(state => ({
  books: state.books,
}))(Books);
