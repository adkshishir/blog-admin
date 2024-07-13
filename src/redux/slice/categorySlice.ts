import Api from '@/constants/api';
import request from '@/helper/request';
import categoryRepo from '@/repo/category-repo';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export type stateType = {
  categories: any;
  isLoading: boolean;
  error: null | string;
};
const initialState = {
  categories: [],
  isLoading: false,
  error: '',
};
export const getCategories = createAsyncThunk(
  'category/getCategories',
  async () => {
    return await request.get(Api.CATEGORIES_URL);
  }
);
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // getCategories: (state, action) => {
    //   state.categories = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.data;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});
export default categorySlice.reducer;
