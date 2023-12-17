import React, { FC } from 'react';
import FavoriteButton from '../atoms/FavoriteButton';
import Button from '../atoms/Button.styled';
import CardStyled from './Card.styled';
import DeleteButton from '../atoms/DeleteButton';

interface CardProps {
  imageSrc: string;
  id: number;
  name: string;
  description: string;
  isFavoritePage: boolean;
  onDeleteFromFavorite: (id: number) => void;
}

const truncateDescription = (description: string, maxLength: number): string => {
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.slice(0, maxLength)}...`;
};

const Card: FC<CardProps> = ({ imageSrc, id, name, description, isFavoritePage, onDeleteFromFavorite }) => {
  const truncatedDescription = truncateDescription(description, 100);

  const onAddToFavorite = (id: number, name: string, description: string, imageSrc: string) => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];


      const newFavorite = { id, name, description, imageSrc };
      existingFavorites.push(newFavorite);

      localStorage.setItem('favorites', JSON.stringify(existingFavorites));

      console.log('Item added to favorites:', newFavorite);
   
  };

  return (
    <CardStyled className="card-with-transition">
      <img className='card__image' src={imageSrc} alt='pic' />
      <h1>{name}</h1>
      <p>{truncatedDescription}</p>
      <div className='card__buttons'>
        <Button className='card-btn' width='278px'>
          Buy
        </Button>
        {isFavoritePage ? (
          <DeleteButton onClick={() => onDeleteFromFavorite(id)} />
        ) : (
          <FavoriteButton
            className='add_to_favorite-btn'
            backgroundColor='ECECEC'
            onClick={() => onAddToFavorite(id, name, description, imageSrc)}
          />
        )}
      </div>
    </CardStyled>
  );
};

export default Card;
