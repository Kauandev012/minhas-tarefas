import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { store, persistor } from './store'
import { theme } from './style/theme'
import { GlobalStyle } from './style/GlobalStyles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<div>Carregando dados...</div>}
        persistor={persistor}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
