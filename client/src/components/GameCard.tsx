import {
  Grid,
  Card,
  CardHeader,
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
      <Card sx={{ maxHeight: '20rem', maxWidth: '22rem' }}>
        <CardHeader title={name} />
        <CardMedia
          component="img"
          height="140"
          image={
            background_image
              ? background_image
              : 'https://via.placeholder.com/150'
          }
          alt={name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
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
