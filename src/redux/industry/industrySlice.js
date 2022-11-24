import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State value
const initialState = [];

// Base API url
const API = 'https://financialmodelingprep.com/api/v4/institutional-ownership/industry/portfolio-holdings-summary?cik=0001067983&date=2021-09-30&page=0&apikey=f6b0eead8b7dff99feb97d5bc9816172';

// Create Thunk
export const getIndustryTitleStock = createAsyncThunk(
  'industryTitle/performance', async () => {
    const response = await axios.get(API);
    const stock = await response.data;
    return stock;
  },
);

// Create Industry Title Slice
const industryTitleStock = createSlice({
  name: 'industryTitle',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getIndustryTitleStock.fulfilled, (state, action) => action.payload);
  },
});

export default industryTitleStock.reducer;
