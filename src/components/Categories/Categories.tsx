'use client'
import * as React from 'react'
import Image from 'next/image'
import {
    Grid,
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useTheme } from '@mui/material/styles'

import CategoriesImage from '../../../public/images/categories.png'

export default function Categories() {
    const theme = useTheme()

    const categories = [
        'Cartas de Vendas (VSL)',
        'Vídeos para canal do Youtube',
        'Vídeo Institucional',
        'Áudios para Whatsapp',
        'URAs humanizadas',
        'E-learning',
        'Vídeos internos',
        'Vídeos publicitários',
        'Comerciais e propagandas',
        'E muito mais...',
    ]

    return (
        <Grid
            id={'Categorias'}
            container
            className="image-container"
            sx={{
                height: {
                    xs: 'fit-content',
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(180deg, #171E40 0%, #0C0F20 100%)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row-reverse',
                    },
                    marginTop: {
                        xs: '160px',
                    },
                    width: {
                        xs: '100%',
                    },
                    padding: {
                        xs: '0 20px',
                        sm: '0 40px',
                        md: '0 100px',
                        lg: '0 120px',
                        xl: '0 180px',
                    },
                }}
            >
                <Grid
                    sx={{
                        width: {
                            xs: '100%',
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: {
                            xs: 'center',
                            md: 'center',
                        },
                        alignItems: {
                            xs: 'center',
                            md: 'flex-start',
                        },
                        marginBottom: {
                            xs: '40px',
                        },
                    }}
                >
                    <Box
                        sx={{
                            margin: {
                                md: '0 auto',
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                            }}
                        >
              Categorias de locução
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                textAlign: {
                                    xs: 'center',
                                    md: 'left',
                                },
                            }}
                            color={'text.secondary'}
                        >
              Abaixo estão as categorias de locuções que eu produzo
                        </Typography>
                        <List>
                            {categories.map((category) => (
                                <ListItem key={category}>
                                    <ListItemIcon>
                                        <CheckCircleIcon
                                            sx={{
                                                color: theme.palette.primary.main,
                                            }}
                                        ></CheckCircleIcon>
                                    </ListItemIcon>
                                    <ListItemText>{category}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
                <Grid
                    className="image-container"
                    sx={{
                        display: 'flex',
                        justifyContent: {
                            xs: 'center',
                            md: 'flex-end',
                        },
                        alignItems: 'center',
                        width: {
                            xs: '100%',
                        },
                    }}
                >
                    <Image className="image" src={CategoriesImage} alt="teste" />
                </Grid>
            </Box>
        </Grid>
    )
}
