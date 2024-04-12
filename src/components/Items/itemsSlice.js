import {createSlice} from '@reduxjs/toolkit'


export const itemsSlice = createSlice({
   name: 'items',
   initialState: {
      value: [
         {
            "id": 1,
            "name": "name1",
            "query": "query1",
            "createdAt": "4 Dec 2023"
         },
      ],
   },
   reducers: {
      fetch: (state) => {
         console.log("fetching state.value")
      }
   }
});

// Action creators are generated for each case reducer function
export const {fetch} = itemsSlice.actions


export default itemsSlice.reducer
