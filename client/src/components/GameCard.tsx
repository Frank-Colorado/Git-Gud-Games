import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { GameType } from '../store';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: GameType;
}

const GameCard = ({ game }: GameCardProps) => {
  const { id, name, background_image, genres } = game;

  return (
    <Grid item xs={3}>
      <Card
        sx={{
          height: '21rem',
          width: '22rem',
          boxShadow: '0px 0px 10px #ffffff',
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={
            background_image
              ? background_image
              : 'https://via.placeholder.com/150'
          }
          alt={name}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component={Link}
            to={`/game/${id}`}
            variant="h4"
            color="primary"
            sx={{
              mt: 1,
              textDecoration: 'none',
              '&:hover': {
                color: '#ea526f',
              },
            }}
          >
            {name}
          </Typography>
          <Typography component="div" variant="subtitle1" sx={{ mt: 3 }}>
            {genres.map((genre) => genre.name).join(', ')}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default GameCard;
