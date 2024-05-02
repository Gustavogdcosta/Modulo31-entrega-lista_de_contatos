import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import CardTemplate from '../../model'

type CardState = {
  itens: CardTemplate[]
}

const initialState: CardState = {
  itens: [
    {
      nome: 'Gustavo Costa',
      telefone: '(xx)xxxxx-xxxx',
      email: 'email1@hotmail.com',
      id: 1
    },
    {
      nome: 'Telma Dias',
      telefone: '(xx)xxxxx-xxxx',
      email: 'email1@yahoo.com',
      id: 2
    },
    {
      nome: 'Debora Dias',
      telefone: '(xx)xxxxx-xxxx',
      email: 'email1@gmail.com',
      id: 3
    }
  ]
}

const CardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<CardTemplate>) => {
      const indexDaTarefa = state.itens.findIndex(
        (card) => card.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { editar } = CardSlice.actions
export default CardSlice.reducer
