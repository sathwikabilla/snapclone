import './Chat.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import StopIcon from '@mui/icons-material/Stop';
import ReactTimeago from 'react-timeago';
import { selectImage } from './features/appSlice';
import {useDispatch} from 'react-redux';
import{db} from './firebase';
import {useNavigate} from 'react-router-dom';

function Chat({id,profilepic, username,timestamp, imageurl, read}) {
 const dispatch=useDispatch();
 const navigate=useNavigate();
    const open=()=>{
    if(!read){
        dispatch(selectImage(imageurl));
        db.collection('posts').doc(id).set(
        {
            read:true,
        },  {
            merge:true
        } );
        navigate('/chats/view');
    }
 };
    return (
    <div className='chat' onClick={open}>
         <Avatar className='chat_avatar' src={profilepic} />
         <div className='chat_info'>
            <h4>{username}</h4>
            <p>{!read && 'Tap to view -'}{""}<ReactTimeago date= {new Date(timestamp?.toDate()).toUTCString()} />
            </p>

        </div>
        {
            !read && <StopIcon  className='chat_readIcon'/>
        }
     
     </div>
  );
}

export default Chat