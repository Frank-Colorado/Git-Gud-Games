import { GameDetailsType } from '../store/apis/gamesApi';

interface GameDetailsProps {
  details: GameDetailsType;
}

const GameDetails = ({ details }: GameDetailsProps) => {
  return (
    <div>
      <h1>Game Details</h1>
    </div>
  );
};

export default GameDetails;
