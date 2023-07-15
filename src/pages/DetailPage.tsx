import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPokemons, getPokemonById, getPokemonBySearch } from '../api';
import {
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
  return (
    <>
      {!!pokemonDetail ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
        >
          <Card
            sx={{
              maxWidth: '400px',
              height: '100%',
              justifyContent: 'center',
              alignItem: 'center',
              margin: '2em',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {pokemonDetail?.name}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        'Loading..'
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <Button variant='contained' href='/'>
          Go to search
        </Button>
      </div>
    </>
  );
};

export default DetailPage;
