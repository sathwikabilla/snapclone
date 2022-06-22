import './View.css';
import React,{useEffect} from 'react';
import { selectSelectedImage } from './features/appSlice';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {CountdownCircleTimer}  from 'react-countdown-circle-timer'

function View() {
    const navigate =useNavigate();
    const exit=()=>{
        navigate('/chats');
    };
    const selectedimage=useSelector(selectSelectedImage)
  useEffect(()=>{
    if(!selectedimage)
    {
        exit();
    }
  },[selectedimage])
    return (
    <div className='view'>
    <img src={selectedimage} onClick={exit} alt=''/>
  <div className='view_timer'  >
    <CountdownCircleTimer isPlaying duration={10} strokeWidth={6} size={50}
    colors={[
        ["#004777",0.33],
        ["#F7B801",0.33],
        ["#A30000",0.33],]} >

        {({remainingTime})=>{
            if(remainingTime===0)
            {
                exit();
            }
            return remainingTime;
        }}
        </CountdownCircleTimer>
        </div>
    </div>
  )
}

export default View
