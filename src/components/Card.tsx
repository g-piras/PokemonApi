import React from 'react';
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
const CardComponent = (props: { pokemon: string[] }) => {
  return (
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
          {props.pokemon}
        </Typography>
        Ability:{' '}
        {props.pokemon.map((a: any) => (
          <ul>
            <li>{a.ability}</li>
          </ul>
        ))}
      </CardContent>
      <CardActions>
        <Button size='small'>Dettaglio</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
