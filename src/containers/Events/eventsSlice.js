import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';


// Define the async thunk for fetching event data
export const fetchEventData = createAsyncThunk('events/fetchEventData', async () => {
   const response = await fetch('/api/events');
   const jsonData = await response.json();
   return jsonData;
});


// Define the async thunk for creating event data
export const createEvent = createAsyncThunk("events/createEvent", async (event, { dispatch }) => {
   const newEvent = event || {
      id: 2,
      time: "1200",
      text: "Lunch",
      createdAt: "4 Dec 2023"
   };

   const response = await fetch('/api/events', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: newEvent})
   });

   const json = await response.json();
   await dispatch(fetchEventData());
   return json;
})


export const toggleEvent = createAction("events/toggle")


export const eventsSlice = createSlice({
      name: 'events',
      initialState: {data: null, loading: false, error: null},
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
            console.log(state.data)         }
      },
      extraReducers: (builder) => {
         builder
            .addCase(fetchEventData.pending, (state) => {
               state.loading = true;
            })
            .addCase(fetchEventData.fulfilled, (state, action) => {
               state.loading = false;
               state.data = action.payload;
            })
            .addCase(fetchEventData.rejected, (state, action) => {
               state.loading = false;
               state.error = action.error.message;
            })
            .addCase(createEvent.pending, (state) => {
               state.loading = true;
            });
      }
   })
;

// Action creators are generated for each case reducer function
//export const {fetch} = eventsSlice.actions
//export const {select} = eventsSlice.actions
export const {create} = eventsSlice.actions

export default eventsSlice.reducer
