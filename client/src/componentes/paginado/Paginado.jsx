import './Paginado.css';

export default function Paginado({pokePage, pokemons, paginado}){
    const pagNumber = [];


    for (let i = 0; i <= Math.ceil(pokemons/pokePage); i++) {
        pagNumber.push(i+1)
        
    }
    return(
        <nav>
            <ul>
                {pagNumber?.map(number =>(
                        <button onClick={()=> paginado(number)}key={number} className='boton-paginado'>{number}</button>
                ))}
            </ul>
        </nav>
    )
}