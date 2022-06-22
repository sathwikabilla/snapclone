import "./Chats.css";
import React,{useEffect,useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import {auth, db} from './firebase';
import Chat from './Chat';
import { selectUser } from "./features/appSlice";
import {useSelector,useDispatch} from 'react-redux';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {useNavigate} from 'react-router-dom';
import { resetCameraimage } from "./features/cameraSlice";

function Chats() {
    const [posts,setPosts]=useState([]);
    const user=useSelector(selectUser);
const dispatch=useDispatch();
const navigate=useNavigate();
    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>
          setPosts(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),
        })))
        );
    },[]);
const takepic=()=>{
    dispatch(resetCameraimage());
    navigate('/');
};
  return (
    <div  className='chats'>
      <div className="chats_header">
         <Avatar  src={user.profilepic} onClick={()=>{
            auth.signOut()
         }} className='chats_avatar' />
         <div className="chats_search">
            <SearchIcon  className='chats_serachIcon'/>
            <input placeholder="Friends" type='text' />
         </div>
         <ChatBubbleIcon className="chats_chaticon"/>
      </div>
      <div className="chat_posts">
      {posts.map(({id,data:{profilepic, username,timestamp, imageurl, read}})=>(
        <Chat key={id}
        id={id}
        profilepic={profilepic}
        username={username}
        timestamp={timestamp}
        imageurl={imageurl}
        read={read} />

      ))}


      </div>
<RadioButtonUncheckedIcon  className='chats_takepicture' onClick={takepic} fontSize="large"/>
    </div>
  )
}

export default Chats