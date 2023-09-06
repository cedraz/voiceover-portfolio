'use client';
import * as React from 'react';
import { Button, Typography } from '@mui/material';

export default function Hero() {
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: '15px' }}>
        Venha conhecer as melhores locuções do mundo
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: '50px', color: 'text.secondary' }}
      >
        Aqui você terá acesso as melhores locuções do Brasil, Aqui você terá
        acesso as melhores. Aqui você terá acesso as melhores locuções
      </Typography>
      <Button variant="contained">Faça seu orçamento</Button>
    </>
  );
}
