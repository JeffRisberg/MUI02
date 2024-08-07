import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ActionTypes as types} from "../../constants";
import {createItem} from "../Items/itemsSlice";


// Define the async thunk for fetching event data
export const fetchEventData = createAsyncThunk('events/fetchEventData', async () => {
   console.log("fetching from server");
   const response = await fetch('http://localhost:3000/api/events');
   console.log(response);
   const jsonData = await response.json();
   console.log(jsonData);
   return jsonData;
});


// Define the async thunk for creating event data
export const createEvent = createAsyncThunk("events/createEvent", () => {
   const event = {
      id: 2,
      time: "1200",
      text: "Lunch",
      createdAt: "4 Dec 2023"
   }

   return fetch('/api/events', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
   })
      .then(response => response.json())
      .then((json) => {
         dispatch({
            type: types.PERSIST_EVENT_SUCCESS,
            events: json.data,
            meta: {
               log: ['event changed']
            }
         });
         dispatch(fetchEventData());
      });
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
