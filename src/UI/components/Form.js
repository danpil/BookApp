import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogAlert from './Dialog';
import { DatePicker, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.author) {
    errors.author = 'Required';
  }
  return errors;
};

class Form extends Component {
  state = {
    isOpenDialog: false,
  };

  componentDidMount() {
    this.refs.title.getRenderedComponent().getRenderedComponent().focus();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form>
        <div>
          <Field
            name="title"
            component={TextField}
            hintText="Title"
            defaultValue="1111"
            floatingLabelText="Title"
            ref="title"
            withRef
          />
        </div>
        <div>
          <Field
            name="author"
            component={TextField}
            hintText="Author"
            floatingLabelText="Author"
            ref="author"
            withRef
          />
        </div>
        <div>
          <Field
            name="date"
            component={DatePicker}
            format={null}
            hintText="Date"
          />
        </div>
        <div>
          <RaisedButton label="Save" primary={true} onClick={handleSubmit} />
          <DialogAlert
            open={this.state.isOpenDialog}
            delete={this.props.onDelete}
          />
        </div>
      </form>
    );
  }
}

// Form = connect((state, props) => ({
//   initialValues: {
//     author: props.book.author,
//     title: props.book.title,
//   },
// }))(Form);

// const mapStateToProps = (state, props) => {
//     debugger;
//   return {
//       initialValues: {
//           author: props.book.author,
//           title: props.book.title,
//       },
//   };
// };

export default reduxForm({
  form: 'book',
  validate,
})(Form);
