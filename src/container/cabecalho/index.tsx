import { useDispatch, useSelector } from 'react-redux'

import Titulo, { BotaoProcurar, Cabecalho, InputCab } from './styleCabecalho'
import { RootReducer } from '../../store'
import { alteraNome } from '../../store/reducers/filtro'

const CabecalhoMainSec = () => {
  const dispatch = useDispatch()
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Cabecalho>
      <Titulo>Chamada telefonica EBAC - Modulo 31 - Projeto 5</Titulo>
      <InputCab
        type="text"
        placeholder="Buscar Contato"
        value={nome}
        onChange={(evento) => dispatch(alteraNome(evento.target.value))}
      />
      <BotaoProcurar type="button"> Procurar </BotaoProcurar>
    </Cabecalho>
  )
}

export default CabecalhoMainSec
