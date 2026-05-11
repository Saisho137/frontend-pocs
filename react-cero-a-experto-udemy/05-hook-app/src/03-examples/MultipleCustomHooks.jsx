import useFetch from "../hooks/useFetch"
import useCounter from '../hooks/useCounter'
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";



const MultipleCustomHooks = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Pokemons:</h1>
            <hr />

            {isLoading ? <LoadingMessage />
                :
                <PokemonCard
                    id={data?.id}
                    name={data?.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />
            }
            {hasError && <h3>Error!!!</h3>}

            <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? decrement() : null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>
        </>
    )
}

export default MultipleCustomHooks
