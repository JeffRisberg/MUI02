import React, {Component} from 'react';
import EventListContainer from '../containers/Events/EventListContainer';
import EventFormContainer from '../containers/Events/EventFormContainer';

class Events extends Component {

   render() {
      const id = this.props.match.params != undefined ? this.props.match.params.id : undefined;
      const content = (id != undefined) ?
         <EventFormContainer {...this.props} /> : <EventListContainer {...this.props} />;

      return (
         <div>
            <div style={{borderBottom: '5px solid red'}}>
               {content}
            </div>
         </div>
      )
   }
}

export default Events;
