import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { GameType } from '../store';

interface GameCardProps {
  game: GameType;
}

const GameCard = ({ game }: GameCardProps) => {
  const { id, name, background_image, genres } = game;

  return (
    <Grid item xs={3}>
      <Card sx={{ minHeight: '20rem', maxHeight: '25rem', maxWidth: '22rem' }}>
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
        <CardContent>
          <Typography variant="h6" textAlign="center">
            {name}
          </Typography>
          <Typography component="div" textAlign="center">
            {genres.map((genre) => genre.name).join(', ')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" value={id}>
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GameCard;
