import { useDispatch } from 'react-redux'
import CardTemplate from '../../model'
import CardContainer, {
  BotaoCancelar,
  BotaoEditar,
  BotaoExcluir,
  Descricao,
  InfoContainer
} from './styleCard'
import { useEffect, useState } from 'react'
import { editar, remover } from '../../store/reducers/reducerCard'
import { BotaoSalvar } from '../../styles'

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

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailoriginal.length > 0) {
      setEmail(emailoriginal)
    }
  }, [emailoriginal])

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
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <Descricao
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
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
          <BotaoExcluir onClick={() => dispatch(remover(id))}>
            Excluir
          </BotaoExcluir>
        </>
      )}
    </CardContainer>
  )
}

export default Card
