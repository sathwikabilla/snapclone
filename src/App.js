import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Preview from './Preview';
import Chats from './Chats';
import View from './View';
import { selectUser } from './features/appSlice';
import {useDispatch,useSelector} from 'react-redux';
import Login from './Login';

function App() {
  const user =useSelector(selectUser);
  const dispatch= useDispatch();
  return (
    
      <BrowserRouter>
      {!user?(<Login />):(
      <div className="app">
      <img className='image_conatiner' src='https://i.pinimg.com/originals/9f/ed/42/9fed420eac66e6e9e589ae44c5486c3b.jpg' alt=''/>
      <div className='app_body' >
       <Routes>
        <Route path='/chats/view' element={<View/>} /> 
        <Route path='/chats' element={<Chats/>} /> 
        <Route path='/Preview' element={<Preview/>} />      
        <Route path='/' element={ <WebcamCapture />}/>       
      </Routes>
     </div>
     </div>

      )}
        
      </BrowserRouter>

  );
}

export default App;
