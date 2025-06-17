'use client';
import * as React from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import MusicPlayerSlider from './MusicPlayerSlider';

const SERVICES = [
  {
    name: 'Criativo Positiva Agro',
    audioSrc: '/audios/criativo-positiva-agro.mp3',
  },
  {
    name: 'Institucional B-trader',
    audioSrc: '/audios/institucional-b-trade.mp3',
  },
  {
    name: 'Propaganda Maju Biju',
    audioSrc: '/audios/propaganda-maju-bidu.mp3',
  },
  {
    name: 'URA - Isa Sortini 2',
    audioSrc: '/audios/ura-isa-sortini-2.mp3',
  },
  {
    name: 'Video Review - RCB',
    audioSrc: '/audios/video-review-rcb.mp3',
  },
  {
    name: 'VSL - O poder da Cetose',
    audioSrc: '/audios/vsl-o-poder-da-cetose.mp3',
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
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              minWidth: {
                xs: '100%',
                mm: '0',
              },
              maxWidth: {
                xs: '100%',
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
                  xs: '100%',
                  mm: '450px',
                },
              }}
            >
              <CardContent sx={{ paddingBottom: '16px !important' }}>
                <MusicPlayerSlider
                  audioName={name}
                  audioSrc={audioSrc}
                ></MusicPlayerSlider>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
