import React,{useRef,useState,useCallback} from 'react';
import './WebcamCapture.css'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {useDispatch} from 'react-redux';
import { setCameraimage } from './features/cameraSlice';
import {useNavigate} from 'react-router-dom';

const videoConstrains={
    width:350,
    height:500,
    facingMode:"user",
}


function WebcamCapture() {
const dispatch=useDispatch();
const navigate=useNavigate();
    const webcamRef=useRef(null);
    
    const capture=useCallback(()=>{
        const imagescreenshot=webcamRef.current.getScreenshot();
        dispatch(setCameraimage(imagescreenshot))
        navigate("/Preview");

       
    },[webcamRef]);
  return (
    <div className='webcamCapture'>
      <Webcam audio={false} height={videoConstrains.height} ref={webcamRef}  screenshotFormat="image/jpeg"  width={videoConstrains.width}  videoConstraints={videoConstrains}/>"

      <RadioButtonUncheckedIcon  className="webcam_capture_button" onClick={capture} fontSize="large"/>
   
    </div>
  )
}

export default WebcamCapture