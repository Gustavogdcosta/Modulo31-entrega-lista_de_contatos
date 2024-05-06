import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Botao } from '../components/Card/styleCard'
import cores from './cores'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    word-break: break-all;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
`

export default EstiloGlobal
