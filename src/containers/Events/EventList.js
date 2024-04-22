import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

import {createEvent} from "./eventsSlice";
import { fetchEventData } from './eventsSlice';


const columns = [
   { field: 'id', headerName: 'ID', width: 45 },
   {
      field: 'time',
      headerName: 'Time',
      width: 150,
      editable: true,
   },
   {
      field: 'text',
      headerName: 'Text',
      width: 150,
      editable: true,
   },
   // {
   //    field: 'fullName',
   //    headerName: 'Full name',
   //    description: 'This column has a value getter and is not sortable.',
   //    sortable: false,
   //    width: 160,
   //    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
   // },
];

export function EventList() {
   const {data, loading, error} = useSelector((state) => state.events)
   console.log(data);
   console.log(loading);
   console.log(error);
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchEventData());
   }, [dispatch]);

   if (loading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         {data ? (
            <div>
               <DataGrid
                  rows={data.data}
                  columns={columns}
                  initialState={{
                     pagination: {
                        paginationModel: {
                           pageSize: 5,
                        },
                     },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
               />
            </div>
         ) : 'No events found'}
         <button
            onClick={() => dispatch(createEvent())}
         >
            Add New
         </button>
      </div>
   );
}
