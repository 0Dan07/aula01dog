import Lista from "./lista";

const Conteudo = ( ) => {
    return (  
        <div style={{background:"black", color:"white"}} >

            <h2 style={{color:"white"}} >Conteudos da UC 15</h2>

            <Lista style={{color: "red"}} titulo="Para o FrontEnd" item1="teste" item2="teste" item3="teste"  /> 

            <Lista style={{color: "blue"}} titulo="Para o BackEnd" item1="teste" item2="teste" item3="teste" /> 
        </div>
    );
}
 
export default Conteudo;