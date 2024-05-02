import Card from '../components/Card'
import BotaoAdicionar from '../components/botaoAdicionar'
import Titulo, { CardGrid } from './styleContainer'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

const MainSection = () => {
  const { itens } = useSelector((state: RootReducer) => state.Card)

  // Função para importar o initial state
  const TodosOscards = () => {
    return itens
  }
  const mapadosCards = TodosOscards() //const para mapear o initial state

  return (
    <>
      <Titulo>Chamada telefonica EBAC - Modulo 31 - Projeto 5</Titulo>
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
