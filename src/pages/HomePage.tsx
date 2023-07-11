import { Grid, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Grid item container>
      <Grid item xs={12}>
        <Typography
          variant='h2'
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          Titolo Pagina
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
