import { Grid, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const list = [
  {
    header: 'Home',
    items: ['Popular', 'Favorites', 'New Releases'],
  },
  {
    header: 'Genres',
    items: [
      'Action',
      'Strategy',
      'Indie',
      'Shooter',
      'Adventure',
      'Puzzle',
      'Racing',
      'Sports',
    ],
  },
];

const Sidebar = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'orange',
          marginTop: '8rem',
        }}
      >
        {list.map((item) => {
          return (
            <List key={item.header}>
              <Typography variant="h5">{item.header}</Typography>
              {item.items.map((subItem) => {
                return (
                  <ListItem key={subItem}>
                    <Link to={`/games/${subItem.toLowerCase()}`}>
                      {subItem}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          );
        })}
      </div>
    </Grid>
  );
};

export default Sidebar;
