const Produtos  = ( props ) => {
    return ( 
            <div> 
                <h3> {props.nome} </h3>
                <p> Preço: {props.preço} <button>Comprar</button></p>
            </div>
     );
}
 
export default Produtos;

