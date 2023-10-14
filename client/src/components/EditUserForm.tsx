import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';
import { setUser } from '../store';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const EditUserForm = () => {
  const [image, setImage] = useState('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files as FileList;
    if (file) {
      console.log(file);
    }
  };

  return (
    <Grid item md={7} sx={{ bgcolor: 'black' }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Typography
          component={Link}
          to="/profile"
          variant="button"
          sx={{
            m: 2,
            color: 'red',
            cursor: 'pointer',
            borderBottom: '1px solid white',
            textDecoration: 'none',
            '&:hover': {
              color: 'yellow',
            },
          }}
        >
          Back To Profile
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          height: '20rem',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'yellow',
        }}
      >
        <Box
          sx={{
            marginLeft: 10,
          }}
        >
          <Avatar
            variant="square"
            sx={{ width: 300, height: 300 }}
            src={image}
          />
        </Box>
        <Box>
          <Button component="label" variant="contained" sx={{ mt: 2 }}>
            Upload Avatar Image
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              multiple={false}
              onChange={handleImageUpload}
            />
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default EditUserForm;

// const file = e.target.files![0];
// console.log(file);
// const reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onloadend = () => {
//   console.log(reader.result);
//   setImage(reader.result as string);
// };
