import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_URL } from "../../env";

import axios from "../../axios";

export const generatePaymentIntent = createAsyncThunk(
      "payment/generatePaymentIntent",
      async ({ card, shipment, shoppingCart }, { rejectWithValue }) => {
            try {
                  const response = await axios.post(API_URL + "payment", {
                        card,
                        shipment,
                        shoppingCart,
                  });

                  return response.data;
            } catch (error) {
                  return rejectWithValue(error.response.data);
            }
      }
);