import Card from '../../components/Card'
import BotaoAdicionar from '../../components/botaoAdicionar'
import { CardGrid } from './styleContainer'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const MainSection = () => {
  const { itens } = useSelector((state: RootReducer) => state.Card)
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  // Função para importar o initial state
  const TodosOscards = () => {
    let cardsFiltrados = itens
    if (nome !== undefined) {
      cardsFiltrados = cardsFiltrados.filter(
        (item) =>
          item.nome.toLocaleLowerCase().search(nome.toLocaleLowerCase()) >= 0
      )
      return cardsFiltrados
    } else {
      return itens
    }
  }
  const mapadosCards = TodosOscards() //const para mapear o initial state

  return (
    <>
      <CardGrid>
        {/* importando o initial state */}
        {mapadosCards.map((C) => (
          <li key={C.nome}>
            <Card
              id={C.id}
              nome={C.nome}
              telefone={C.telefone}
              email={C.email}
            />
          </li>
        ))}
      </CardGrid>
      <BotaoAdicionar />
    </>
  )
}

export default MainSection
