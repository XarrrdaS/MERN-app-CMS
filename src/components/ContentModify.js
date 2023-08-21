import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './style.css';

const ContentModify = ({ isLoggedIn }) => {
  const [contentData, setContentData] = useState({
    content1: '',
    content2: '',
    content3: '',
    content4: '',
  });
  const textareaRefs = useRef({});

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setContentData(data);
        setTextareaHeight();
      })
      .catch((error) => console.error('Błąd podczas pobierania danych:', error));
  }, []);

  const setTextareaHeight = () => {
    Object.values(textareaRefs.current).forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }

  const handleTextareaChange = (event, field) => {
    const newContentData = { ...contentData, [field]: event.target.value };
    setContentData(newContentData);
    setTextareaHeight();
  };

  const handleSaveButtonClick = () => {
    const updatedContentData = {
      content: {
        content1: contentData.content1,
        content2: contentData.content2,
        content3: contentData.content3,
        content4: contentData.content4,
      },
    };
    updateDatabase(updatedContentData);
  };

  const updateDatabase = (newContentData) => {
    fetch('/api/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dane zaktualizowane pomyślnie:', data);
      })
      .catch((error) => console.error('Błąd podczas aktualizacji danych:', error));
  };

  const handleLogoutClick = () => {
    window.location.href = "/";
  }

  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className='container3'>
      <div>
        <textarea
          ref={(ref) => (textareaRefs.current.content1 = ref)}
          value={contentData.content1}
          className='input'
          onChange={(e) => handleTextareaChange(e, 'content1')}
        ></textarea>
      </div>
      <div>
        <textarea
          ref={(ref) => (textareaRefs.current.content2 = ref)}
          value={contentData.content2}
          className='input'
          onChange={(e) => handleTextareaChange(e, 'content2')}      
        ></textarea>
      </div>
      <div>
        <textarea
          ref={(ref) => (textareaRefs.current.content3 = ref)}
          value={contentData.content3}
          className='input'
          onChange={(e) => handleTextareaChange(e, 'content3')}
        ></textarea>
      </div>
      <div>
        <textarea
          ref={(ref) => (textareaRefs.current.content4 = ref)}
          value={contentData.content4}
          className='input'
          onChange={(e) => handleTextareaChange(e, 'content4')}
        ></textarea>
      </div>
      <button onClick={handleSaveButtonClick} className='login-button'>Save changes</button>
      <button onClick={handleLogoutClick} className='logout-button'>Log out</button>
    </div>
  );
};

export default ContentModify;
