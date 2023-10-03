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
          pt: 2,
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Description
        </Typography>
        <Expandable>{details.description_raw}</Expandable>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Genres
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.genres.map((genre) => genre.name).join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Platforms
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.platforms
            .map((platform) => platform.platform.name)
            .join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Release Date
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.released}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Age Rating (ESRB)
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.esrb_rating?.name || 'Not Rated'}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Devlopers
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.developers.map((developer) => developer.name).join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Publishers
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.publishers.map((publisher) => publisher.name).join(', ')}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          Tags
        </Typography>
        <Typography variant="body1" sx={{ color: 'white' }}>
          {details.tags.map((tag) => tag.name).join(', ')}
        </Typography>
      </Box>
    </>
  );
};

export default GameDetails;
