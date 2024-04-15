import {createSlice} from '@reduxjs/toolkit'


export const itemsSlice = createSlice({
   name: 'items',
   initialState: {
      value: [
         {
            id: 1,
            firstName: "Iname1",
            lastName: "Ilast1",
            createdAt: "4 Dec 2023"
         },
         {
            id: 2,
            firstName: "Iname2",
            lastName: "Ilast2",
            createdAt: "4 Dec 2023"
         },
      ],
   },
   reducers: {
      fetch: (state) => {
         console.log("fetching state.value")
      },
      select: (state, action) => {
         state.selected = action.payload
      },
      create: (state) => {
         console.log("Creating content")
         var count = state.value.length;
      }
   }
});

// Action creators are generated for each case reducer function
export const {fetch} = itemsSlice.actions
export const {select} = itemsSlice.actions
export const {create} = itemsSlice.actions

export default itemsSlice.reducer
