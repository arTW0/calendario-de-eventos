import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useListaDeEvetos = () => {
  return useRecoilValue(listaDeEventosState)
}

export default useListaDeEvetos;