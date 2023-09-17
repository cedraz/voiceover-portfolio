'use client';
import * as React from 'react';
import Image from 'next/image';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AboutImage from '../../../public/images/about.png';

import Quality from './Quality';

export default function About() {
  const theme = useTheme();

  return (
    <Grid
      id={'Sobre'}
      container
      className="image-container"
      sx={{
        height: {
          xs: 'fit-content',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0C0F20 0%, #171E40 100%)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row-reverse',
          },
          width: {
            xs: '100%',
          },
          marginTop: {
            xs: '160px',
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
          }}
        >
          <Quality />
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
          <Image className="image" src={AboutImage} alt="teste" />
        </Grid>
      </Box>
    </Grid>
  );
}
