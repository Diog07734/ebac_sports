import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './store/services/api'

import { GlobalStyle } from './styles'
import { useState } from 'react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  const [favoritos, setFavoritos] = useState<Produto[]>([])
  const [carrinho, setCarrinho] = useState<Produto[]>([])

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, produto])
    }
  }

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
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
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        )}
      </div>
    </>
  )
}

export default App
