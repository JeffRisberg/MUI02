import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

const styles = {
   root: {
      marginTop: "10px",
      padding: "5px",
      background: "#eee"
   },
};

class EventListComponent extends Component {
   static propTypes = {
      records: PropTypes.array.isRequired,
      status: PropTypes.object.isRequired,
      toggleEvent: PropTypes.func.isRequired,
   };

   render() {
      const {records, status} = this.props;

      if (status.isFetching) {
         return (
            <div>
               Loading
            </div>
         );
      }

      const eventNodes = records.map((event, key) => {
         const id = event.id;

         return (
            <tr key={key} className="events__event">
               <td>
                  <Link to={'/events/detail/' + id} className='btn btn-default'>View</Link>
               </td>
               <td style={{textDecoration: event.completed ? 'line-through' : 'none'}}
                   onClick={() => this.props.toggleEvent(event)}>
                  {event.text}
               </td>
               <td>
                  ({event.time} hours)
               </td>
            </tr>
         );
      });

      return (
         <table>
            <thead>
            <tr>
               <th>{''}</th>
               <th>Name</th>
               <th className="text-right">Value</th>
               <th>Description</th>
               <th>Last Updated</th>
            </tr>
            </thead>
            <tbody>
            {eventNodes}
            </tbody>
         </table>
      );
   }
}

export default withStyles(styles)(EventListComponent);
