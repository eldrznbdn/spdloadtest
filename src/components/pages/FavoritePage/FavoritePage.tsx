import React, { useEffect } from 'react';
import FavoritePageStyled from './FavoritePage.styled';
import { useRecoilState } from 'recoil';
import { favoriteFlightsState } from '../../../utils/recoilAtoms';
import Card from '../../molecules/Card';

interface Flight {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
}

const FavoritePage: React.FC = () => {
  const [favoriteFlights, setFavoriteFlights] = useRecoilState<Flight[]>(favoriteFlightsState);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteFlights(storedFavorites);
  }, [setFavoriteFlights]);

  const handleCleanAll = () => {
    localStorage.removeItem('favorites');
    setFavoriteFlights([]);
  };

  const onDeleteFromFavorite = (id: number) => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const indexToRemove = existingFavorites.findIndex((item: Flight) => item.id === id);

    if (indexToRemove !== -1) {
      existingFavorites.splice(indexToRemove, 1);

      localStorage.setItem('favorites', JSON.stringify(existingFavorites));
      setFavoriteFlights(existingFavorites);
    }
  };

  return (
    <FavoritePageStyled>
      <section className='hero__section'>
        <h1 className='favorites__heading'>FAVOURITES</h1>
      </section>
      <section className='favourites__cards '>
        <div className='container'>
          <div className='favorites__tours'>
            <button className='clear__button' onClick={handleCleanAll}>
              Clear all
            </button>
          </div>
          <div className='favorite__container'>
            {favoriteFlights.map((flight: Flight) => (
              <Card
                key={flight.id}
                imageSrc={flight.imageSrc}
                id={flight.id}
                name={flight.name}
                description={flight.description}
                isFavoritePage={true}
                onDeleteFromFavorite={onDeleteFromFavorite}
              />
            ))}
          </div>
        </div>
      </section>
    </FavoritePageStyled>
  );
};

export default FavoritePage;
