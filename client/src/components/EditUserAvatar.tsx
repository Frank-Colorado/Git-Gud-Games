import { useAppDispatch, useAppSelector } from '../hooks';
import { Box, Button, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { setAvatar } from '../store';

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

const encodeFileBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 300;
        ctx?.drawImage(img, 0, 0, 300, 300);

        const resizedBase64 = canvas.toDataURL('image/jpeg');

        resolve(resizedBase64);
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = (error) => reject(error);
  });
};

const EditUserAvatar = () => {
  const dispatch = useAppDispatch();
  const { avatar } = useAppSelector((state) => state.editUser);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files as FileList;
    if (file) {
      const base64 = await encodeFileBase64(file);
      if (typeof base64 === 'string') {
        dispatch(setAvatar(base64));
      }
    }
  };

  return (
    <Box
      sx={{
        height: '20rem',
        ml: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Avatar
          variant="square"
          sx={{ width: 300, height: 300, border: '2px solid #ffffff' }}
          src={avatar ? avatar : ''}
        />
      </Box>
      <Box>
        <Button
          component="label"
          variant="contained"
          sx={{ mr: 18, fontWeight: 'bold' }}
        >
          Upload Avatar Image
          <VisuallyHiddenInput
            type="file"
            accept=".jpeg, .png, .jpg"
            multiple={false}
            onChange={handleImageUpload}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default EditUserAvatar;
