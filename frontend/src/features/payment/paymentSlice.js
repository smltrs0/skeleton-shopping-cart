

import { createSlice } from '@reduxjs/toolkit';
import { generatePaymentIntent } from './paymentsActions';

const initialState = {
      card: {
            cardNumber: '',
            cardName: '',
            expiryDate: '',
            cvv: ''
      },
      shipment: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: ''
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

export const { updateCardInfo, updateShipmentInfo } = paymentSlice.actions;

export default paymentSlice.reducer;