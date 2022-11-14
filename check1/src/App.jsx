import { useState } from "react";
import CardPokemon from "./CardPokemon/CardPokemon";
import Estilos from "./CardPokemon/style.css";

function App(){

  const [nomePokemon, setNomePokemon] = useState("");
  const [imgPokemon, setImgPokemon] = useState("");

  const [pokemon , setPokemon] = useState ([]);

  function salvar(){
    // const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

    if(nomePokemon == "" || imgPokemon == ""){
    alert("Por favor, preencha os campos");
    return;
    //Tentei colocar a condicional para salvar só quando um pokémon válido fosse digitado, mas não consegui

  } else if( !nomePokemon === "Bulbasaur" || !nomePokemon === "Squirtle" || !nomePokemon === "Charmander"){
    alert("Esse não é um pokémon inicial")
    
  }else{
    setPokemon([...pokemon, {nome:nomePokemon , imagem:imgPokemon}])
  }

}
  return(
  <div className="card">
    <h1 className="title">Escolha seu Pokémon</h1>

  <form>
    <input 
    value={nomePokemon} onChange={(event)=>setNomePokemon(event.target.value)}
    placeholder="Digite o nome do seu pokémon"/>

    <input
    value={imgPokemon} onChange={(event)=>setImgPokemon(event.target.value)} 
    placeholder="Coloque a imagem do seu pokémon"/>

  </form>

  <button type="button" onClick={salvar} >Salvar</button>

{
  pokemon.map((pokemon)=>{
    return(
     <CardPokemon pokemon={pokemon} />
    )
  })
}

  </div>
  )

}

export default App