import { Grid, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const list = [
  {
    header: 'Home',
    items: [
      {
        name: 'Popular',
        path: '/',
      },
    ],
  },
  {
    header: 'Genres',
    items: [
      {
        name: 'Action',
        path: '/games/action',
      },
      {
        name: 'Strategy',
        path: '/games/strategy',
      },
      {
        name: 'Indie',
        path: '/games/indie',
      },
      {
        name: 'Shooter',
        path: '/games/shooter',
      },
      {
        name: 'Adventure',
        path: '/games/adventure',
      },
      {
        name: 'Puzzle',
        path: '/games/puzzle',
      },
      {
        name: 'Racing',
        path: '/games/racing',
      },
      {
        name: 'Sports',
        path: '/games/sports',
      },
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
                  <ListItem key={subItem.name}>
                    <Typography
                      component={Link}
                      to={`${subItem.path}`}
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
                      {subItem.name}
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
