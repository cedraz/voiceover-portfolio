'use client';
import * as React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import MusicPlayerSlider from './MusicPlayerSlider';

const SERVICES = [
  {
    name: 'Criativo Positiva Agro',
    audioSrc: '/audio/criativo-positiva-agro.mp3',
  },
  {
    name: 'Institucional B-trader',
    audioSrc: '/audio/institucional-b-trade.mp3',
  },
  {
    name: 'Propaganda Maju Biju',
    audioSrc: '/audio/propaganda-maju-bidu.mp3',
  },
  {
    name: 'URA - Isa Sortini 2',
    audioSrc: '/audio/ura-isa-sortini-2.mp3',
  },
  {
    name: 'Video Review - RCB',
    audioSrc: '/audio/video-review-rcb.mp3',
  },
  {
    name: 'VSL - O poder da Cetose',
    audioSrc: '/audio/vsl-o-poder-da-cetose.mp3',
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
