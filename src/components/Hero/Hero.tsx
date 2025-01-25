'use client';
import * as React from 'react';
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import heroImage from '../../../public/images/hero.png';

export default function Hero() {
  const theme = useTheme();

  return (
    <Grid
      id={'Início'}
      container
      className="image-container"
      sx={{
        height: {
          xs: 'fit-content',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          marginTop: {
            xs: '100px',
            md: '140px',
          },
          width: {
            xs: '100%',
          },
          padding: {
            xs: '0 20px',
            sm: '0 40px',
            md: '0 100px',
            lg: '0 120px',
            xl: '0 180px',
          },
        }}
      >
        <Grid
          sx={{
            width: {
              xs: '100%',
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {
              xs: 'center',
              md: 'center',
            },
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            marginBottom: {
              xs: '40px',
            },
          }}
        >
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
                lg: '80px',
                xl: '100px',
              },
            }}
          >
            Olá, tudo bem? Eu sou a Locutora Geovana Alves
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: {
                xs: '50px',
                sm: '30px',
              },
              color: theme.palette.text.secondary,
              textAlign: {
                xs: 'center',
                md: 'left',
              },
              paddingRight: {
                xs: '0',
                sm: '0',
                md: '30px',
                lg: '40px',
                xl: '60px',
              },
            }}
          >
            Aqui você terá acesso ao meu portfólio de locução, à descrição dos
            meus serviços e aos meus contatos. Além disso, você pode solicitar o
            seu orçamento. Vou me empenhar para que a locução fique perfeita
            para o que você precisa!
          </Typography>
          <Button
            href={
              'https://api.whatsapp.com/send?phone=5571988078997&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20locu%C3%A7%C3%A3o.'
            }
            variant="contained"
            sx={{ width: '300px', height: '50px' }}
          >
            Faça seu orçamento
          </Button>
        </Grid>
        <Grid
          className="image-container"
          sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
            },
            alignItems: 'center',
            width: {
              xs: '100%',
            },
          }}
        >
          <Image className="image" src={heroImage} alt="teste" />
        </Grid>
      </Box>
    </Grid>
  );
}
