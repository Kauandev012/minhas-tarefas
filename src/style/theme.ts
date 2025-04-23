import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    background: '#14213d',
    primary: '#70e000',
    secondary: '#005f73',
    accent: '#f9c74f',
    text: '#ced4da',
    textLight: '#ffffff',
    danger: '#9d0208'
  },
  fonts: {
    main: "'Roboto', sans-serif"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem'
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  borderRadius: '24px',
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  }
}
