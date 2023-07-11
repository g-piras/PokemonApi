import {
  Button,
  FormControl,
  Grid,
  InputBase,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { getPokemonBySearch } from '../api';
import { PokemonsType } from '../models/page_one/PokemonsType';
import { Link, useSearchParams } from 'react-router-dom';

const HomePage = () => {
  //STATES
  const [pokemons, setPokemons] = useState<PokemonsType[]>([]);
  const [currentSearch, setCurrentSearch] = useSearchParams();

  //SEARCH FUNCTION
  const handleOnSearch = useCallback(() => {
    getPokemonBySearch(currentSearch?.get('search') || '').then((res) =>
      setPokemons(res)
    );
  }, [currentSearch]);

  //DISABLED BUTTON
  const isSearchButtonDisabled = () =>
    currentSearch.get('search')?.trim().length === 0;

  useEffect(() => {
    console.log('pokemons', pokemons);
  }, [pokemons]);

  return (
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
        <Paper
          component='form'
          sx={{ display: 'flex', alignItems: 'center' }}
          style={{ padding: '2em' }}
          autoComplete='off'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormControl>
            <InputBase
              id='outlined-basic'
              placeholder='Search by title...'
              //   onChange={(e) => handleOnSearchChange(e.target.value)}
              value={currentSearch.get('search') || ''}
              autoFocus
            />
          </FormControl>
          <FormControl>
            <Button
              disabled={isSearchButtonDisabled()}
              onClick={handleOnSearch}
            >
              Search
            </Button>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
