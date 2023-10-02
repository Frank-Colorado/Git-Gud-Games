import { Grid, Card, CardContent, Skeleton } from '@mui/material';

const SkeletonCard = () => {
  return (
    <Grid item xs={3}>
      <Card
        sx={{
          height: '22rem',
          width: '22rem',
          bgcolor: '#3e3e3e',
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{ height: 200, bgcolor: 'grey.600' }}
        />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Skeleton
            height={45}
            width="80%"
            style={{ marginBottom: 6 }}
            sx={{ bgcolor: 'grey.600' }}
          />
          <Skeleton height={20} width="65%" sx={{ bgcolor: 'grey.600' }} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkeletonCard;
