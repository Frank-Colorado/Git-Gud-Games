import { useState } from 'react';
import {
  TextField,
  Autocomplete as MuiAutocomplete,
  Typography,
} from '@mui/material';
import { useGetGamesQuery, Game } from '../store';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const { data, error, isLoading } = useGetGamesQuery(inputValue);
  const options: Game[] = data || [];
  console.log(data);

  const handleInputChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
  };

  return (
    <MuiAutocomplete
      disablePortal
      sx={{ width: 300 }}
      options={options}
      loading={isLoading}
      value={null}
      onChange={(event, newValue: Game | null) => {
        console.log(newValue);
      }}
      onInputChange={handleInputChange}
      getOptionLabel={(option: Game) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" fullWidth />
      )}
    />
  );
};

export default Autocomplete;
