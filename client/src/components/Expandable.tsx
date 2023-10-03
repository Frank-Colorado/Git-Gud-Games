import { useState } from 'react';
import { Typography } from '@mui/material';

interface ExpandableProps {
  children: string;
}

const Expandable = ({ children }: ExpandableProps) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= 195) {
    return (
      <Typography variant="body1" sx={{ color: 'white ' }}>
        {children}
      </Typography>
    );
  }

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography variant="body1" sx={{ color: 'white' }}>
        {expanded ? children : children.slice(0, 195) + '...'}
        <Typography
          component={'span'}
          onClick={handleClick}
          sx={{
            color: 'red',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {expanded ? '  Less' : '  More'}
        </Typography>
      </Typography>
    </>
  );
};

export default Expandable;
