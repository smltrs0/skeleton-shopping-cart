import { useState } from 'react';

const useCreditCardValidation = () => {

      const [cardNumber, setCardNumber] = useState('');
      const [cardName, setCardName] = useState('');
      const [expiryDate, setExpiryDate] = useState('');
      const [cvv, setCvv] = useState('');
      const [cardType, setCardType] = useState('');
      const [cardNumberError, setCardNumberError] = useState('');
      const [cardNameError, setCardNameError] = useState('');
      const [expiryDateError, setExpiryDateError] = useState('');
      const [cvvError, setCvvError] = useState('');

      const handleCardNumberChange = (e) => {
            const value = e.target.value.replace(/\s+/g, '');
            setCardNumber(value);
            setCardNumberError('');

            const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
            const mastercardRegex =
                  /^(?:5[1-5][0-9]{14}|2(?:2[2-9][0-9]{2}|[3-6][0-9]{3}|7[0-1][0-9]{2}|720[0-9]{2})[0-9]{12})$/;

            if (visaRegex.test(value)) {
                  setCardType('VISA');
            } else if (mastercardRegex.test(value)) {
                  setCardType('MasterCard');
            } else {
                  setCardType('');
            }

            if (value.length > 16) {
                  setCardNumberError(
                        'El número de tarjeta no puede tener más de 16 dígitos.',
                  );
            }
      };

      const handleCardNameChange = (e) => {
            const value = e.target.value;
            setCardName(value);
            setCardNameError('');

            const nameRegex = /^[a-zA-Z\s]+$/;
            if (!nameRegex.test(value)) {
                  setCardNameError(
                        'El nombre en la tarjeta solo puede contener letras y espacios.',
                  );
            }
      };

      const handleExpiryDateChange = (e) => {
            const value = e.target.value;
            setExpiryDate(value);
            setExpiryDateError('');

            const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
            if (!expiryRegex.test(value)) {
                  setExpiryDateError(
                        'La fecha de expiración debe estar en el formato MM/AA.',
                  );
            }
      };

      const handleCvvChange = (e) => {
            const value = e.target.value;
            setCvv(value);
            setCvvError('');

            const cvvRegex = /^[0-9]{3}$/;
            if (!cvvRegex.test(value)) {
                  setCvvError('El CVV debe contener exactamente 3 dígitos.');
            }
      };

      return {
            cardNumber,
            cardName,
            expiryDate,
            cvv,
            cardType,
            cardNumberError,
            cardNameError,
            expiryDateError,
            cvvError,
            handleCardNumberChange,
            handleCardNameChange,
            handleExpiryDateChange,
            handleCvvChange,
            setCardNumberError
      };
};

export default useCreditCardValidation;