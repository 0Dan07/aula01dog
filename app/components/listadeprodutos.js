import Produtos from "./produtos";

const ListaDeProdutos = () => {
    return ( 
        <div className="fundoRosa" >

            <h2>Produtos disponiveis</h2>

            <Produtos nome="Livro🤓 " preço="R$ 99,99" /> 

            <Produtos nome="Curso ☠" preço="R$ 99,99" /> 

            <Produtos nome="MAUSE 🐭" preço="R$ 99,99"/> 
        </div>
     );
}
 
export default ListaDeProdutos;