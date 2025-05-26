import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { adicionarAoCarrinho, favoritarProduto } from '../store/cartSlice'
import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../App'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const produtos = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.cart.favoritos)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={() => dispatch(favoritarProduto(produto))}
            aoComprar={() => dispatch(adicionarAoCarrinho(produto))}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
