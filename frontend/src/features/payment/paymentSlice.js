import { createSlice } from '@reduxjs/toolkit';
import { generatePaymentIntent } from './paymentsActions';

const initialState = {
      card: {
            cardNumber: '',
            cardName: '',
            expiryDate: '',
            cvv: '',
            token: ''
      },
      shipment: {
            address_line_1: "",
            address_line_2: "",
            country: "CO",
            region: "",
            city: "",
            name: "",
            phone_number: "",
            postal_code: ""
      }
};

const paymentSlice = createSlice({
      name: 'payment',
      initialState,
      reducers: {
            updateCardInfo: (state, action) => {
                  state.card = { ...state.card, ...action.payload };
            },
            updateShipmentInfo: (state, action) => {
                  state.shipment = { ...state.shipment, ...action.payload };
            }
      },
      extraReducers: (builder) => {
            builder
                  .addCase(generatePaymentIntent.pending, (state) => { })
                  .addCase(generatePaymentIntent.fulfilled, (state, action) => {
                        console.log(action.payload);
                  })
                  .addCase(generatePaymentIntent.rejected, (state, action) => {
                        console.warn('Sin acceso, ha ocurrido un error');
                  });
      }
});

export const { updateCardInfo, updateShipmentInfo, updateShippingAddress } = paymentSlice.actions;

export default paymentSlice.reducer;