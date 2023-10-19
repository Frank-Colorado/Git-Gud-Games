import { GameDetailsType } from '../store/apis/gamesApi';
import { Box, Typography } from '@mui/material';
import Expandable from './Expandable';

interface GameDetailsProps {
  details: GameDetailsType;
}

const GameDetails = ({ details }: GameDetailsProps) => {
  return (
    <>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h3" color="secondary">
          Description
        </Typography>
        <Expandable>{details.description_raw}</Expandable>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Genres
        </Typography>
        <Typography variant="body1">
          {details.genres.map((genre) => genre.name).join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Platforms
        </Typography>
        <Typography variant="body1">
          {details.platforms
            .map((platform) => platform.platform.name)
            .join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Release Date
        </Typography>
        <Typography variant="body1">{details.released}</Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Age Rating (ESRB)
        </Typography>
        <Typography variant="body1">
          {details.esrb_rating?.name || 'Not Rated'}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Devlopers
        </Typography>
        <Typography variant="body1">
          {details.developers.map((developer) => developer.name).join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Publishers
        </Typography>
        <Typography variant="body1">
          {details.publishers.map((publisher) => publisher.name).join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="h3" color="secondary">
          Tags
        </Typography>
        <Typography variant="body1">
          {details.tags.map((tag) => tag.name).join(', ')}
        </Typography>
      </Box>
    </>
  );
};

export default GameDetails;
