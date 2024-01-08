'use client'
import * as React from 'react'
import Image from 'next/image'
import { Grid, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Services from './Services'
import PortfolioImage from '../../../public/images/portfolio.png'

export default function Portfolio() {
    const theme = useTheme()

    return (
        <Grid
            id={'Portfólio'}
            container
            className="image-container"
            sx={{
                height: {
                    xs: 'fit-content',
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme.palette.background.secondary,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    width: {
                        xs: '100%',
                    },
                    marginTop: {
                        xs: '160px',
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
                    <Services />
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
                    <Image className="image" src={PortfolioImage} alt="teste" />
                </Grid>
            </Box>
        </Grid>
    )
}
