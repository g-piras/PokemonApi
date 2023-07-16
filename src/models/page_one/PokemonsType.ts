export type PokemonsType = {
    name: string,
    url: string,
    id: string,
    base_experience: string,
}

export type PokemonsDetailType = {
    name: string,
    id: string,
    base_experience: string,
    abilities: [
        {

            name: string
        }
    ]
    ,
    stats: [

        base_stat: number,
        stats:


        {
            name: string,
        }

    ]

}