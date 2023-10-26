import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = {
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
    '3xl': '3000px',
  },

  styles: {

    global: {
      body: {
        background: 'white',
        color: 'white',
        overflow: 'hidden',
        fontSize: '16px',
        userSelect: 'none',
        userDrag: 'none',

      },

      a: {
        color: 'white',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },

    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '5em',
        bg: '#171923',
        color: 'white',
        fontFamily: 'GoogleSansRegular',
        letterSpacing: '0.05em',
      },
      defaultProps: {
        variant: 'sm',
      },
    },
  },
}


const customTheme = extendTheme(theme);

export default customTheme;
