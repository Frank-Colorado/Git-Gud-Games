import { useState } from 'react';
import {
  TextField,
  Autocomplete as MuiAutocomplete,
  Typography,
} from '@mui/material';
import { Game } from '../store';

const Autocomplete = () => {
  const [value, setValue] = useState<Game | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Game[]>([]);
  return (
    <MuiAutocomplete
      disablePortal
      sx={{ width: 300 }}
      options={options}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.name
      }
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      value={value}
      noOptionsText={<Typography>No results found</Typography>}
      onChange={(event, newValue: Game | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" placeholder="Favorites" />
      )}
    />
  );
};

export default Autocomplete;
