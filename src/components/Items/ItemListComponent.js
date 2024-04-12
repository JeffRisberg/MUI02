import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const styles = {
   root: {
      marginTop: "10px",
      padding: "5px",
      background: "#eee"
   },
};

class ItemListComponent extends Component {
   static propTypes = {
      records: PropTypes.array.isRequired,
      status: PropTypes.object.isRequired,
      toggleItem: PropTypes.func.isRequired,
   };

   formatEpochTime(epochTime) {
      const date = new Date(Number(epochTime) * 1000);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
   }

   render() {
      const {records, status} = this.props;

      if (status.isFetching) {
         return (
            <div>
               Loading
            </div>
         );
      }

      const itemNodes = records.map((item, key) => {
         const id = item.id;
         const valueStr = item.value.toLocaleString(undefined, {minimumFractionDigits: 2});

         return (
            <TableRow key={key}>
               <TableCell><Link to={'/items/detail/' + id} className='btn btn-default'>View</Link></TableCell>
               <TableCell style={{textDecoration: item.completed ? 'line-through' : 'none'}}
                          onClick={() => this.props.toggleItem(item)}>
                  {item.name}
               </TableCell>
               <TableCell align='right'>${valueStr}</TableCell>
               <TableCell>{item.description}</TableCell>
               <TableCell>{this.formatEpochTime(item.lastUpdated)}</TableCell>
            </TableRow>
         );
      });

      return (
         <Paper>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>{''}</TableCell>
                     <TableCell>Name</TableCell>
                     <TableCell align='right'>Value</TableCell>
                     <TableCell>Description</TableCell>
                     <TableCell>Last Updated</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {itemNodes}
               </TableBody>
            </Table>
         </Paper>
      );
   }
}

export default ItemListComponent;


