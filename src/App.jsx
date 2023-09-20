import React, { useState } from 'react';
import './App.css';
import ContentModify from './components/ContentModify';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bcrypt from 'bcryptjs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const hashedAdminPassword = '$2a$10$zRijfB6I0YyDQCK2V0biZ.Txriu7lV9tLmevU9paZRiU7.hDY0YhC';
  const hashedLogin = '$2a$10$FMU2D6hdSgLflR7987wURentzyZiZpLNyJcjlcwj53AH5D6G9kaBq'

  const handleLogin = () => {
    const isPasswordCorrect = bcrypt.compareSync(password, hashedAdminPassword);
    const isLoginCorrect = bcrypt.compareSync(login, hashedLogin);

    if (isLoginCorrect && isPasswordCorrect) {
      setIsLoggedIn(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <ContentModify isLoggedIn={isLoggedIn} />
            ) : (
              <LoginPage
                setLogin={setLogin}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
