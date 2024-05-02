import React from 'react'

import EstiloGlobal, { Container } from './styles'
import MainSection from './container'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <MainSection />
      </Container>
    </Provider>
  )
}

export default App
