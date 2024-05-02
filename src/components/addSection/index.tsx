import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { BotaoSalvar, Container } from '../../styles'
import { DivMaior, InputTag, LabelTag } from './styleAddSection'
import { cadastrar } from '../../store/reducers/reducerCard'

const NovoCard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarCard = () => {
    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <DivMaior onSubmit={cadastrarCard}>
        <LabelTag htmlFor="newContato">Digite o Nome do novo contato:</LabelTag>
        <br />
        <InputTag
          required
          type="text"
          name="newConatato"
          placeholder="Identifique o Contato"
          onChange={(evento) => setNome(evento.target.value)}
        />
        <br />
        <LabelTag htmlFor="newTelefone">
          Digite o telefone do novo contato:
        </LabelTag>
        <br />
        <InputTag
          required
          type="text"
          name="newTelefone"
          placeholder="(xx) xxxxx-xxxx"
          onChange={({ target }) => setTelefone(target.value)}
        />
        <br />
        <LabelTag htmlFor="newEmail"> Digite o email do novo contato:</LabelTag>
        <br />
        <InputTag
          required
          type="text"
          name="newEmail"
          placeholder="example@gmail.com"
          onChange={({ target }) => setEmail(target.value)}
        />
        <br />
        <BotaoSalvar type="submit"> Cadastrar </BotaoSalvar>
      </DivMaior>
    </Container>
  )
}

export default NovoCard
