import React, { useEffect, useState } from 'react';
import HomePageStyled from './HomePage.styled';
import SouthIcon from '@mui/icons-material/South';
import Carousel from '../../organisms/Carousel/Carousel';
import { Link } from 'react-scroll';

const imagePaths = [
  '/frames/frameOne.svg',
  '/frames/frameTwo.svg',
  '/frames/frameThree.svg',
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCircleClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <HomePageStyled backgroundImage={imagePaths[currentImageIndex]}>
      <div className='home__container'>
        <section className='hero__section'>
          <h1 className='hero__heading'>The Space is waiting for</h1>
          <span className='span__text'>YOU</span>
          <Link to='tours' smooth={true} duration={500}>
            Explore tours <SouthIcon className='arrow__down-btn' />
          </Link>

          <div className='image-circles'>
            {imagePaths.map((path, index) => (
              <div
                key={index}
                className='circle'
                onClick={() => handleCircleClick(index)}
              >
                {index === currentImageIndex && <div className='filled'></div>}
              </div>
            ))}
          </div>
        </section>
        <section id='tours'>
          <Carousel />
        </section>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
