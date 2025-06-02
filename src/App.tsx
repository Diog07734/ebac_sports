import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './store/services/api'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho, favoritarProduto } from './store/cartSlice'
import { RootState } from './store'
import { Produto } from './types'

function App() {
  const dispatch = useDispatch()

  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.cart.favoritos)

  const favoritar = (produto: Produto) => {
    dispatch(favoritarProduto(produto))
  }

  const adicionar = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        {isLoading ? (
          <p>Carregando produtos...</p>
        ) : (
          <Produtos
            produtos={produtos}
            favoritos={favoritos}
            favoritar={favoritar}
            adicionarAoCarrinho={adicionar}
          />
        )}
      </div>
    </>
  )
}

export default App
