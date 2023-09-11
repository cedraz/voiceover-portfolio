'use client';
import * as React from 'react';
import {
  Typography,
  Box,
  Grid,
  Divider,
  Link,
  Stack,
  IconButton,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();

  const links = [
    {
      id: 'Início',
      href: '#Início',
    },
    {
      id: 'Categorias',
      href: '#Categorias',
    },
    {
      id: 'Portfólio',
      href: '#Portfólio',
    },
    {
      id: 'Qualidade',
      href: '#Qualidade',
    },
    {
      id: 'Feedbacks',
      href: '#Feedbacks',
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.footer.bgcolor,
          width: '100%',
          height: 'fit-content',
          p: {
            xs: '30px 30px 25px 30px',
          },
          color: theme.footer.color.primary,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            mb: '10px',
            alignItems: 'center',
            justifyContent: {
              xs: 'center',
              md: 'space-between',
              lg: 'space-around',
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                sm: 'flex-start',
              },
            }}
          >
            <IconButton color="primary" href="#Início" sx={{ p: '8px 0' }}>
              <MicIcon sx={{ fontSize: 36 }} />
            </IconButton>
            <Typography
              variant="subtitle1"
              color={theme.footer.color.primary}
              sx={{ cursor: 'pointer' }}
            >
              Geovana Alves
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
              © 2022 - 2023 Geovana Alves
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: 'flex-start',
                mm: 'center',
                sm: 'flex-end',
              },
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              sx={{ fontSize: '12px', mt: '10px', mb: '10px' }}
            >
              <IconButton
                target="_blank"
                href={
                  'https://api.whatsapp.com/send?phone=5571988078997&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20locu%C3%A7%C3%A3o.'
                }
                sx={{ p: '0' }}
              >
                <WhatsAppIcon
                  sx={{
                    fontSize: 25,
                    color: theme.footer.color.primary,
                    ':hover': {
                      color: '#0dc043',
                    },
                  }}
                />
              </IconButton>
              <IconButton
                target="_blank"
                href={
                  'mailto:geovana.alvesdeoli@gmail.com?subject=Pedido%20de%20orçamento%20para%20locução&body=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20locução'
                }
                sx={{ p: '0' }}
              >
                <EmailIcon
                  sx={{
                    fontSize: 25,
                    color: theme.footer.color.primary,
                    ':hover': {
                      color: '#ce3c30',
                    },
                  }}
                />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            mb: '25px',
            display: 'flex',
            justifyContent: {
              xs: 'flex-start',
              mm: 'center',
            },
          }}
        >
          <Stack
            sx={{
              flexWrap: 'wrap',
              flexDirection: {
                xs: 'column',
                mm: 'row',
              },
              gap: {
                xs: '5px',
                mm: '15px',
              },
            }}
          >
            {links.map(({ id, href }) => (
              <Link
                key={id}
                variant="body2"
                href={href}
                sx={{ color: theme.footer.color.secondary }}
                underline="hover"
              >
                {id}
              </Link>
            ))}
          </Stack>
        </Box>
        <Divider
          variant="middle"
          sx={{
            backgroundColor: theme.footer.divider,
            m: {
              xs: '0 0',
            },
          }}
        />

        <Box sx={{ mt: '15px', display: 'flex', justifyContent: 'center' }}>
          <Typography variant="subtitle2">
            Criado por{' '}
            <Link
              variant="body2"
              target="_blank"
              href="https://github.com/cedraz"
              sx={{ color: theme.footer.color.primary }}
              underline="hover"
            >
              cedraz
              <IconButton sx={{ color: theme.footer.color.primary }}>
                <GitHubIcon></GitHubIcon>
              </IconButton>
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
