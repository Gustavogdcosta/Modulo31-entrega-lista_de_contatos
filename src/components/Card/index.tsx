import { useDispatch } from 'react-redux'
import CardTemplate from '../../model'
import CardContainer, {
  BotaoCancelar,
  BotaoEditar,
  BotaoExcluir,
  BotaoSalvar,
  Descricao,
  InfoContainer
} from './styleCard'
import { useState } from 'react'
import { editar } from '../../store/reducers/reducerCard'

type Props = CardTemplate

const Card = ({
  nome,
  telefone: telefoneOriginal,
  email: emailoriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaeditando] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  function cancelaEdicao() {
    setEstaeditando(false)
    setTelefone(telefoneOriginal)
    setEmail(emailoriginal)
  }

  return (
    <CardContainer>
      <h2>{nome}</h2>
      <InfoContainer>
        <Descricao
          value={telefoneOriginal}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <Descricao
          value={emailoriginal}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InfoContainer>
      {estaEditando ? (
        <>
          <BotaoSalvar
            onClick={() => {
              dispatch(
                editar({
                  nome,
                  telefone,
                  email,
                  id
                })
              )
              setEstaeditando(false)
            }}
          >
            Salvar
          </BotaoSalvar>
          <BotaoCancelar onClick={cancelaEdicao}>Cancelar</BotaoCancelar>
        </>
      ) : (
        <>
          <BotaoEditar onClick={() => setEstaeditando(true)}>
            Editar
          </BotaoEditar>
          <BotaoExcluir> Excluir </BotaoExcluir>
        </>
      )}
    </CardContainer>
  )
}

export default Card
