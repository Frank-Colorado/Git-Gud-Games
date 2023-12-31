import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Autocomplete as MuiAutocomplete } from '@mui/material';
import { useGetSearchOptionsQuery, GameType } from '../store';

const Autocomplete = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<GameType | null>(null);
  const { data, isFetching } = useGetSearchOptionsQuery(inputValue);
  const options: GameType[] = data || [];

  const handleInputChange = (
    _event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
  };

  const handleValueChange = (
    _event: React.ChangeEvent<{}>,
    newValue: GameType | null
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
    <form onSubmit={handleSubmit} style={{ marginRight: '5rem' }}>
      <MuiAutocomplete
        disablePortal
        sx={{ width: 300 }}
        options={options}
        loading={isFetching}
        value={null}
        onChange={handleValueChange}
        onInputChange={handleInputChange}
        getOptionLabel={(option: GameType) => option.name}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </form>
  );
};

export default Autocomplete;
