'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

const theme = createTheme({
    typography: {
      fontFamily: montserrat.style.fontFamily,
      h3: {
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '32px', /* 133.333% */
        letterSpacing: '0.1px',
      },
      h6: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px', /* 171.429% */
        letterSpacing: '0.2px',
      },
      subtitle1: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px', /* 142.857% */
        letterSpacing: '0.2px',
      },
      subtitle2: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px', /* 171.429% */
        letterSpacing: '0.2px',
      },
      h5: {
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px', /* 150% */
        letterSpacing: '0.1px',
      },
      button: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '22px', /* 157.143% */
        letterSpacing: '0.2px',
      },
      h4: {
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '30px', /* 150% */
        letterSpacing: '0.2px',
      },
      allVariants: {
        color: '#252B42'
      }
    },
    palette: {
      text: {
        primary: '#252B42',
        secondary: '#737373',
      }
    },
    components: {
      MuiCard: {
        styleOverrides:{
          root: {
            borderRadius: '0px',
            boxShadow: 'none',
          }
        }
      },
      MuiCardContent: {
        styleOverrides:{
          root: {
            padding: '0px',
          }
        }
      }
    },
  });
  
export default theme;