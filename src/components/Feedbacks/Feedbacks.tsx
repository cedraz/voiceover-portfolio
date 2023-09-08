'use client';
import * as React from 'react';
import {
  Typography,
  Card,
  Container,
  Grid,
  CardContent,
  CardActions,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import '../../styles/parallax.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import '../../styles/swiper.css';

export default function Feedbacks() {
  const theme = useTheme();

  const [perView, setPerView] = React.useState(3);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setPerView(1);
      } else if (window.innerWidth < 900) {
        setPerView(2);
      } else {
        setPerView(3);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const FEEDBACKS = [
    {
      name: 'Christopher 1',
      feedback:
        'citado. Gosts com ela, ssional, entreto mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!',
      date: '23/01/2023',
      stars: 5,
    },
    {
      name: 'Christopher 2',
      feedback: 'Excelente profissional, entrega demorada',
      date: '23/01/2023',
      stars: 2,
    },
    {
      name: 'Christopher 3',
      feedback: 'Excelente profissional, com certeza!',
      date: '23/01/2024',
      stars: 4,
    },
    {
      name: 'Christopher 4',
      feedback: 'Excelente profissional, com certeza!',
      date: '23/01/2024',
      stars: 4,
    },
    {
      name: 'Christopher 5',
      feedback: 'Excelente profissional, com certeza!',
      date: '23/01/2024',
      stars: 4,
    },
    {
      name: 'Christopher 6',
      feedback: 'Excelente profissional, com certeza!',
      date: '23/01/2024',
      stars: 4,
    },
    {
      name: 'Christopher 7',
      feedback: 'Excelente profissional, com certeza!',
      date: '23/01/2024',
      stars: 4,
    },
  ];

  return (
    <>
      <Grid
        id={'Feedbacks'}
        container
        className="image-container"
        sx={{
          height: '100vh',
          backgroundColor: 'background.secondary',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: '50px',
          pb: '50px',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: {
              xs: 'center',
            },
            padding: {
              xs: '0 20px',
            },
          }}
        >
          Confira algumas avaliações dos meus clientes
        </Typography>
        <Swiper
          slidesPerView={perView}
          pagination={{ clickable: true }}
          navigation
        >
          {FEEDBACKS.map(({ name, feedback, date, stars }) => (
            <SwiperSlide
              key={name}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '640px',
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  width: '90%',
                  maxWidth: '450px',
                }}
              >
                <CardContent sx={{ padding: '25px 25px !important' }}>
                  <Typography variant="h5" sx={{ mb: '25px' }}>
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: '30px',
                      textAlign: 'justify',
                      wordBreak: 'break-word',
                      overflow: 'hidden',
                    }}
                  >
                    {feedback}
                  </Typography>
                  <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Grid
                      sx={{
                        padding: '0 !important',
                      }}
                    >
                      {Array.from(Array(stars), (_, index) => (
                        <StarIcon
                          key={index}
                          sx={{ color: '#D8B866' }}
                        ></StarIcon>
                      ))}
                      {Array.from(Array(5 - stars), (_, index) => (
                        <StarBorderIcon
                          key={index}
                          sx={{ color: '#D8B866' }}
                        ></StarBorderIcon>
                      ))}
                    </Grid>
                    <Typography variant="caption" sx={{ paddingLeft: '5px' }}>
                      {date}
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
}
