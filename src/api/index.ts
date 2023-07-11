const BASE_URL = 'https://pokeapi.co/api/v2/'

export const getPokemonBySearch = async (query: string) => {
    query = query.trim()

    if (query.length === 0) return []

    const res = await fetch(`${BASE_URL}/pokemon/${query}`)

    const data: any = await (res.json())

    return data

}
export const getAllPokemons = async () => {

    const res = await fetch(`${BASE_URL}/pokemon/`)

    const data: any = await (res.json())

    return data

}