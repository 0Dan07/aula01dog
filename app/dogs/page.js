"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import "./dogs.css"
export default function Dogs(){
    const [racas, alteraRacas] = useState ([])
    const [imgcachorro, alteraImgCachorro] = useState([])
    const [nome, alteraNome] = useState ("")

    teste=1
    
    function buscarimgs(racaCachorro){

        alteraNome (racaCachorro)
        let url = "https://dog.ceo/api/breed/"+racaCachorro+"/images"

        if (racaCachorro == null){
            url = "https://dog.ceo/api/breed/hound/images/random/50"
        }

        axios.get(url)
        .then(function(response){
            alteraImgCachorro (response.data.message)
        })
    }


    function buscarRacas(){
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            alteraRacas (Object.keys(response.data.message))
        } )
    }


    useEffect(()=> {
        buscarRacas();
        buscarimgs();
    }, []);

    return(

        <div id="Dog" >
            <div className="Pai">
                <header className="Cabecalho">
                    <h1>Pagina de Dogs</h1>
                    <h2>Consulte e encontre fotos de cachorros fofos</h2>
                </header>
                <div className="Conteudo" >

                <aside className="Infos">
                    <ul>
                    <p>Caxorros</p>
                              
                       {racas.map((r, index) => {return <li key={index} onClick={()=> {buscarimgs(r); alteraNome(r)}} >{r}</li>})}
                    </ul>
                    
                </aside>
                <h3>{nome}</h3>
                <div className="Main">
                        {imgcachorro.map((i, index) => {return <img key={index} src={i} alt={"Dog" + index} /> })}
                </div>
                </div>
            </div>
        </div>
    )
}