import { useAppSelector } from '../hooks';

interface EditGameLibraryProps {
  game: number;
}

const EditGameLibrary = ({ game }: EditGameLibraryProps) => {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <div>
      <h1>Edit Game Library</h1>
    </div>
  );
};

export default EditGameLibrary;
