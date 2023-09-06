import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    navbar: {
      first: string;
    };
    values: {
      xs: number;
      sm: number;
      tt: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
  interface ThemeOptions {
    navbar?: {
      first?: string;
    };
    values?: {
      xs?: number;
      sm?: number;
      tt?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };
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
      sm: 600,
      md: 1070,
      lg: 1200,
      xl: 1400,
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
