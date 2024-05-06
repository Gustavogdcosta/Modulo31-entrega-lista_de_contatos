import styled from 'styled-components'
import cores from '../../styles/cores'

const CardContainer = styled.div`
  background-color: ${cores.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  h2 {
    text-align: center;
  }
`

export const InfoContainer = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 16px 24px;
`

export const Descricao = styled.input`
  color: ${cores.preto};
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  margin-top: 16px;
  border: none;
  background-color: transparent;
  word-break: break-all;
`

export const Botao = styled.button`
  padding: 6px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  margin: 0 0 10px 20px;
  cursor: pointer;
  color: ${cores.branco};
`

export const BotaoEditar = styled(Botao)`
  background-color: ${cores.preto};
`
export const BotaoExcluir = styled(Botao)`
  background-color: ${cores.vermelho};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${cores.vermelho};
`

export default CardContainer
