import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
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
    navbar: string;
    hero: string;
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
            default: '#171E40',
            paper: '#fff',
            secondary: '#0C0F20',
            navbar: '#171E40',
        },
        text: {
            primary: '#000000',
            secondary: '#343434',
        },
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
})
