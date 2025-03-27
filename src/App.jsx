import './App.css';
import {useFetch} from './hooks/useCustomHook';


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {
    data:pokemonData,
    error: pokemonError,
    loading: pokemonLoading
  } = useFetch(urlPokemon)

  const {
    data:rickData,
    error: rickError,
    loading: rickLoading
  } = useFetch(urlRick)
  
  return (
    <div className='card'> 
      <div className='character-card' >
        <h1>Personaje Pokemon</h1>
        {pokemonLoading && <div>Loading...</div>}
        {pokemonError && <div>Error: {pokemonError.message}</div>}
        {pokemonData && (
          <div className='read-the-docs'> 
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className='logo'/>
          </div>
        )}
      </div>

      <div className='character-card' >
        <h1>Personaje Rick and Morty</h1>
        {rickLoading && <div>Loading...</div>}
        {rickError && <div>Error: {rickError.message}</div>}
        {rickData && (
          <div className='read-the-docs'>
            <h2>{rickData.name}</h2>
            <img src={rickData.image} alt={rickData.name}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;