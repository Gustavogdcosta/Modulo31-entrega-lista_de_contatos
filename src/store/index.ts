import { configureStore } from '@reduxjs/toolkit'
import Cardreducer from './reducers/reducerCard'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    Card: Cardreducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
