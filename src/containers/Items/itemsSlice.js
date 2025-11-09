import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit';


// Define the async thunk for fetching item data
export const fetchItemData = createAsyncThunk('items/fetchItemData', async () => {
   const response = await fetch('/api/items');
   const jsonData = await response.json();
   return jsonData;
});


// Define the async thunk for creating item
export const createItem = createAsyncThunk("items/createItem", async (item, { dispatch }) => {
   const newItem = item || {
      id: 2,
      text: "Big Dog",
      createdAt: "4 Dec 2023"
   };

   const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: newItem})
   });

   const json = await response.json();
   await dispatch(fetchItemData());
   return json;
})


export const toggleItem = createAction("items/toggle")


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
         })
         .addCase(createItem.pending, (state) => {
            state.loading = true;
         });
   }
});

// Action creators are generated for each case reducer function
//export const {fetch} = itemsSlice.actions
//export const {select} = itemsSlice.actions
export const {create} = itemsSlice.actions

export default itemsSlice.reducer
