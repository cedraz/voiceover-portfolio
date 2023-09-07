'use client';
import * as React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Switch,
  FormControlLabel,
  FormGroup,
  Drawer,
  Box,
  List,
  ListItem,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { StaticImageData } from 'next/image';
import { useTheme } from '@mui/material/styles';

type Link = {
  id: string;
  href: string;
  children: React.ReactNode;
  image: StaticImageData;
  order: boolean;
};

export default function Navbar({
  toggleFunc,
  links,
}: {
  toggleFunc: () => void;
  links: Link[];
}) {
  const theme = useTheme();
  const [boxShadow, setBoxShadow] = React.useState('none');
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth <= 1200) {
      setSize(true);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1250) {
        setSize(false);
        if (open) {
          setOpen(false);
        }
      } else {
        setSize(true);
      }
    });

    document.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBoxShadow('');
      } else {
        setBoxShadow('none');
      }
    });
  }, [open, size]);

  const toggleDrawer = () => {
    setOpen(!open);
    console.log('botao clicado');
  };

  const stack = (
    <>
      {links.map(({ id, href }) => (
        <Button
          key={id}
          href={href}
          sx={{ color: 'text.primary', fontWeight: 400 }}
        >
          {id}
        </Button>
      ))}
      <Button key="budget" href="#" variant="contained" sx={{ color: '#fff' }}>
        Orçamento
      </Button>
      <FormGroup
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <FormControlLabel
          className="mode-switch"
          sx={{
            color: 'text.primary',
            label: { fontSize: 16 },
          }}
          control={<Switch onClick={toggleFunc} />}
          label={theme.palette.mode}
        />
      </FormGroup>
    </>
  );

  return (
    <>
      <AppBar
        className="navbar"
        position="fixed"
        sx={{
          zIndex: 2000,
          transition: '.3s ease-in-out',
          boxShadow: boxShadow,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: theme.navbar.first,
            padding: {
              xs: '0 20px',
              sm: '0 40px',
              md: '0 100px',
              lg: '0 120px',
              xl: '0 220px',
            },
          }}
        >
          <IconButton color="primary" href="#">
            <MicIcon sx={{ fontSize: 36 }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="text.primary"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            Geovana Alves
          </Typography>
          {size ? (
            <Drawer
              anchor={'right'}
              open={open}
              onClose={toggleDrawer}
              sx={{ color: 'red', zIndex: 2000 }}
            >
              <Stack direction="column" spacing={4} sx={{ padding: '30px' }}>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{ width: 'fit-content' }}
                >
                  <CloseIcon sx={{ fontSize: 25, color: 'primary.main' }} />
                </IconButton>
                {stack}
              </Stack>
            </Drawer>
          ) : (
            <Stack direction="row" spacing={2}>
              {stack}
            </Stack>
          )}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              display: {
                xs: 'flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon sx={{ fontSize: 25, color: 'primary.main' }}></MenuIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
