import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { api } from './services/api' // ✅ importar

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // ✅ adicionar
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // ✅ adicionar
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
