'use client';
import * as React from 'react';
import { TextField, Typography } from '@mui/material';

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

export default function NameInput({
  name,
  setName,
  values,
  setValues,
}: CategorySelectProps) {
  const [chars, setChars] = React.useState(0);

  const charsCounter = () => {
    return <Typography variant="body1">{chars}/50</Typography>;
  };

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
        multiline
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, name: false });
          setName(e.target.value);
          setChars(e.target.value.length);
        }}
        color={name.length >= 3 && name.length <= 50 ? 'success' : 'error'}
        helperText={
          values.name ? 'Seu nome tem que ter entre 5 a 65 caracteres' : ''
        }
        InputProps={{
          endAdornment: charsCounter(),
        }}
      />
    </>
  );
}
