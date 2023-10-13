import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { setUser } from '../store';
import { Box, Typography, Button } from '@mui/material';
import { GameDetailsType } from '../store/apis/gamesApi';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import EditGameLibrary from './EditGameLibrary';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

interface GameHeaderProps {
  details: GameDetailsType;
}

const GameHeader = ({ details }: GameHeaderProps) => {
  const dispatch = useAppDispatch();
  const { data } = useQuery(GET_ME);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.me));
    }
  }, [data]);

  const loggedIn = Auth.loggedIn();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h3" sx={{ color: 'white' }}>
        {details.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {loggedIn ? (
          <EditGameLibrary game={details} />
        ) : (
          <>
            <Typography
              variant="subtitle1"
              sx={{ color: 'white', marginRight: '.25rem' }}
            >
              You must be logged in to add a game to your library!
            </Typography>
            <Typography
              component={Link}
              to="/login"
              variant="subtitle1"
              sx={{
                color: 'red',
                cursor: 'pointer',
                textDecoration: 'none',
                '&:hover': {
                  color: 'yellow',
                },
              }}
            >
              Try Here!
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default GameHeader;
