import React,{useEffect} from 'react'
import './Login.css';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux';
import {provider ,auth } from './firebase';
import { login, logout } from './features/appSlice';


function Login() {
    const dispatch=useDispatch();
    const signin=()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
             }));
        }).catch((error)=>alert(error.message));
         
    };
    useEffect(()=>{
        auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                dispatch(login({
                    username:authUser.displayName,
                    profilePic: authUser.photoURL,
                    id: authUser.uid,
                 }))           
            }else{
                dispatch(logout())
             }
        })
    },[])
  return (
    <div className='login'>
      <div className='login_container'>
        <img src='	https://cdn.xxl.thumbs.canstockphoto.com/camera-em…oticon-taking-a-photo-illustration_csp6475852.jpg' alt=''/>
        <Button className='loginbutton' onClick={signin} variant="outline">
        Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login;