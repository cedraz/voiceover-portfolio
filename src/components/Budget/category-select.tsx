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

export default function CategorySelect({
  category,
  setCategory,
  values,
  setValues,
}: CategorySelectProps) {
  const categories = [
    'Cartas de Vendas (VSL)',
    'Vídeos para canal do Youtube',
    'Vídeo Institucional',
    'Áudios para Whatsapp',
    'URAs humanizadas',
    'E-learning',
    'Vídeos internos',
    'Comerciais e propagandas',
    'Outra',
  ];

  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: '10px' }}>
        Qual categoria de locução você deseja?
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
        {categories.map((category) => {
          return (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </TextField>
    </>
  );
}
