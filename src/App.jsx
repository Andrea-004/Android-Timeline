import React from 'react';
import CustomizedTimeline from './timelineComponent';
import CardGrid from './card';
import './App.css';

function App() {
  return (
    <div style={{ padding: '10px' , backgroundColor: "#FFFDD0", overflowX: 'hidden'}}>
      <h1 style={{ 
              textAlign: 'center', 
              fontFamily: '"Fredoka One", sans-serif', 
              fontSize: '4rem', 
              fontWeight: 'bold', 
              color: '#4A9A7A',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '20px'
          }}>Android Versions
      </h1>
      <h2 style={{ 
              textAlign: 'center', 
              fontFamily: '"Fredoka One", sans-serif', 
              fontSize: '1rem', 
              fontWeight: 'light', 
              color: '#4A9A7A',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '20px'
          }}>
        By: Andrea Orellana, 00106123
      </h2>
      <CustomizedTimeline />
      <CardGrid />

      <img style={{
                position: 'absolute', 
                left: '-225px', 
                width: '32rem',
                top: '419%', 
                transform: 'translateY(-50%) rotate(15deg)'}} 
      src="./mascot.png" alt="" />
{/* 
      <img style={{
              position: 'absolute', 
              width: '70rem',
              left: '-30%', 
              top: '20%', 
              transform: 'translateY(-50%) rotate(150deg)'}} 
      src="./blob.svg" alt="" /> */}

      <img style={{
              position: 'absolute', 
              width: '70rem',
              right: '-25%',
              top: '0.1%', 
              transform: 'translateY(-50%) rotate(-65deg)'}} 
      src="./blob.svg" alt="" />

    <img style={{
            position: 'absolute', 
            width: '50rem',
            right: '-28%',
            top: '255%', 
            transform: 'translateY(-50%) rotate(-150deg)'}} 
      src="./blob2.svg" alt="" />

    <img style={{
            position: 'absolute', 
            width: '50rem',
            left: '-28%',
            top: '165%', 
            transform: 'translateY(-50%) rotate(-150deg)'}} 
      src="./blob2.svg" alt="" />
    </div>
  );
}

export default App;
