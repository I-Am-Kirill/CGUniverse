
import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Favourite from '../Favourite/Favourite'
import HeaaderModel from '../HeaaderModel/HeaaderModel'
import './Main.css'

export default function Main() {
  return (
    <div className="main">
    <HeaaderModel></HeaaderModel>
    <AboutUs></AboutUs>
    <Favourite></Favourite>
    </div>
  )
}
