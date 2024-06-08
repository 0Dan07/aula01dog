import Cabecalho from "./components/cabecalho";
import ListaDeProdutos from "./components/listadeprodutos";
import Rodape from "./components/rodape";
import Conteudo from "./components/conteudo";
export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <hr/>
      <Conteudo/>
      <hr/>
        <ListaDeProdutos/>
      <hr/>
      <Rodape/>
    </div>
  );
}
