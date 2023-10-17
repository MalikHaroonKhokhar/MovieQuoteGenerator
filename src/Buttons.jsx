import React from 'react'
import './buttonstyle.css'
import {DiGithubBadge} from 'react-icons/di'
import {BsTwitter} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
  const navigate=useNavigate();
  return (
    <>
    <div class="mood-lifter">
      <h1>Quotes From Movies</h1>
    <h2>Select Your Mood</h2>
    </div>
    <div class="buttons">
      
    <div><button type="button" class="btn btn-outline-warning" onClick={()=>navigate("happyquote")}>Happy😊</button></div>
    <div><button type="button" class="btn btn-outline-danger" onClick={()=>navigate("angryquote")}>Angry😡</button></div>
    <div><button type="button" class="btn btn-outline-primary" onClick={()=>navigate("sadquote")}>Sad😢</button></div>
    <div><button type="button" class="btn btn-outline-secondary" onClick={()=>navigate("motivatequote")}>Motivate🎯</button></div>
  </div>
  <div class="icons">
    <span onClick={()=>window.location.href="https://github.com/MalikHaroonKhokhar/MovieQuoteGenerator"}><DiGithubBadge/></span>
    <span onClick={()=>window.location.href="https://x.com/orangesareblack?t=_PaaXd9hziCKS3r0ve5tTw&s=09"}><BsTwitter/></span>
  </div>
  </>
  )
}

export default Buttons
