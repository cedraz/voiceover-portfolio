'use client';
import * as React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import MusicPlayerSlider from './MusicPlayerSlider';

const SERVICES = [
  {
    name: 'VSL B-TRADER',
    audioSrc: '/audio/audio.mp3',
  },
  {
    name: '1',
    audioSrc: '/audio/audio2.mp3',
  },
  {
    name: '2',
    audioSrc: '/audio/audio2.mp3',
  },
  {
    name: '3',
    audioSrc: '/audio/audio2.mp3',
  },
  {
    name: '4',
    audioSrc: '/audio/audio2.mp3',
  },
  {
    name: '5',
    audioSrc: '/audio/audio2.mp3',
  },
];

export default function Services() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: '20px', alignSelf: 'center' }}
      >
        Conheça a minha voz
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {SERVICES.map(({ name, audioSrc }) => (
          <Grid
            key={name}
            item
            xs={6}
            sx={{
              minWidth: {
                xs: '100%',
                mm: 'fit-content',
              },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                width: {
                  xs: '100%',
                },
                maxWidth: {
                  xs: '350px',
                },
              }}
            >
              <CardContent sx={{ paddingBottom: '16px !important' }}>
                <MusicPlayerSlider audioSrc={audioSrc}></MusicPlayerSlider>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
