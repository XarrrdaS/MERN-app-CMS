import React, { useState, useEffect } from 'react';
import './style.css';

function MainPage() {
  const [contentData, setContentData] = useState({ content1: '', content2: '', content3: '', content4: '' });

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setContentData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container'>
      <h1 className='Header1 rendered-content'>{contentData.content1}</h1>
      <div>
        <p className='rendered-content'>{contentData.content2}</p>
      </div>
      <div>
        <h2 className='rendered-content'>{contentData.content3}</h2>
      </div>
      <div>
        <p className='rendered-content'>{contentData.content4}</p>
      </div>
    </div>
  );
}

export default MainPage;
