'use client';
import * as React from 'react';
import Image from 'next/image';
import { Container, Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { StaticImageData } from 'next/image';

export default function Section({
  image,
  order,
  children,
  id,
}: {
  image: StaticImageData;
  order: boolean;
  children: React.ReactNode;
  id: string;
}) {
  const theme = useTheme();

  return (
    <Grid
      id={id}
      container
      className="image-container"
      sx={{
        height: {
          xs: 'fit-content',
          md: '100vh',
        },
        paddingBottom: {
          xs: '50px',
        },
        backgroundColor: order ? `${theme.hero.bgcolor}` : 'background.default',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: order ? 'row' : 'row-reverse',
          },
          marginTop: {
            xs: '100px',
          },
          width: {
            xs: '100%',
          },
          padding: {
            xs: '0 20px',
            md: '0 40px',
            lg: '0 120px',
            xl: '0 400px',
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
          {children}
        </Grid>
        <Grid
          className="image-container"
          sx={{
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: order ? 'flex-end' : 'flex-start',
            },
            alignItems: 'center',
            width: {
              xs: '100%',
            },
          }}
        >
          <Image className="image" src={image} alt="teste" />
        </Grid>
      </Box>
    </Grid>
  );
}
