import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const textVariants = {
  'muted': (props: StyleFunctionProps) => ({
    color: mode('blackAlpha.800', 'whiteAlpha.700')(props),
  }),
  'colored': (props: StyleFunctionProps) => ({
    color: mode('cyan.600', 'cyan.500')(props)
  })
}

const btnProps = (props: StyleFunctionProps) => ({
  px: 6,
  py: 6,
  bg: 'cyan.500',
  color: mode('gray.50', 'gray.900')(props),
  _hover: {
    bg: 'cyan.700'
  },
  _active: {
    bg: 'cyan.800'
  },
})

const overrides = extendTheme({
  fonts: {
    heading: `'Overpass', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.900')(props),
        lineHeight: 'base',
      },
    }),
  },
  components: {
    Text: {
      variants: {
        ...textVariants,
      },
    },
    Heading: {
      baseStyle: {
        display: 'flex',
        flexDirection: 'column'
      },
      variants: {
        ...textVariants,
      },
    },
    Divider: {
      baseStyle: {
        opacity: 1,
        borderColor: 'cyan.500',
        borderWidth: '0.25rem',
        mt: '-0.5rem'
      }
    },
    Button: {
      baseStyle: {
        fontFamily: `'Overpass', sans-serif`,
        borderRadius: 3
      },
      variants: {
        solid: btnProps,
        'wide': (props: StyleFunctionProps) => ({
          ...btnProps(props),
          px: 10
        }),
        'nav': (props: StyleFunctionProps) => ({
          fontFamily: `'Open Sans', sans-serif`,
          bg: 'none',
          opacity: 0.8,
          my: 0,
          mx: 2,
          p: 0,
          h: '1.5rem',
          borderRadius: 4,
          borderBottom: '3px solid #00000000',
          transition: '0.1s',
          _hover: {
            opacity: 1,
            borderBottom: '3px solid #00B5D8'
          }
        }),
      }
    }
  }
})

export default overrides;