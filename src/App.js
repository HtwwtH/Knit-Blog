import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../src/font-awesome/css/font-awesome.min.css';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';


const App = () => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Route path='/main-page' component={MainPage} />

      <Route path='/profile' render={() => <Profile />} />

      <Route path='/messages' render={() => <MessagesContainer />} />

      <Route path='/news' component={News} />
      <Route path='/videos' component={Videos} />
      <Route path='/settings' component={Settings} />
    </div>

  );
}


export default App;
