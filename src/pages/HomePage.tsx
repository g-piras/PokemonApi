import {
  Button,
  FormControl,
  Grid,
  InputBase,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getAllPokemons, getPokemonBySearch } from '../api';
import { PokemonsType } from '../models/page_one/PokemonsType';
import { Link, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  //STATES
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);
  const [pokemon, setPokemon] = useState<any>([]);
  const [currentSearch, setCurrentSearch] = useSearchParams();

  // SEARCH ALL ITEMS (LIST)
  const handleOnClick = () => {
    getAllPokemons().then((res) => {
      setPokemons(res.results);
    });
  };

  //SEARCH SPECIFIC ITEM
  const handleOnSearch = useCallback(() => {
    getPokemonBySearch(currentSearch?.get('search') || '').then((res) => {
      setPokemon(res);
    });
  }, [currentSearch]);

  useEffect(() => {
    console.log('pokemon name', pokemon);
  }, [pokemon]);

  //SEARCH ON INPUT CHANGE
  const handleOnSearchChange = useCallback(
    (query: string) => {
      setCurrentSearch({ search: query });
    },
    [setCurrentSearch]
  );

  //CLEAR SEARCH
  useEffect(() => {
    handleOnSearch();
  }, [currentSearch]);

  //DISABLED BUTTON
  const isSearchButtonDisabled = () =>
    currentSearch.get('search')?.trim().length === 0;

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant='h2'
            sx={{ textAlign: 'center', textTransform: 'uppercase' }}
          >
            Titolo Pagina
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: '2em' }}>
          <Grid item xs={6} sx={{ display: 'flex', columnGap: 2 }}>
            <Button variant='outlined' onClick={handleOnClick}>
              Show List
            </Button>
            <Button variant='outlined' onClick={() => setPokemons([])}>
              Hide List
            </Button>
          </Grid>
        </Grid>

        {pokemons.map((p: PokemonsType) => (
          <Card key={p.name} sx={{ minWidth: 275, margin: '10px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Pokemon
              </Typography>
              <Typography>name : {p.name}</Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Dettaglio</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant='h6'
            sx={{ textAlign: 'center', textTransform: 'uppercase' }}
          >
            Search for a specific item
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: '2em' }}>
          <Paper
            component='form'
            style={{ padding: '2em' }}
            autoComplete='off'
            sx={{ display: 'flex', alignItems: 'baseline' }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FormControl>
              <InputBase
                id='outlined-basic'
                placeholder='Search item...'
                onChange={(e) => handleOnSearchChange(e.target.value)}
                value={currentSearch.get('search') || ''}
                autoFocus
                sx={{
                  border: '1px solid #f3f1e9',
                  borderRadius: '10px',
                  padding: '5px',
                }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', columnGap: 2, marginLeft: 2 }}>
                <Button
                  disabled={isSearchButtonDisabled()}
                  onClick={handleOnSearch}
                >
                  Search
                </Button>
                <Button onClick={() => setCurrentSearch('')}>Clear</Button>
              </Box>
            </FormControl>
          </Paper>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '2em',
          }}
        >
          {!!pokemon.name ? (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 18,
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                  }}
                  color='text.secondary'
                  gutterBottom
                >
                  {pokemon.name}
                </Typography>
                Ability:{' '}
                {pokemon.abilities.map((a: any) => (
                  <ul>
                    <li>{a.ability.name}</li>
                  </ul>
                ))}
              </CardContent>
              <CardActions>
                <Button size='small'>Dettaglio</Button>
              </CardActions>
            </Card>
          ) : (
            ''
          )}
        </Box>
      </Grid>
    </>
  );
};

export default HomePage;
