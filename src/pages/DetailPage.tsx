import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPokemons, getPokemonById, getPokemonBySearch } from '../api';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

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
          <Card
            sx={{
              width: '400px',
              height: '100%',
              justifyContent: 'center',
              alignItem: 'center',
              margin: '2em',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 18,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
                color='text.secondary'
                gutterBottom
              >
                {pokemonDetail?.name}
              </Typography>
              <span style={{ fontWeight: 'bold' }}>Ability:</span>{' '}
              {pokemonDetail.abilities.map((a: any) => (
                <ul>
                  <li style={{ listStyle: 'none' }}>- {a.ability.name}</li>
                </ul>
              ))}
              <span style={{ fontWeight: 'bold' }}>Stats:</span>{' '}
              {pokemonDetail.stats.map((s: any) => (
                <ul>
                  <li style={{ listStyle: 'none' }}>
                    <span style={{ fontWeight: 'bold' }}>{s.stat.name}</span> :{' '}
                    {s.base_stat}
                  </li>
                </ul>
              ))}
            </CardContent>
          </Card>
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
