'use client'
import * as React from 'react'
import TextField from '@mui/material/TextField'

interface EmailInputProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
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

export default function EmailInput({
  email,
  setEmail,
  values,
  setValues,
}: EmailInputProps) {
  return (
    <TextField
      label="Digite seu email"
      variant="outlined"
      sx={{ mt: '10px' }}
      type="email"
      error={values.email}
      value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, email: false })
        setEmail(e.target.value)
      }}
      color={
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
          ? 'success'
          : 'error'
      }
      helperText={
        values.email ? 'Digite um email válido: "exemplo@email.com"' : ''
      }
    />
  )
}
