import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';




const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />}/>
            <Route path="/dialogs/" element={<DialogsContainer />}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/users" element={<UsersContainer/>}/>
            <Route path="/settings" element={<Settings/>}/>  
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
