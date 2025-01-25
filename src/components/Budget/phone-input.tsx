'use client'
import * as React from 'react'
import TextField from '@mui/material/TextField'

interface PhoneNumberInputProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  values: {
    name: boolean;
    preference: boolean;
    phone: boolean;
    email: boolean;
    category: boolean;
    niche: boolean;
    chars: boolean;
    channel: boolean;
    anotherCategory: boolean;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      name: boolean;
      preference: boolean;
      phone: boolean;
      email: boolean;
      category: boolean;
      niche: boolean;
      chars: boolean;
      channel: boolean;
      anotherCategory: boolean;
    }>
  >;
}

export default function PhoneInput({
  phone,
  setPhone,
  values,
  setValues,
}: PhoneNumberInputProps) {
  return (
    <TextField
      label="Digite seu número de telefone"
      variant="outlined"
      sx={{ mt: '10px' }}
      type="tel"
      error={values.phone}
      value={phone}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, phone: false })
        setPhone(e.target.value.replace(/[^0-9]/g, ''))
      }}
      color={/^\d{11}$/.test(phone) ? 'success' : 'error'}
      helperText={
        /^\d{11}$/.test(phone)
          ? ''
          : 'Digite um número de telefone no formato: 71988888888'
      }
    />
  )
}
