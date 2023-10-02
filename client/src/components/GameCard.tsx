import {
  Grid,
  Card,
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
  return (
    <Grid item xs={3}>
      <Card sx={{ maxHeight: '20rem', maxWidth: '22rem' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Game 1
          </Typography>
          <Box sx={{ height: '500px', backgroundColor: 'red' }} />
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default GameCard;
