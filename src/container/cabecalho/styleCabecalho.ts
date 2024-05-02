import styled from 'styled-components'
import cores from '../../styles/cores'
import { Botao } from '../../components/Card/styleCard'

export const Cabecalho = styled.div`
  background-color: ${cores.cinza};
  margin: 20px auto;
  overflow-x: visible;
  text-align: center;
`

const Titulo = styled.h1`
  padding-top: 25px;
  color: ${cores.branco};
  margin-bottom: 20px;
`

export const InputCab = styled.input`
  font-size: 16px;
  width: 500px;
  margin-bottom: 10px;
  padding: 4px;
`

export const BotaoProcurar = styled(Botao)`
  background-color: ${cores.azulEscuro};
`

export default Titulo
