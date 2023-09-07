'use client';
import * as React from 'react';
import { Button, Typography } from '@mui/material';

export default function Hero() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          marginBottom: '15px',
          fontSize: {
            xs: '1.87rem',
            md: '2.5rem',
            lg: '3rem',
          },
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          paddingRight: {
            xs: '0',
            sm: '0',
            md: '0px',
            lg: '100px',
            xl: '120px',
          },
        }}
      >
        Venha conhecer as melhores locuções do mundo
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: {
            xs: '50px',
            sm: '30px',
          },
          color: 'text.secondary',
          textAlign: {
            xs: 'center',
            md: 'left',
          },
          paddingRight: {
            xs: '0',
            sm: '0',
            md: '0px',
            lg: '100px',
            xl: '120px',
          },
        }}
      >
        Aqui você terá acesso as melhores locuções do Brasil, Aqui você terá
        acesso as melhores. Aqui você terá acesso as melhores locuções
      </Typography>
      <Button variant="contained" sx={{}}>
        Faça seu orçamento
      </Button>
    </>
  );
}
