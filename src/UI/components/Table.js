import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="4"
                tooltip="Books"
                style={{ textAlign: 'center' }}
              >
                Books
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The Number">№</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Title">Title</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Author">Author</TableHeaderColumn>
              <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.data.map((row, index) =>
              <TableRow key={row.id}>
                <TableRowColumn>
                  <Link to={`/book/${row.id}`}>{index}</Link>
                </TableRowColumn>
                <TableRowColumn>
                  {row.title}
                </TableRowColumn>
                <TableRowColumn>
                  {row.author}
                </TableRowColumn>
                <TableRowColumn>
                    {`${new Date(row.date).toDateString()}`}
                </TableRowColumn>
              </TableRow>,
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TableExampleComplex;
