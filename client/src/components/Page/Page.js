import React from 'react';
import OneCard from '../OneCard/OneCard';
import Filter from './Filter/Filter';
import './Page.css';

export default function Page() {
  return (
    <div className="container">
      <Filter />
      <main className="content">
        <div className="content-header">
          <h1 className="content-header-text">Models</h1>
        </div>
        <div className="modules-page">
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
        </div>
        {/* button`s place */}
      </main>
    </div>
  );
}
