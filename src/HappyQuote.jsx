import React, { useState} from "react";
import './quotestyle.css'
import { useNavigate } from 'react-router-dom'

const quotes = [
  "I see your face, I see my future. - The Notebook (2004)",
"Just keep swimming. - Finding Nemo (2003)",
"You had me at 'hello'. - Jerry Maguire (1996)",
"I'm gonna make him an offer he can't refuse. - The Godfather (1972)",
"Here's looking at you, kid. - Casablanca (1942)",
"We're not in Kansas anymore. - The Wizard of Oz (1939)",
"I'll get you, my pretty, and your little dog too! - The Wizard of Oz (1939)",
"I am your father. - Star Wars: Episode V - The Empire Strikes Back (1980)",
"Do or do not. There is no try. - Star Wars: Episode V - The Empire Strikes Back (1980)",
"Use the Force, Luke. - Star Wars: Episode IV - A New Hope (1977)",
"May the odds be ever in your favor. - The Hunger Games (2012)",
"It's a trap! - Star Wars: Episode VI - Return of the Jedi (1983)",
"I see dead people. - The Sixth Sense (1999)",
"They're heeeeere. - Poltergeist (1982)",
"I am serious... and don't call me Shirley. - Airplane! (1980)",
"My mother has a heart of gold, and a mouth of platinum. - The Princess Bride (1987)",
"Inconceivable! - The Princess Bride (1987)",
"You keep using that word. I do not think it means what you think it means. - The Princess Bride (1987)",
"As you wish. - The Princess Bride (1987)",
"Mawwiage. Mawwiage is wot bwings us togethow today. - The Princess Bride (1987)",
"Love is a many-splendored thing. It's the greatest feeling in the world, but it can also be the most painful. - The Bridges of Madison County (1995)",
"You make me want to be a better man. - As Good as It Gets (1997)",
"I love you without knowing how, or when, or from where. I love you simply because you are. - The Notebook (2004)",
"It doesn't matter if we're apart. We'll always be together in our hearts. - The Notebook (2004)",
"The best love is the kind that awakens the soul and makes us reach for more than we ever thought possible. - The Notebook (2004)",
"If you're a bird, I'm a bird. - The Notebook (2004)",
"You are my greatest adventure. You are my greatest love. - The Notebook (2004)",
  
];

const HappyQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const navigate=useNavigate();

  const refreshQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
  
    <div class="quote">

      <p>{currentQuote}</p>
      <button onClick={refreshQuote} >Refresh Quote</button>
      <button onClick={()=>navigate("/")} >Home</button>
    </div>
  );
};

export default HappyQuote;