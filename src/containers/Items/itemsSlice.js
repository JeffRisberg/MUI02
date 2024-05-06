import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {ActionTypes as types} from "../../constants";


// Define the async thunk for fetching item data
export const fetchItemData = createAsyncThunk('items/fetchItemData', async () => {
   console.log("fetching from server");
   const response = await fetch('http://localhost:3000/api/items');
   console.log(response);
   const jsonData = await response.json();
   console.log(jsonData);
   return jsonData;
});


// Define the async thunk for creating item data
export const postItemData = createAsyncThunk("events/postItemData", () => {
   const item = {
      id: 2,
      text: "Big Dog",
      createdAt: "4 Dec 2023"
   }

   return fetch('/api/items', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
   })
      .then(response => response.json())
      .then((json) => {
         dispatch({
            type: types.PERSIST_ITEM_SUCCESS,
            events: json.data,
            meta: {
               log: ['item changed']
            }
         });
         dispatch(fetchItemData());
      });
})


export const itemsSlice = createSlice({
   name: 'items',
   initialState: { data: null, loading: false, error: null },
   reducers: {
      // fetch: (state) => {
      //    console.log("fetching state.value")
      // },
      // select: (state, action) => {
      //    state.selected = action.payload
      // },
      create: (state) => {
          console.log("Creating content")
          //var count = state.data.length();
          console.log(state.data)
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchItemData.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchItemData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(fetchItemData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   }
});

// Action creators are generated for each case reducer function
//export const {fetch} = itemsSlice.actions
//export const {select} = itemsSlice.actions
export const {create} = itemsSlice.actions

export default itemsSlice.reducer
