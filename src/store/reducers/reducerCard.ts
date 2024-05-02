import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import CardTemplate from '../../model'

type CardState = {
  itens: CardTemplate[]
}

const initialState: CardState = {
  itens: [
    {
      nome: ' Nome do contato',
      telefone: '(xx)xxxxx-xxxx',
      email: 'email1@hotmail.com',
      id: 0
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
    },
    cadastrar: (state, action: PayloadAction<Omit<CardTemplate, 'id'>>) => {
      const cardJaExiste = state.itens.find(
        (card) => card.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (cardJaExiste) {
        alert('Já existe um card com este nome')
      } else {
        const ultimoCard = state.itens[state.itens.length - 1]

        const cardNovo = {
          ...action.payload,
          id: ultimoCard ? ultimoCard.id + 1 : 1
        }
        state.itens.push(cardNovo)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((card) => card.id !== action.payload)
    }
  }
})

export const { editar, cadastrar, remover } = CardSlice.actions
export default CardSlice.reducer
