import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  nome?: string
  telefone?: string
  email: string
}

const initialState: FiltroState = {
  nome: '',
  telefone: '',
  email: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload
    }
  }
})

export const { alteraNome } = filtroSlice.actions
export default filtroSlice.reducer
