import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

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
        'muted': (props: StyleFunctionProps) => ({
          color: props.colorMode === 'dark' ? 'whiteAlpha.700' : 'blackAlpha.700',
        }),
        'colored': {
          color: 'cyan.600'
        }
      }
    },
    Heading: {
      variants: {
        'muted': (props: StyleFunctionProps) => ({
          color: props.colorMode === 'dark' ? 'whiteAlpha.700' : 'blackAlpha.700',
        }),
        'colored': {
          color: 'cyan.400'
        }
      }
    }
  }
})

export default overrides;