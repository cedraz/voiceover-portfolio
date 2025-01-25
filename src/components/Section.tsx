'use client'
import * as React from 'react'
import Image from 'next/image'
import { Grid, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { StaticImageData } from 'next/image'

export default function Section({
  image,
  order,
  children,
  id,
  color,
}: {
  image: StaticImageData;
  order: boolean;
  children: React.ReactNode;
  id: string;
  color: string;
}) {
  const theme = useTheme()

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
        backgroundColor: color,
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
            sm: '0 40px',
            md: '0 100px',
            lg: '0 120px',
            xl: '0 300px',
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
  )
}
