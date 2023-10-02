import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Autocomplete as MuiAutocomplete } from '@mui/material';
import { useGetSearchOptionsQuery, Game } from '../store';

const Autocomplete = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<Game | null>(null);
  const { data, error, isFetching } = useGetSearchOptionsQuery(inputValue);
  const options: Game[] = data || [];
  console.log(data, error, isFetching);

  const handleInputChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
  };

  const handleValueChange = (
    event: React.ChangeEvent<{}>,
    newValue: Game | null
  ) => {
    setValue(newValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value) {
      navigate(`/search/${value.slug}`);
      setInputValue('');
      setValue(null);
      return;
    }
    if (inputValue) {
      navigate(`/search/${inputValue}`);
      setInputValue('');
      setValue(null);
      return;
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <MuiAutocomplete
        disablePortal
        sx={{ width: 300 }}
        options={options}
        loading={isFetching}
        value={null}
        onChange={handleValueChange}
        onInputChange={handleInputChange}
        getOptionLabel={(option: Game) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" fullWidth />
        )}
      />
    </form>
  );
};

export default Autocomplete;
