'use client';
import * as React from 'react';
import { TextField, Typography } from '@mui/material';

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
      <Typography variant="subtitle1" sx={{ mb: '5px' }}>
        Me fale um pouco sobre o assunto da locução, sobre o que se trata o
        texto?
      </Typography>
      <TextField
        label="Qual o nicho da locução?"
        variant="outlined"
        multiline
        error={values.niche}
        value={niche}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, niche: false });
          setNiche(e.target.value);
        }}
        color={niche !== '' ? 'success' : 'error'}
        helperText={
          niche !== '' ? '' : 'Descreva brevemente o nicho da sua locução'
        }
      ></TextField>
    </>
  );
}
