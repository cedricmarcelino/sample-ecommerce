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
    },
    palette: {
      text: {
        primary: '#252B42',
      }
    }
  });
  
export default theme;