import React, { Component } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';

class ListBook extends Component {
  render() {
    return (
      <List>
        {this.props.books.map(book => {
          return (
            <Link to={`/book/${book.id}`} key={book.id}>
              <ListItem primaryText={book.titleFormat} />
            </Link>
          );
        })}
      </List>
    );
  }
}

export default ListBook;
