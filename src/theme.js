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
        lineHeight: '32px',
        letterSpacing: '0.1px',
      },
      h6: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '0.2px',
      },
      subtitle1: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0.2px',
      },
      subtitle2: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '0.2px',
      },
      h5: {
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '24px',
        letterSpacing: '0.1px',
      },
      button: {
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '22px',
        letterSpacing: '0.2px',
      },
      h4: {
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '30px',
        letterSpacing: '0.2px',
      },
      h2: {
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '50px',
        letterSpacing: '0.2px',
      },
      caption: {
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '16px',
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
      },
      MuiOutlinedInput: {
        styleOverrides:{
          root: {
            paddingRight: '0px',
          }
        }
      },
      MuiInputLabel: {
        styleOverrides:{
          root: {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '28px',
            letterSpacing: '0.2px',
            color: '#737373'
          }
        }
      }
    },
  });
  
export default theme;