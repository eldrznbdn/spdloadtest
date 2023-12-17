import React, { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../../../GraphQL/Quaries';
import Card from '../../molecules/Card';
import CarouselStyled from './Carousel.styled';

interface Rocket {
  id: number;
  name: string;
  description: string;
}

const imagePaths = [
  '/frames/frameOne.svg',
  '/frames/frameTwo.svg',
  '/frames/frameThree.svg',
];

const Carousel: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 9;
  const [newArrayWithImageSrc, setNewArrayWithImageSrc] = useState<Rocket[]>([]);
  const [activeCircle, setActiveCircle] = useState(0);

  useEffect(() => {
    if (!loading && !error && data) {
      const reducedData = data.rockets.slice(0, 3);

      const newArray = Array.from({ length: 3 }, () => reducedData).flat();

      const newArrayWithImageSrc = newArray.map((item, index) => ({
        ...item,
        imageSrc: imagePaths[index % imagePaths.length],
      }));

      setNewArrayWithImageSrc(newArrayWithImageSrc);
    }
  }, [data]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 3) % totalItems);
    setActiveCircle((activeCircle + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 3 + totalItems) % totalItems);
    setActiveCircle((activeCircle - 1 + 3) % 3);
  };

  const updateCarousel = (): React.CSSProperties => ({
    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
    transition: 'transform 1s ease-in-out',
  });

  const handleCircleClick = (index: number) => {
    setCurrentIndex(index * 3);
    setActiveCircle(index);
  };

  return (
    <CarouselStyled>
      <div className="section container">
        <div className="tours__section-heading">
          <h1 className="tours__heading">Popular Tours</h1>
          <div className="tours__buttons">
            <ArrowBackIosNewIcon className="back-btn" onClick={prevSlide} />
            <ArrowForwardIosIcon className="forward-btn" onClick={nextSlide} />
          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel-track" style={updateCarousel()}>
            {newArrayWithImageSrc.map((rocket, index) => (
              <Card
                className="carousel-item"
                key={index}
                imageSrc={rocket.imageSrc}
                id={rocket.id}
                name={rocket.name}
                description={rocket.description}
              />
            ))}
          </div>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`carousel-circle ${index === activeCircle ? 'active' : ''}`}
              onClick={() => handleCircleClick(index)}
            >
              {index === activeCircle && (
                <div className="carousel-filled"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
