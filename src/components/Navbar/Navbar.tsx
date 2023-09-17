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
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddCardIcon from '@mui/icons-material/AddCard';
import { useTheme } from '@mui/material/styles';

export default function Navbar({ toggleFunc }: { toggleFunc: () => void }) {
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

  const links = ['Início', 'Categorias', 'Portfólio', 'Sobre', 'Feedbacks'];

  const stack = (
    <>
      {links.map((id) => (
        <Button
          key={id}
          href={`#${id}`}
          sx={{ color: 'text.primary', fontWeight: 400 }}
        >
          {id}
        </Button>
      ))}
      <Button
        key="budget"
        href="#Orçamento"
        variant="contained"
        sx={{ color: '#fff' }}
      >
        Orçamento
        <IconButton>
          <AddCardIcon />
        </IconButton>
      </Button>
      {/* <FormGroup
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
      </FormGroup> */}
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
          background: 'transparent',
        }}
      >
        <Toolbar
          sx={{
            padding: {
              xs: '0 20px',
              sm: '0 40px',
              md: '10px 100px',
              lg: '10px 120px',
              xl: '10px 180px',
            },
            backgroundColor: theme.palette.background.default,
          }}
        >
          <IconButton
            color="primary"
            href="#Início"
            sx={{ padding: '0 !important' }}
          >
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
