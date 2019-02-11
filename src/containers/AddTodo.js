import React from 'react';
import { connect } from 'react-redux';
//import { addTodo } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div style={{marginBottom: 20}}>
      <form
      >
        <TextField name="todo" style={{ marginRight: 20 }} />
        <Button raised color="accent" type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
