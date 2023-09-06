'use client';
import * as React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import MusicPlayerSlider from './Services/MusicPlayerSlider';

const SERVICES = [
  {
    name: 'VSL B-TRADER',
    audioSrc: '/audio/audio.mp3',
  },
  {
    name: 'TESTE',
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
      <Grid container spacing={2}>
        {SERVICES.map(({ name, audioSrc }) => (
          <Grid key={name} item xs={6}>
            <Card>
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
