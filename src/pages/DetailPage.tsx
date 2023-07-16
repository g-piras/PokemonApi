import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../api';
import { Box, Button } from '@mui/material';
import PokemonCardDetail from '../components/PokemonCardDetail';

const DetailPage = () => {
  const { pokemonId } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<any | null>(null);

  useEffect(() => {
    if (!!pokemonId) {
      try {
        const pokemonIdNum = parseInt(pokemonId);
        getPokemonById(pokemonIdNum).then((pokemon) => {
          setPokemonDetail(pokemon);
        });
      } catch (err) {
        console.error('NaN');
      }
    }
  }, [pokemonId]);

  useEffect(() => {
    console.log('detail', pokemonDetail);
  });
  return (
    <>
      {!!pokemonDetail ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <PokemonCardDetail pokemonDetail={pokemonDetail} />
        </Box>
      ) : (
        'Loading..'
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <Button variant='contained' href='/'>
          Go to search
        </Button>
      </Box>
    </>
  );
};

export default DetailPage;
