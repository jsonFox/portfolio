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
  bg: 'cyan.500',
  color: mode('gray.50', 'gray.900')(props),
  display: 'flex',
  alignItems: 'center',
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
        bg: mode('gray.100', 'gray.900')(props),
        lineHeight: 'base',
      },
      header: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#F4F8FC', '#1A1C28')(props)
      }
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
    DrawerContent: {
      defaultProps: (props: StyleFunctionProps) => ({
        bg: mode('#F4F8FC', '#1A1C28')(props)
      })
    },
    Divider: {
      baseStyle: {
        opacity: 1,
        borderColor: 'cyan.500',
        borderWidth: '0.25rem',
        mt: '-0.5rem',
      }
    },
    Button: {
      baseStyle: {
        fontFamily: `'Overpass', sans-serif`,
        borderRadius: 3
      },
      variants: {
        solid: btnProps,
        px: 6,
        py: 6,
        'wide': (props: StyleFunctionProps) => ({
          ...btnProps(props),
          py: 6,
          px: 10
        }),
        'nav': {
          fontFamily: `'Open Sans', sans-serif`,
          bg: 'none',
          opacity: 0.8,
          m: 0,
          p: 0,
          h: '1.5rem',
          borderRadius: 0,
          borderBottom: '3px solid #00000000',
          transition: '0.2s',
          _hover: {
            opacity: 1,
            borderBottom: '3px solid #00B5D8',
          },
        },
        'toggle': (props: StyleFunctionProps) => ({
          color: 'inherit',
          border: mode('2px solid #00000033', '2px solid #FFFFFF33')(props),
          borderRadius: 'full',
          _hover: {
            bg: mode('blackAlpha.100', 'whiteAlpha.50')(props)
          }
        }),
        'project': (props: StyleFunctionProps) => ({
          ...btnProps(props),
          bg: 'cyan.600',
        }),
      }
    },
    Tag: {
      variants: {
        subtle: (props: StyleFunctionProps) => ({
          bg: mode('red', 'blue')(props),
          borderRadius: '0 !important'
        })
      }
    }
  }
})

export default overrides;