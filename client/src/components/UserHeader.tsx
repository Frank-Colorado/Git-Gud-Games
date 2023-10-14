import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '../hooks';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Typography
          component={Link}
          to="/profile/edit"
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
          Edit Profile
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          height: '20rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginLeft: 3,
          }}
        >
          <img
            src={
              user.avatar
                ? user.avatar
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAF/1JREFUeF7tnWWsJEUXhmtxAsEhSIIF9+DuwX/gLkGDBwnu7u4enOCEAAvBF2dxlwR3d2e/vBV6vt7anpaZO3f3zHnqF+zt7jn1vKffkq6uHjJ8+PARgQIBCEDAAIEhGJYBlQgRAhCIBDAsEgECEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGBY5AAEImCGAYZmRikAhAAEMixyAAATMEMCwzEhFoBCAAIZFDkAAAmYIYFhmpCJQCEAAwyIHIAABMwQwLDNSESgEIIBhkQMQgIAZAhiWGakIFAIQwLDIAQhAwAwBDMuMVAQKAQhgWOQABCBghgCGZUYqAoUABDAscgACEDBDAMMyIxWBQgACGFaSA3///Xd49dVXw/333x9eeOGF8NZbb8Uj5p9//jDvvPOG1VZbLcw333xhrLHGapw933//fXjwwQfDsGHDwssvvxx++OGHMOmkk4YFFlggrL766mHZZZcNE088cePr/vnnnzHWoUOHxut+8MEHrZh1zTXXXDNMN910YciQIY2vbeGEn3/+OTz++OPh4Ycfjtp99tlnkes888wTFl100ch22mmn7agqn3/+ebj33nvD008/HV577bXwyy+/RJbKgXXWWScsssgiYYIJJmh87V7lQuNAjJ2AYeUEkzldeOGF0VDKynLLLRd23nnnMOecc9aS+99//w0PPfRQOP/881tmUnTiTDPNFHbdddew0kor1TbE999/P5x11lmlMU800URhk002Cdtss03Qf/dLUePywAMPhIsvvriUq+q84YYbhq233joaWZ2iRuD2228PF110UWxY2hU1Yvvss09sdOo0CL3MhTr1sn4MhvWfgs8//3w47rjjShM/L7Za2SOPPDK2sGVFN9Vdd90VTj/99Ng6VxXdXLoB1l577TDOOOOUHv7GG2+Ek046KfYq6pT11lsv7L777rVv2jrXHF3HiOt1110XLrvsslpcFecKK6wQDj744DDllFOWhv3777+Hq666KhphnaJcOPDAA8PSSy9dalq9zIU6cfbDMRhWCOHDDz8Mhx9+eOvGVyus3oiGUkputZzffPNNuPvuu8OVV17ZanE1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'
            }
            alt="logo"
          />
        </Box>
        <Box
          sx={{
            margin: '5rem',
            height: '95%',
            width: '50%',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white' }}>
            {user.username}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: '2rem', color: 'white' }}
          >
            {user.bio ? user.bio : "This user doesn't have a bio yet!"}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserHeader;
