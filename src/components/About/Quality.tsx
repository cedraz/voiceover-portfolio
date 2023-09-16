'use client';
import * as React from 'react';
import {
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useTheme } from '@mui/material/styles';

export default function Quality() {
  const theme = useTheme();

  const keyPoints = [
    'Não faço sincronização da voz com vídeo. Não edito nem apareço em vídeos. ',
    'Não trabalho com narrações do nicho de relacionamento, sedução, maternidade ou sexual.',
    'Não acrescento trilha sonora.',
  ];

  return (
    <Box
      sx={{
        marginLeft: {
          md: '50px',
          lg: '100px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
          xs: 'center',
          sm: 'flex-start',
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: '15px',
          textAlign: {
            xs: 'center',
            sm: 'left',
          },
        }}
      >
        Locução de qualidade
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '10px',
          color: 'text.secondary',
          textAlign: {
            xs: 'center',
            sm: 'justify',
          },
        }}
      >
        Ofereço serviços de locução com revisão ortográfica detalhada e
        sugestões de fluidez gratuitas. Utilizando o FL Studio, faço edições
        precisas com redução de ruídos, entregando áudio em formatos diversos.
        Confie em mim para dar vida à sua voz e tornar seu projeto ainda mais
        profissional.
      </Typography>
      <Stack sx={{ mb: '20px' }}>
        {keyPoints.map((keyPoint) => (
          <ListItem key={keyPoint} sx={{ p: '0 0' }}>
            <ListItemIcon sx={{ minWidth: '35px' }}>
              <PriorityHighIcon
                sx={{
                  color: '#de3d32',
                }}
              ></PriorityHighIcon>
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                {keyPoint}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </Stack>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          width: 'fit-content',
        }}
      >
        <CardContent
          sx={{
            paddingBottom: '16px !important',
          }}
        >
          <Container
            sx={{
              padding: '0 !important',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <StarIcon sx={{ color: '#DFBE6B' }}></StarIcon>
            <StarIcon sx={{ color: '#DFBE6B' }}></StarIcon>
            <StarIcon sx={{ color: '#DFBE6B' }}></StarIcon>
            <StarIcon sx={{ color: '#DFBE6B' }}></StarIcon>
            <StarIcon sx={{ color: '#DFBE6B' }}></StarIcon>
          </Container>
          <Typography variant="caption" sx={{ paddingLeft: '5px' }}>
            100+ Locuções de qualidade!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
