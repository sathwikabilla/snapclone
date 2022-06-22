import React,{useEffect} from 'react';
import { resetCameraimage, selectCameraImage } from './features/cameraSlice';
import './Preview.css';
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import {v4 as uuid} from "uuid";
import {storage, db} from './firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from './features/appSlice';


function Preview() {
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cameraImage=useSelector(selectCameraImage);
    const user=useSelector(selectUser);

    useEffect(() => {
      if (!cameraImage)
       {
           navigate('/')
       }
   }, [cameraImage,navigate]);
   
   const colsepreview=()=>{
     dispatch(resetCameraimage());
   }

   const sendpost=()=>{
    const id=uuid();
    const uploadtask=storage
       .ref(`posts/${id}`)
       .putString(cameraImage,'data_url')
       uploadtask.on('state_changed',null,(error)=>{console.log(error);},
     ()=>{
      storage
      .ref('posts')
      .child(id)
      .getDownloadURL()
      .then((url)=>{
        db.collection('posts').add({
          imageurl:url,
          username:user.username,
          read:false,
          profilepic:user.profilePic,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),  
        });
        navigate('/chats');     
     });
    }
     );
   };


  return (
    <div className='preview'>
      <CloseIcon  onClick={colsepreview} className='preview_close' />
     <div className='preview_toolbarRight'>
        <TextFieldsIcon />
        <CreateIcon/>
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon/>
        <TimerIcon />
     </div>
      <img src={cameraImage} alt=''/>
      <div onClick={sendpost} className='preview_footer'>
         <h2>Send Now</h2>
         <SendIcon fontSize="small" className="preview_sendIcon"/>
      </div>

    </div>
  )
}

export default Preview