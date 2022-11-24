import { configureStore } from '@reduxjs/toolkit';
import industrysReducer from './industry/industrySlice';

const store = configureStore({
  reducer: {
    industryTitle: industrysReducer,
  },
});

export default store;
