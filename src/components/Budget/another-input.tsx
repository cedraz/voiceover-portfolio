'use client'
import * as React from 'react'
import { TextField, Typography } from '@mui/material'

interface AnotherInputProps {
  anotherCategory: string;
  setAnotherCategory: React.Dispatch<React.SetStateAction<string>>;
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

export default function AnotherInput({
  anotherCategory,
  setAnotherCategory,
  values,
  setValues,
}: AnotherInputProps) {
  return (
    <>
      <Typography variant="body1" sx={{ mb: '5px', mt: '10px' }}>
        Me fale um pouco sobre a categoria de sua locução:
      </Typography>
      <TextField
        label="Digite um texto sobre a categoria da sua locução"
        variant="outlined"
        error={values.anotherCategory}
        value={anotherCategory}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, anotherCategory: false })
          setAnotherCategory(e.target.value)
        }}
        color={anotherCategory !== '' ? 'success' : 'error'}
      />
    </>
  )
}
