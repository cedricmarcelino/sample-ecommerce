'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      h3: {
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '32px', /* 133.333% */
        letterSpacing: '0.1px',
      },
      h6: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px', /* 171.429% */
        letterSpacing: '0.2px',
      },
      subtitle1: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px', /* 142.857% */
        letterSpacing: '0.2px',
      },
      subtitle2: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px', /* 171.429% */
        letterSpacing: '0.2px',
      },
      h5: {
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px', /* 150% */
        letterSpacing: '0.1px',
      },
      button: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '22px', /* 157.143% */
        letterSpacing: '0.2px',
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
    }
  });
  
export default theme;