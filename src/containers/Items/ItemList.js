import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

import { fetchItemData } from './itemsSlice';
import { createItem } from "./itemsSlice";
import {Button} from "@mui/material";

function itemClick(evt) {
   console.log(evt);
}

function formatEpochTime(epochTime) {
   const date = new Date(Number(epochTime) * 1000);
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
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
               onClick={itemClick}
            >
               View
            </Button>
         </strong>
      ))
   },
   {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
   },
   {
      field: 'value',
      headerName: 'Value',
      width: 75,
      editable: true,
      align: 'right'
   },
   {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: true,
   },
   {
      field: 'lastUpdated',
      headerName: 'Last updated',
      width: 150,
      editable: true,
      valueGetter: (value) =>
         formatEpochTime(value.value)
   }
];

export function ItemList() {
   const {data, loading, error} = useSelector((state) => state.items)
   console.log(data);
   console.log(loading);
   console.log(error);
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchItemData());
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
         ) : 'No items found'}
         <button
            onClick={() => dispatch(createItem())}
         >
            Add New
         </button>
      </div>
   );
}
