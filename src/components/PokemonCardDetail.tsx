import React from 'react';
import { PokemonsDetailType } from '../models/page_one/PokemonsType';
import { Card, CardContent, Typography } from '@mui/material';

const PokemonCardDetail = (props: { pokemonDetail: PokemonsDetailType }) => {
  return (
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
          {props.pokemonDetail?.name}
        </Typography>
        <span style={{ fontWeight: 'bold' }}>Ability:</span>{' '}
        {props.pokemonDetail.abilities.map((a: any) => (
          <ul>
            <li style={{ listStyle: 'none' }}>- {a.ability.name}</li>
          </ul>
        ))}
        <span style={{ fontWeight: 'bold' }}>Stats:</span>{' '}
        {props.pokemonDetail.stats.map((s: any) => (
          <ul>
            <li style={{ listStyle: 'none' }}>
              <span style={{ fontWeight: 'bold' }}>{s.stat.name}</span> :{' '}
              {s.base_stat}
            </li>
          </ul>
        ))}
      </CardContent>
    </Card>
  );
};

export default PokemonCardDetail;
