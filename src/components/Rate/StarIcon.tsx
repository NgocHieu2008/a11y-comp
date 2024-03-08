import React from 'react';

interface StarIconProps {
  filled: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ filled }) => {
  const starStyles = {
    color: filled ? 'yellow' : 'gray',
    fontSize: '2rem',
  };

  return (
    <i className={`fa fa-star ${filled ? 'fa-solid' : 'fa-regular'}`} style={starStyles}></i>
  );
};

export default StarIcon;