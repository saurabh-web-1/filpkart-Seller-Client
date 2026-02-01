import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSellerProfile,
  getSellerOverViwe,
  getSellerOrders,
} from "../../services/sellerApi";

/* LOAD PROFILE */
export const loadSeller = createAsyncThunk(
  "seller/loadProfile",
  async () => {
    const res = await getSellerProfile();
    return res.data.seller;
  }
);

/*  LOAD DASHBOARD */
export const loadDashboard = createAsyncThunk(
  "seller/loadDashboard",
  async () => {
    const res = await getSellerOverViwe();
    return res.data;
  }
);

/* LOAD ORDERS*/
export const loadOrders = createAsyncThunk(
  "seller/loadOrders",
  async () => {
    const res = await getSellerOrders();
        console.log("ORDERS API RESPONSE:", res.data);

    return res.data.orders;
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    profile: null,
    dashboard: null,
    orders: [],
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loadSeller.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(loadDashboard.fulfilled, (state, action) => {
        state.dashboard = action.payload;
      })
      .addCase(loadOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export default sellerSlice.reducer;
