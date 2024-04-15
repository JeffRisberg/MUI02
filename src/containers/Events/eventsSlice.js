import {createSlice} from '@reduxjs/toolkit'


export const eventsSlice = createSlice({
   name: 'events',
   initialState: {
      value: [
         {
            id: 1,
            firstName: "Ename1",
            lastName: "Elast1",
            createdAt: "4 Dec 2023"
         },
         {
            id: 2,
            firstName: "Ename2",
            lastName: "Elast2",
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
export const {fetch} = eventsSlice.actions
export const {select} = eventsSlice.actions
export const {create} = eventsSlice.actions

export default eventsSlice.reducer
