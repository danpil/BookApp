import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

class ListBook extends Component {
  render() {
    return (
      <List>
        {this.props.books.map(book => {
          return <ListItem primaryText={book.titleFormat} key={book.id} />;
        })}
      </List>
    );
  }
}

export default ListBook;
