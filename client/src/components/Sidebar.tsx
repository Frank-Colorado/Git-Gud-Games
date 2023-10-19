import { Grid, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const list = [
  {
    header: 'Home',
    items: ['Popular'],
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
          marginTop: '5.5rem',
        }}
      >
        {list.map((item) => {
          return (
            <List key={item.header}>
              <Typography variant="h2" color="secondary">
                {item.header}
              </Typography>
              {item.items.map((subItem) => {
                return (
                  <ListItem key={subItem}>
                    <Typography
                      component={Link}
                      to={`/games/${subItem.toLowerCase()}`}
                      variant="h4"
                      color="primary"
                      sx={{
                        mt: 1,
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#ea526f',
                        },
                      }}
                    >
                      {subItem}
                    </Typography>
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
