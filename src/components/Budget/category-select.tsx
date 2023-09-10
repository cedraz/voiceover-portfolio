'use client';
import * as React from 'react';
import { TextField, Typography, MenuItem } from '@mui/material';

interface CategorySelectProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
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

export default function CategorySelect({
  category,
  setCategory,
  values,
  setValues,
}: CategorySelectProps) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: '5px' }}>
        Qual tipo de locução você precisa?
      </Typography>
      <TextField
        id="demo-simple-select"
        label="Selecione"
        select
        error={values.category}
        value={category}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, category: false });
          setCategory(e.target.value);
        }}
        SelectProps={{ MenuProps: { disableScrollLock: true } }}
        color={category !== '' ? 'success' : 'error'}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Aatt</MenuItem>
        <MenuItem value={30}>Bar</MenuItem>
        <MenuItem value={40}>Ber</MenuItem>
        <MenuItem value={50}>GHE</MenuItem>
        <MenuItem value={60}>GDAg</MenuItem>
      </TextField>
    </>
  );
}
