import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import store from './store'
import Home from './pages/home'
import CadastrarNovoContato from './pages/cadastro'
import CabecalhoMainSec from './container/cabecalho'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novocard',
    element: <CadastrarNovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <CabecalhoMainSec />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
