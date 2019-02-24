import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryEvents, toggleEvent } from '../../actions/events';
import { AddEventComponent, EventListComponent } from '../../components/Events';

class EventListContainer extends Component {

  componentDidMount() {
    console.log('Fetching Events');
    this.props.queryEvents();
  }

  render() {
    if (this.props.events != undefined) {
      return (
        <div className="eventPage">
          <AddEventComponent />
          <EventListComponent
            records={this.props.events}
            status={this.props.status}
            toggleEvent={this.props.toggleEvent}/>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  events: state.app.events.data,
  status: {
    isFetching: state.app.events.isFetching,
    ...state.app.appErrors,
  },
});

export default connect(
  mapStateToProps,
  { queryEvents, toggleEvent }
)(EventListContainer);
