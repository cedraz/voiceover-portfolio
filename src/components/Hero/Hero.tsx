'use client';
import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();

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
        Olá, tudo bem? Eu sou a Locutora {''}
        <span style={{ color: theme.palette.primary.main, fontSize: '3rem' }}>
          Geovana Alves
        </span>
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
        Aqui você terá acesso ao meu portfólio de locução, à descrição dos meus
        serviços e aos meus contatos. Além disso, você pode solicitar o seu
        orçamento. Vou me empenhar para que a locução fique perfeita para o que
        você precisa!
      </Typography>
      <Button href={'#Orçamento'} variant="contained" sx={{}}>
        Faça seu orçamento
      </Button>
    </>
  );
}
