'use client';
import * as React from 'react';
import { Typography, Container, Card, CardContent } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function Quality() {
  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: '15px' }}>
        Locução de qualidade
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: '50px', color: 'text.secondary' }}
      >
        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit
      </Typography>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
        }}
      >
        <CardContent
          sx={{
            paddingBottom: '16px !important',
          }}
        >
          <Container sx={{ padding: '0 !important' }}>
            <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
            <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
            <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
            <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
            <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
          </Container>
          <Typography variant="caption" sx={{ paddingLeft: '5px' }}>
            52+ Vendas
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
