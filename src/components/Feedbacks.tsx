'use client';
import * as React from 'react';
import {
  Typography,
  Card,
  Box,
  Container,
  Grid,
  CardContent,
  CardActions,
  CardActionArea,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import '../styles/parallax.css';

export default function Feedbacks() {
  const theme = useTheme();

  return (
    <>
      <Grid
        id={'Feedbacks'}
        container
        className="image-container"
        sx={{
          height: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Container
          sx={{
            marginTop: 30,
          }}
        >
          <Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <div className="wrapper">
                <div className="carousel">
                  <Card
                    variant="outlined"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '30px',
                      borderRadius: '10px',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" sx={{ mb: '25px' }}>
                        Christopher V.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: '30px', textAlign: 'justify' }}
                      >
                        Excelente profissional, entrega muito mais do que o
                        solicitado. Gostei demais do resultado, farei mais
                        trabalhos com ela, com certeza!
                      </Typography>
                      <CardActions sx={{ justifyContent: 'space-between' }}>
                        <Grid
                          sx={{
                            padding: '0 !important',
                          }}
                        >
                          <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
                          <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
                          <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
                          <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
                          <StarIcon sx={{ color: '#D8B866' }}></StarIcon>
                        </Grid>
                        <Typography
                          variant="caption"
                          sx={{ paddingLeft: '5px' }}
                        >
                          23/01/2023
                        </Typography>
                      </CardActions>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
