import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

interface CartState {
  items: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  items: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      state.items.push(action.payload)
    },
    favoritarProduto(state, action: PayloadAction<Produto>) {
      const existe = state.favoritos.find(
        (item) => item.id === action.payload.id
      )
      if (existe) {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, favoritarProduto } = cartSlice.actions
export default cartSlice.reducer
