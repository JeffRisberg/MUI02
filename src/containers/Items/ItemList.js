import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';

import {create} from "./itemsSlice";

const columns = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
   },
   {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
   },
   {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
   },
];

export function ItemList() {
   const items = useSelector((state) => state.items.value)
   console.log(items);
   const dispatch = useDispatch()

   return (
      <div>
         {items ? (
            <div>
               <DataGrid
                  rows={items}
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
