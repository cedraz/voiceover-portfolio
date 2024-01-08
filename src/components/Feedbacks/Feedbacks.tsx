'use client'
import * as React from 'react'
import {
    Typography,
    Card,
    Grid,
    CardContent,
    CardActions,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function Feedbacks() {
    const theme = useTheme()
    const [perView, setPerView] = React.useState(3)

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setPerView(1)
            } else if (window.innerWidth < 900) {
                setPerView(2)
            } else {
                setPerView(3)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const FEEDBACKS = [
        {
            name: 'Ricardo A.',
            feedback: 'Tudo certinho, conforme combinado. Obrigado :-)',
            date: '31/08/2023',
            stars: 5,
        },
        {
            name: 'André A.',
            feedback:
        'Gostei bastante do trabalho dela, em breve irei contratar novamente!!',
            date: '29/07/2023',
            stars: 5,
        },
        {
            name: 'maju biju bijuterias Eireli',
            feedback: 'Ok excelente!',
            date: '14/07/2023',
            stars: 5,
        },
        {
            name: 'Jefte J.',
            feedback:
        'Excelente profissional, entrega muito mais do que o solicitado. Gostei demais do resultado, farei mais trabalhos com ela, com certeza!',
            date: '23/06/2023',
            stars: 5,
        },
        {
            name: 'Leandro d.',
            feedback: 'Super recomendo! Muito top',
            date: '19/02/2023',
            stars: 5,
        },
        {
            name: 'Antonio j.',
            feedback:
        'Entrega rápida e com qualidade excelente, Fez alterações que melhorou consideravelmente a fluidez do texto, excelente profissional!',
            date: '01/02/2023',
            stars: 5,
        },
        {
            name: 'Igor C.',
            feedback: 'Narração muito boa mesmo, sem palavras!',
            date: '23/01/2023',
            stars: 5,
        },
        {
            name:  'Mikael d.',
            feedback: 'Ótima vendedora! Faz o serviço muito bem feito e é bem atenciosa.',
            date: '02/01/2024',
            stars: 5
        },
        {
            name:  'Patricio d.',
            feedback: 'A profissional foi rápida e entregou um excelente trabalho.',
            date: '01/01/2024',
            stars: 5
        },
        {
            name:  'Arthur S.',
            feedback: 'Maravilhosa! Voz super imponente e que comunica com muita clareza o proposto. Com certeza escolherei a Geovana para projetos futuros.',
            date: '13/12/2023',
            stars: 5
        },
        {
            name:  'Rewel L.',
            feedback: 'Ótima profissional! Ficou excelente o trabalho! Recomendo!',
            date: '19/09/2023',
            stars: 5
        },
        {
            name:  'Guilherme c.',
            feedback: 'Gostei muito da narração! Super profissional, compreensiva e comprometida. Agradeço o serviço prestado e o belo atendimento! :)',
            date: '04/09/2023',
            stars: 5
        },
        {
            name:  'Márcia M.',
            feedback: 'Atenciosa, educada. Excelente profissional.',
            date: '27/07/2023',
            stars: 5
        },
        {
            name:  'Mari b.',
            feedback: 'a Geovana é uma excelente profissional fez meu video com muita rapidez e me entregou um trabalho perfeito',
            date: '25/07/2023',
            stars: 5
        },
        {
            name:  'Mari b.',
            feedback: 'a Geovana é uma excelente profissional fez meu video com muita rapidez e me entregou um trabalho perfeito',
            date: '25/07/2023',
            stars: 5
        }
    ]

    return (
        <>
            <Grid
                id={'Feedbacks'}
                container
                className="image-container"
                sx={{
                    height: 'fit-content',
                    backgroundColor: theme.palette.background.default,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: '160px',
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
                    style={{
                        cursor: 'grab',
                    }}
                >
                    {FEEDBACKS.map(({ name, feedback, date, stars }) => (
                        <SwiperSlide
                            key={name}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '450px',
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
                                    height: '260px',
                                }}
                            >
                                <CardContent
                                    sx={{
                                        padding: '25px 25px !important',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                    }}
                                >
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
                                    <CardActions
                                        sx={{
                                            mt: 'auto',
                                            justifyContent: 'space-between',
                                            pl: '0 !important',
                                        }}
                                    >
                                        <Grid
                                            sx={{
                                                padding: '0 !important',
                                            }}
                                        >
                                            {Array.from(Array(stars), (_, index) => (
                                                <StarIcon
                                                    key={index}
                                                    sx={{ color: '#ffd465' }}
                                                ></StarIcon>
                                            ))}
                                            {Array.from(Array(5 - stars), (_, index) => (
                                                <StarBorderIcon
                                                    key={index}
                                                    sx={{ color: '#ffd465' }}
                                                ></StarBorderIcon>
                                            ))}
                                        </Grid>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                paddingLeft: '5px',
                                            }}
                                        >
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
    )
}
