function CardPokemon(props){
  return(
    <div className="teste">

    <div className="container">

    <div className="child">
    <h1>{props.pokemon.nome}</h1>
    <img src={props.pokemon.imagem}/>
 
    </div>

    </div>

    </div>
  )
}

export default CardPokemon;