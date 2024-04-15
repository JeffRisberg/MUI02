import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './containers/Events/eventsSlice';
import itemsReducer from './containers/Items/itemsSlice';

export const store = configureStore({
   reducer: {
      events: eventsReducer,
      items: itemsReducer,
   },
});
