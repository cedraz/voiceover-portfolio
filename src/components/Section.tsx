'use client';
import * as React from 'react';
import Image from 'next/image';
import { Container, Grid } from '@mui/material';
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
        backgroundColor: order ? `${theme.hero.bgcolor}` : 'background.default',
      }}
    >
      <Container
        sx={{
          marginTop: {
            xs: '100px',
            md: '180px',
          },
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            flexDirection: {
              md: order ? 'row' : 'row-reverse',
            },
            alignItems: {
              xs: 'center',
            },
          }}
        >
          <Grid
            container
            item
            xs={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            {children}
          </Grid>
          <Grid
            item
            className="image-container"
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: order ? 'flex-end' : 'flex-start',
              alignItems: 'center',
            }}
          >
            <Image className="image" src={image} alt="teste" />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
