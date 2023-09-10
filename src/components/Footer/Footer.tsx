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
import { useTheme } from '@mui/material/styles';

export default function Footer() {
  const theme = useTheme();

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
            justifyContent: 'space-around',
          }}
        >
          <Grid
            item
            xs={12}
            mm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton color="primary" href="#">
              <MicIcon sx={{ fontSize: 36 }} />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color={theme.footer.color.primary}
              sx={{ flexGrow: 1, cursor: 'pointer' }}
            >
              Geovana Alves
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            mm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="subtitle2">
              © 2022 - 2023 Geovana Alves
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            mm={6}
            md={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              sx={{ fontSize: '12px', mt: '10px' }}
            >
              <IconButton href={'#'}>
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
              <IconButton href={'#'}>
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
        <Box sx={{ mb: '15px', display: 'flex', justifyContent: 'center' }}>
          <Stack direction="row" spacing={3} sx={{ fontSize: '12px' }}>
            <Link
              variant="body2"
              target="_blank"
              href="https://github.com/cedraz"
              sx={{ color: theme.footer.color.secondary }}
              underline="hover"
            >
              Início
            </Link>
            <Link
              variant="body2"
              target="_blank"
              href="https://github.com/cedraz"
              sx={{ color: theme.footer.color.secondary }}
              underline="hover"
            >
              Categorias
            </Link>
            <Link
              variant="body2"
              target="_blank"
              href="https://github.com/cedraz"
              sx={{ color: theme.footer.color.secondary }}
              underline="hover"
            >
              Serviços
            </Link>
            <Link
              variant="body2"
              target="_blank"
              href="https://github.com/cedraz"
              sx={{ color: theme.footer.color.secondary }}
              underline="hover"
            >
              Qualidade
            </Link>
            <Link
              variant="body2"
              target="_blank"
              href="https://github.com/cedraz"
              sx={{ color: theme.footer.color.secondary }}
              underline="hover"
            >
              Feedbacks
            </Link>
          </Stack>
        </Box>
        <Divider
          variant="middle"
          sx={{ backgroundColor: theme.footer.divider }}
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
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
