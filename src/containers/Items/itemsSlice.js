import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Define the async thunk for fetching item data
export const fetchItemData = createAsyncThunk('items/fetchItemData', async () => {
   console.log("fetching from server");
   const response = await fetch('http://localhost:3000/api/items');
   console.log(response);
   const jsonData = await response.json();
   console.log(jsonData);
   return jsonData;
});


export const itemsSlice = createSlice({
   name: 'items',
   initialState: { data: null, loading: false, error: null },
   //initialState: {
      //value: [
         // {
         //    id: 1,
         //    name: "Raptor",
         //    value: "999",
         //    description: "mean",
         //    lastUpdated: "4 Dec 2023"
         // },
         // {
         //    id: 2,
         //    name: "Furby",
         //    value: "10",
         //    description: "Playful",
         //    lastUpdated: "4 Dec 2023"
         // },
         // {
         //    id: 3,
         //    name: "Terran Marine",
         //    value: "100",
         //    description: "Semper Fi",
         //    lastUpdated: "4 Dec 2023"
         // },
         // {
         //    id: 4,
         //    name: "Protoss Zealot",
         //    value: "150",
         //    description: "My life for Aiur!",
         //    lastUpdated: "4 Dec 2023"
         // },
     // ],
   //},
   reducers: {
      // fetch: (state) => {
      //    console.log("fetching state.value")
      // },
      // select: (state, action) => {
      //    state.selected = action.payload
      // },
      // create: (state) => {
      //    console.log("Creating content")
      //    var count = state.value.length;
      // }
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
//export const {create} = itemsSlice.actions

export default itemsSlice.reducer
