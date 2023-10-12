import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GameType } from '../store';
import React from 'react';

interface GameCardProps {
  game: GameType;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();
  const { id, name, background_image, genres } = game;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.value;
    navigate(`/game/${id}`);
  };

  return (
    <Grid item xs={3}>
      <Card sx={{ height: '21rem', width: '22rem' }}>
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
          <Button size="small" value={id} onClick={handleClick}>
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GameCard;
