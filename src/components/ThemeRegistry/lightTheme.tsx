import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    navbar: {
      first: string;
    };
    hero: {
      bgcolor: string;
    };
    footer: {
      bgcolor: string;
      color: {
        primary: string;
        secondary: string;
      };
      divider: string;
    };
  }
  interface ThemeOptions {
    navbar?: {
      first?: string;
    };
    hero?: {
      bgcolor?: string;
    };
    footer?: {
      bgcolor?: string;
      color?: {
        primary?: string;
        secondary?: string;
      };
      divider?: string;
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
    footer: string;
  }
  interface TypeText {
    footer: string;
    footerLink: string;
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
      default: '#e1e6ff',
      paper: '#fff',
      secondary: '#e1e6ff',
    },
    text: {
      primary: '#000000',
      secondary: '#343434',
    },
  },
  navbar: {
    first: '#e1e6ff',
  },
  footer: {
    bgcolor: '#000',
    color: {
      primary: '#fff',
      secondary: '#9F9F9F',
    },
    divider: '#fff',
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
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
});
