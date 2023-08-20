import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchAllItemsByUserid } from "./cartAPI";

const initialState = {
  status: "idle",
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const fetchAllItemsByUseridAsync = createAsyncThunk(
  "cart/fetchItemByUserId",
  async (userId) => {
    const response = await fetchAllItemsByUserid(userId);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchAllItemsByUseridAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllItemsByUseridAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      });
  },
});

export const { increment } = cartSlice.actions;
export const selectItems = (state) => state.cart.items;
export default cartSlice.reducer;
