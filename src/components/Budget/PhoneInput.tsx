'use client';
import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function PhoneInput() {
  const [phone, setPhone] = React.useState('');
  const phoneInputRef = React.useRef<HTMLInputElement | null>(null);
  const handlePhoneBlur = () => {
    if (phoneInputRef.current) {
      setPhone(phoneInputRef.current.value);
      console.log(/^\d{2} \d{5}-\d{4}$/.test(phone));
    }
  };

  return (
    <TextField
      label="Digite seu número de telefone"
      variant="outlined"
      required
      onBlur={handlePhoneBlur}
      sx={{ mb: '20px' }}
      inputProps={{ ref: phoneInputRef }}
      color={
        !/^(?:\d{11}|\d{2} \d{9})$/.test(phone) || phone === ''
          ? 'error'
          : 'success'
      }
      helperText={
        !/^(?:\d{11}|\d{2} \d{9})$/.test(phone) || phone === ''
          ? 'Digite um número de telefone no formato: 99 99999-9999'
          : ''
      }
    />
  );
}
