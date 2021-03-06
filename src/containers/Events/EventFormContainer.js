import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forms } from '../../constants';
import { fetchEvent, saveEvent, deleteEvent } from '../../actions/events';
import EventFormComponent from '../../components/Events/EventFormComponent';
import {fetchItem} from "../../actions/items";

const validate = (values) => {
  const errors = {};

  if (!values.text) {
    errors.text = 'Please enter some text.';
  }
  if (!values.time || values.time.trim().length != 4 || parseInt(values.time) > 2359) {
    errors.time = 'Please enter a time (0000 to 2359).';
  }

  return errors;
};

class EventFormContainer extends Component {
   render() {
      return (<div>
         <EventFormComponent fetchHandler={fetchHandler}></EventFormComponent>
      </div>)
   }
}

const mapStateToProps = state => ({
  initialValues: state.app.events.data,
  status: {
    isFetching: state.app.events.isFetching,
    ...state.app.appErrors,
  },
});

const mapDispatchToProps = dispatch => ({
  fetchHandler: (id) => {
    dispatch(fetchEvent(id));
  },
  submitHandler: (values) => {
    const event = {
      ...values,
      text: values.text.trim(),
      time: values.time
    };
    dispatch(saveEvent(event));
  },
  deleteHandler: (e, id) => {
    e.preventDefault();
    dispatch(deleteEvent(id));
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EventFormContainer);
