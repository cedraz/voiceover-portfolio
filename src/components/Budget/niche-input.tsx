'use client'
import * as React from 'react'
import { TextField } from '@mui/material'

interface CategorySelectProps {
  niche: string;
  setNiche: React.Dispatch<React.SetStateAction<string>>;
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

export default function NicheInput({
  niche,
  setNiche,
  values,
  setValues,
}: CategorySelectProps) {
  return (
    <>
      <TextField
        label="Descreva brevemente o nicho da sua locução"
        variant="outlined"
        multiline
        error={values.niche}
        value={niche}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, niche: false })
          setNiche(e.target.value)
        }}
        color={niche !== '' ? 'success' : 'error'}
        sx={{
          mt: {
            xs: '10px',
            md: '0',
          },
        }}
      ></TextField>
    </>
  )
}
