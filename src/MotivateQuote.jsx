import React, { useState} from "react";
import './quotestyle.css'
import { useNavigate } from 'react-router-dom'

const quotes = [
    "Carpe diem. Seize the day, boys. Make your lives extraordinary. - Dead Poets Society (1989)",
    "My mama always said, 'Life was like a box of chocolates. You never know what you're gonna get.' - Forrest Gump (1994)",
    "There's no place like home. - The Wizard of Oz (1939)",
    "You can fly! You can fly! You can fly! - Peter Pan (1953)",
    "To infinity and beyond! - Toy Story (1995)",
    "Hakuna Matata. What a wonderful phrase! Hakuna Matata. Ain't no passing craze! - The Lion King (1994)",
    "When you wish upon a star, makes no difference who you are. Anything your heart desires will come to you. - Pinocchio (1940)",
    "You've got a friend in me. - Toy Story (1995)",
    "Ohana means family. Family means nobody gets left behind. Or forgotten.- Lilo & Stitch (2002)",
    "The only way to do great work is to love what you do. - Steve Jobs (2015)",
    "It's not whether you get knocked down, it's whether you get back up. - Rocky (1976)",
    "You miss 100% of the shots you don't take. - Wayne Gretzky (2019)",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller (1962)",
    "If you can dream it, you can do it. - Walt Disney (2006)",
    "There is no such thing as a free lunch.- Milton Friedman (1989)",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt (1960)",
    "Don't let your fears get the best of you.- Yoda (1980)",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke (1775)",
    "Be the change you wish to see in the world. - Mahatma Gandhi (1948)",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson (1841)",
    "The best way to predict the future is to create it. - Peter Drucker (1999)",
    "The only way to achieve the impossible is to believe it is possible. - Alice in Wonderland (1951)",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela (1994)",
    "If you can make it through New York, you can make it through anything. - Frank Sinatra (1980)",
    "The sky is the limit. - Dream Big (2014)",
    "You are the master of your own destiny. - The Secret (2006)",
    "Don't let anyone tell you you can't do something. - The Pursuit of Happyness (2006)",
    "The only way to do great work is to love what you do. - Steve Jobs (2015)",
    "Believe in yourself, and you can achieve anything. - The Karate Kid (1984)",
    "You can't change the past, but you can learn from it. - The Shawshank Redemption (1994)",
    "The future is yours to make. - The Matrix (1999)",
    "The journey of a thousand miles begins with a single step. - Lao Tzu (6th century BC)",
    "Don't be afraid to fail. It's the only way you'll learn. - Michael Jordan (1991)",
    "The only way to limit yourself is to set limits. - Oprah Winfrey (2008)",
  
];

const MotivateQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const navigate=useNavigate();

  const refreshQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
  
    <div class="quote">
  
      <p class="quote">{currentQuote}</p>
      <button onClick={refreshQuote} >Refresh Quote</button>
      <button onClick={()=>navigate("/")} >Home</button>
    </div>
  );
};

export default MotivateQuote;