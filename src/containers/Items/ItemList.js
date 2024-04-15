import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

import {create} from "./itemsSlice";
import { fetchItemData } from './itemsSlice';

const columns = [
   { field: 'id', headerName: 'ID', width: 45 },
   {
      field: 'name',
      headerName: 'Name',
      width: 100,
      editable: true,
   },
   {
      field: 'value',
      headerName: 'Value',
      width: 75,
      editable: true,
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
                  checkboxSelection
                  disableRowSelectionOnClick
               />
            </div>
         ) : 'No items found'}
         <button
            onClick={() => dispatch(create())}
         >
            Add New
         </button>
      </div>
   );
}
