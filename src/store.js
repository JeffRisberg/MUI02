import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './Components/Events/eventsSlice';
import itemsReducer from './Components/Items/itemsSlice';

export const store = configureStore({
   reducer: {
      events: eventsReducer,
      items: itemsReducer,
   },
});
