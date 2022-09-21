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
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      baseStyle: {
        fontFamily: `'Overpass', sans-serif`,
        bg: 'cyan.500',
        borderRadius: 3
      },
      variants: {
        solid: btnProps,
        'wide': (props: StyleFunctionProps) => ({
          ...btnProps(props),
          px: 10
        }),
        defaultProps: {
          bg: ''
        }
      }
    }
  }
})

export default overrides;