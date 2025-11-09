import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import { fetchEventData } from './eventsSlice';
import { createEvent } from "./eventsSlice";
import {Button} from "@mui/material";

const createColumns = (navigate) => [
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
               onClick={() => navigate(`/events/${params.row.id}`)}
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
   const dispatch = useDispatch()
   const navigate = useNavigate()

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
                  columns={createColumns(navigate)}
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
