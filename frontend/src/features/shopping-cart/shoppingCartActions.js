import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPurchaseOrder } from "../../services/shoppingcart.service";



export const fetchPurchaseOrder = createAsyncThunk(
      "purchaseOrder/fetchPurchaseOrder",
      async (purchaseOrder, { rejectWithValue }) => {
            try {
                  const response = await createPurchaseOrder(purchaseOrder);

                  return response;
            } catch (error) {
                  return rejectWithValue(error.response.data);
            }
      },
);

