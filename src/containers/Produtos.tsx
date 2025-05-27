import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={() => favoritar(produto)}
          aoComprar={() => adicionarAoCarrinho(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
