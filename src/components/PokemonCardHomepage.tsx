import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { PokemonsType } from '../models/page_one/PokemonsType';

const PokemonCardHomepage = (props: { pokemon: PokemonsType }) => {
  return (
    <Card key={props.pokemon.id} sx={{ minWidth: 275 }}>
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
          {props.pokemon.name}
        </Typography>
        <Typography>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
            Base Experience :
          </span>{' '}
          {props.pokemon.base_experience}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={props.pokemon.id.toString()}>
          <Button size='small'>Dettaglio</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PokemonCardHomepage;
