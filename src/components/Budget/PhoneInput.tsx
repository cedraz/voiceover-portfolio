'use client';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { set } from 'react-hook-form';

interface PhoneNumberInputProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  values: {
    name: boolean;
    phone: boolean;
    email: boolean;
    category: boolean;
    niche: boolean;
    text: boolean;
    chars: boolean;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      name: boolean;
      phone: boolean;
      email: boolean;
      category: boolean;
      niche: boolean;
      text: boolean;
      chars: boolean;
    }>
  >;
}

export default function PhoneInput({
  phone,
  setPhone,
  error,
  values,
  setValues,
}: PhoneNumberInputProps) {
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/[^\d-]/g, ''));
  };

  return (
    <TextField
      label="Digite seu número de telefone"
      variant="outlined"
      required
      error={error}
      type="tel"
      value={phone}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, phone: false });
        handlePhoneInput(e);
      }}
      sx={{ mb: '20px' }}
      color={/^\d{11}$/.test(phone) ? 'success' : 'error'}
      helperText={
        /^\d{11}$/.test(phone)
          ? ''
          : 'Digite um número de telefone no formato: 71988888888'
      }
    />
  );
}
