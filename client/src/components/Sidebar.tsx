import { Grid, List, ListItem, Typography } from '@mui/material';

const list = [
  {
    header: 'Home',
    items: ['Popular', 'Favorites', 'New Releases'],
  },
  {
    header: 'Genres',
    items: [
      'Action',
      'Adventure',
      'RPG',
      'Shooter',
      'Sports',
      'Strategy',
      'Indie',
      'Puzzle',
    ],
  },
];

const Sidebar = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <div style={{ position: 'fixed', backgroundColor: 'orange' }}>
        {list.map((item) => {
          return (
            <List key={item.header}>
              <Typography variant="h5">{item.header}</Typography>
              {item.items.map((subItem) => {
                return <ListItem key={subItem}>{subItem}</ListItem>;
              })}
            </List>
          );
        })}
      </div>
    </Grid>
  );
};

export default Sidebar;
