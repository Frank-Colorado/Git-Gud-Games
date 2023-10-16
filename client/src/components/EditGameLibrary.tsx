import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addUserGame, removeUserGame } from '../store';
import { useMutation } from '@apollo/client';
import {
  ADD_GAME_TO_LIBRARY,
  REMOVE_GAME_FROM_LIBRARY,
  UPDATE_USER,
} from '../graphql/mutations';
import { GameDetailsType } from '../store/apis/gamesApi';
import { Button } from '@mui/material';

interface EditGameLibraryProps {
  game: GameDetailsType;
}

const EditGameLibrary = ({ game }: EditGameLibraryProps) => {
  const dispatch = useAppDispatch();

  const [addGameToLibrary, { error }] = useMutation(ADD_GAME_TO_LIBRARY);

  const [removeGameFromLibrary] = useMutation(REMOVE_GAME_FROM_LIBRARY);

  const [hasGame, setHasGame] = useState(false);

  const {
    user: { gameLibrary },
  } = useAppSelector((state) => state.user);

  const { id, name, background_image } = game;

  useEffect(() => {
    if (gameLibrary) {
      const foundGame = gameLibrary.find((game) => game.id === id);
      if (foundGame) {
        setHasGame(true);
      }
    }
  }, []);

  const handleAddGame = async () => {
    const gameInput = {
      id,
      name,
      image: background_image,
    };

    try {
      const { data } = await addGameToLibrary({
        variables: {
          input: gameInput,
        },
      });

      console.log('saving game to library');
      if (data) {
        dispatch(addUserGame(gameInput));
        setHasGame(true);
      }
    } catch (err) {
      console.error({ err });
    }
  };

  const handleRemoveGame = async () => {
    const gameInput = {
      id,
    };

    try {
      const { data } = await removeGameFromLibrary({
        variables: {
          input: gameInput,
        },
      });

      if (data) {
        dispatch(removeUserGame(id));
        setHasGame(false);
      }
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <div>
      {hasGame ? (
        <Button onClick={handleRemoveGame} color="error" variant="contained">
          Remove from Library
        </Button>
      ) : (
        <Button onClick={handleAddGame} color="success" variant="contained">
          Add to Library
        </Button>
      )}
    </div>
  );
};

export default EditGameLibrary;
