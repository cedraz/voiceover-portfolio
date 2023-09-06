import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    hero: {
      bgcolor: string;
    };
    navbar: {
      first: string;
      second: string;
    };
  }
  interface ThemeOptions {
    hero?: {
      bgcolor?: string;
    };
    navbar?: {
      first?: string;
      second?: string;
    };
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5A75FF',
      dark: '#2D3B80',
    },
    background: {
      default: '#242424',
    },
    text: {
      primary: '#fff',
      secondary: '#B5B5B5',
    },
  },
  hero: {
    bgcolor: '#272727',
  },
  navbar: {
    // first: '#2E3142',
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            ':hover': {
              backgroundColor: '#2E3142',
            },
            textTransform: 'none',
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            transition: '.15s ease-in-out',
            height: 'fit-content',
            width: 'fit-content',
          },
        },
      ],
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          width: '94px',
        },
        label: {
          fontSize: 16,
        },
      },
    },
  },
});
