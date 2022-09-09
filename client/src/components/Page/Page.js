import React from 'react';
import OneCard from '../OneCard/OneCard';
import './Page.css';

export default function Page() {
  return (
    <div className="container">
      <main className="content">
        <h1 className="content-text">Models</h1>
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
