"use client"
import React from "react";

export default function Cabecalho(){

    const [cliques, alteraCliques] = React.useState(1);
    const [medidor, alteramedidor] = React.useState("pouco");
    const [cor, alteracor] = React.useState("black");


    

    function verificamedidor(){
        if (cliques > 0 && cliques < 5){
            alteramedidor("pouco");
            alteracor("black");
        }
        if(cliques > 5){
            alteramedidor("Mais ou Menos");
            alteracor("blue");
        }
        if(cliques > 10){
            alteramedidor("Muito");
            alteracor("red");
        }
    }

    function aumentarcliques(){
        alteraCliques(cliques + 1)
        verificamedidor()
    }

    //Outro modo de função
    function diminuircliques(){
        if (cliques > 0 ){
            alteraCliques(cliques - 1)
            verificamedidor()
        };
    }

    return(
    <div>
            <h1 style={{background: "black", color: "white"}} > Aula 02 de React</h1>

        <p>
            Nesta aula vamos aprender mais sobre componetes e estados <br/>
            <br/>
            <strong> Componentes: </strong>  pedaços de HTML que podem ser injetados em qualquer lugar <br/>
            <strong> Estados: </strong> usado com variaveis para alterar algo na interface
        </p> 

        <p style={{color: cor}} > numero de Cliques: {cliques}, Você clicou {medidor} </p>
        
        <button onClick={ ()=> aumentarcliques() } > Aumentar numero </button>

        <button onClick={ ()=> diminuircliques() } > Diminuir numero </button>

        <button onClick={ ()=> alteraCliques(0, alteramedidor("pouco"), alteracor("black")) } > Resetar numero </button>
    </div>


    );
}