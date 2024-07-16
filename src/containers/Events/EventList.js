import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

import { fetchEventData } from './eventsSlice';
import { createEvent } from "./eventsSlice";
import {Button} from "@mui/material";


function eventClick(evt) {
   console.log(evt);
}

const columns = [
   {
      field: 'id',
      headerName: '',
      width: 90,
      renderCell: (params => (
         <strong>
            <Button
               variant="contained"
               size="small"
               style={{marginLeft: 16}}
               tabIndex={params.hasFocus ? 0 : -1}
               onClick={eventClick}
            >
               View
            </Button>
         </strong>
      ))
   },
   {
      field: 'text',
      headerName: 'Text',
      width: 150,
      editable: false,
   },
   {
      field: 'time',
      headerName: 'Time',
      width: 150,
      editable: false,
   }
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
