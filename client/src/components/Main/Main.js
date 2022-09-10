
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Favourite from '../Favourite/Favourite';
import HeaaderModel from '../HeaaderModel/HeaaderModel';
import FavouriteSecondStr from '../Favourite-second-str/FavouriteSecondStr';

export default function Main() {
  return (
    <>
      <HeaaderModel />
      <AboutUs />
      <Favourite />
      <FavouriteSecondStr />
    </>
  );
}
