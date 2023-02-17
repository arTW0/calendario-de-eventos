import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';
import { useSetRecoilState } from 'recoil';

const EventoCheckbox: React.FC<{ evento: IEvento, }> = ({ evento }) => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo

    setListaDeEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(e => e.id === evento.id)
      return [...listaAntiga.slice(0, indice), eventoAlterado, ...listaAntiga.slice(indice + 1)]
    })
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox