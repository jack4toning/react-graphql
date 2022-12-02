import React from 'react';
import { useCharacter } from '../hooks/useCharacter';

export const Character = () => {
  const { error, loading, data } = useCharacter();

  if (loading) return <h1 className='xyCenter'>spinner...</h1>;
  if (error)
    return (
      <h1 className='xyCenter'>
        something went wrong... <br />
        {error.message}
      </h1>
    );

  const { name, status, species, gender, origin, location, image } =
    data.character;
  const { name: originName } = origin;
  const { name: locationName } = location;

  return (
    <div className='xyCenter'>
      <img src={image} alt={'character appearance'} />
      <div style={{ marginLeft: '18px' }}>
        <h2>name: {name}</h2>
        <p>status: {status}</p>
        <p>species: {species}</p>
        <p>gender: {gender}</p>
        <p>origin: {originName}</p>
        <p>location: {locationName}</p>
      </div>
    </div>
  );
};
