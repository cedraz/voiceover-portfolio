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

  const FEEDBACKS = [
    {
      name: 'Christopher 1',
      feedback:
        'Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!',
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

  //   {FEEDBACKS.map(({ name, feedback, date, stars }) => (
  //     <Card key={name}
  //       variant="outlined"
  //       sx={{
  //         display: 'flex',
  //         flexDirection: 'column',
  //         gap: '30px',
  //         borderRadius: '10px',
  //         width: '500px',
  //       }}
  //     >
  //       <CardContent>
  //         <Typography variant="h5" sx={{ mb: '25px' }}>
  //           {name}
  //         </Typography>
  //         <Typography
  //           variant="body2"
  //           sx={{ mb: '30px', textAlign: 'justify' }}
  //         >
  //           {feedback}
  //         </Typography>
  //         <CardActions sx={{ justifyContent: 'space-between' }}>
  //           <Grid
  //             sx={{
  //               padding: '0 !important',
  //             }}
  //           >
  //             {Array.from(Array(stars), (_, index) => (
  //               <StarIcon
  //                 key={index}
  //                 sx={{ color: '#D8B866' }}
  //               ></StarIcon>
  //             ))}
  //             {Array.from(Array(5 - stars), (_, index) => (
  //               <StarBorderIcon
  //                 key={index}
  //                 sx={{ color: '#D8B866' }}
  //               ></StarBorderIcon>
  //             ))}
  //           </Grid>
  //           <Typography variant="caption" sx={{ paddingLeft: '5px' }}>
  //             {date}
  //           </Typography>
  //         </CardActions>
  //       </CardContent>
  //     </Card>
  // ))}

  return (
    <>
      <Grid
        id={'Feedbacks'}
        container
        className="image-container"
        sx={{
          height: '100vh',
          backgroundColor: 'background.default',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Swiper
          slidesPerView={3}
          style={{}}
          pagination={{ clickable: true }}
          navigation
        >
          {FEEDBACKS.map(({ name, feedback, date, stars }) => (
            <SwiperSlide
              key={name}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                variant="outlined"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  borderRadius: '10px',
                  width: '400px',
                }}
              >
                <CardContent>
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
