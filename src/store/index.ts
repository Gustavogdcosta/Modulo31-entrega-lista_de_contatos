import { configureStore } from '@reduxjs/toolkit'
import Cardreducer from './reducers/reducerCard'

const store = configureStore({
  reducer: {
    Card: Cardreducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
