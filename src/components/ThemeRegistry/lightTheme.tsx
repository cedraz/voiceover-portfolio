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
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5A75FF',
      dark: '#2D3B80',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000000',
      secondary: '#343434',
    },
  },
  hero: {
    bgcolor: '#F6F8FF',
  },
  navbar: {
    first: '#F6F8FF',
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
              backgroundColor: '#EBEEFF',
            },
            textTransform: 'none',
            transition: '.15s ease-in-out',
            height: 'fit-content',
            width: 'fit-content',
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
