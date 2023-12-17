import { atom } from 'recoil';

export const favoriteFlightsState = atom({
  key: 'favoriteFlights',
  default: [],
});
