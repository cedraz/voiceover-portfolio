'use client';
import * as React from 'react';
import { TextField, Typography, MenuItem } from '@mui/material';

interface CategorySelectProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  values: {
    name: boolean;
    preference: boolean;
    phone: boolean;
    email: boolean;
    category: boolean;
    niche: boolean;
    chars: boolean;
    channel: boolean;
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
    }>
  >;
}

export default function NameInput({
  name,
  setName,
  values,
  setValues,
}: CategorySelectProps) {
  return (
    <>
      <Typography variant="body1" sx={{ mb: '5px' }}>
        Qual o seu nome?
      </Typography>
      <TextField
        label="Nome"
        variant="outlined"
        error={values.name}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, name: false });
          setName(e.target.value);
        }}
        color={name.length >= 5 && name.length <= 65 ? 'success' : 'error'}
        helperText={
          name.length >= 5 && name.length <= 65
            ? ''
            : 'Seu nome tem que ter entre 5 a 65 caracteres'
        }
      />
    </>
  );
}
