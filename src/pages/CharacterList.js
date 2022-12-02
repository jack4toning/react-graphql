import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';

export const CharacterList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <h1 className='xyCenter'>spinner...</h1>;
  if (error)
    return (
      <h1 className='xyCenter'>
        something went wrong... <br />
        {error.message}
      </h1>
    );

  return (
    <div className='characterList'>
      {data.characters.results.map((character, index) => (
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          key={index}
          to={`/${character.id}`}>
          <img src={character.image} alt={'character appearance'} />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  );
};
