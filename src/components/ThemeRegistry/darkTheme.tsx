import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    navbar: {
      first: string;
    };
    hero: {
      bgcolor: string;
    };
  }
  interface ThemeOptions {
    navbar?: {
      first?: string;
    };
    hero?: {
      bgcolor?: string;
    };
  }
  interface BreakpointOverrides {
    xs: true;
    mm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
  interface TypeBackground {
    secondary: string;
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
      default: '#272727',
      paper: '#121212',
      secondary: '#2e2e2e',
    },
    text: {
      primary: '#fff',
      secondary: '#B5B5B5',
    },
  },
  navbar: {
    first: '#2e2e2e',
  },
  breakpoints: {
    values: {
      xs: 0,
      mm: 400,
      sm: 768,
      md: 1024,
      lg: 1250,
      xl: 1440,
    },
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
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
});
