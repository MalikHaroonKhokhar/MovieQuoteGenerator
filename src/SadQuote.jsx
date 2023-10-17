import React, { useState} from "react";
import './quotestyle.css'
import { useNavigate } from 'react-router-dom'

const quotes = [
    "I see your face, I see my future. But I don't see a future with you. - The Notebook (2004)",
    "I'm gonna make him an offer he can't refuse... to leave me alone. - The Godfather (1972)",
    "You had me at 'hello', but now you're just a memory. - Jerry Maguire (1996)",
    "We're not in Kansas anymore, we're in hell. - The Wizard of Oz (1939)",
    "I'll get you, my pretty, and your little dog too! But first, I'll destroy your home and everyone you love.- The Wicked Witch of the West, The Wizard of Oz (1939)",
    "I am your father, and I've come to tell you that I'm sorry. Sorry for everything. - Star Wars: Episode V - The Empire Strikes Back (1980)",
    "Do or do not. There is no try. But mostly, there's just nothing left to do. - Star Wars: Episode V - The Empire Strikes Back (1980)",
    "Use the Force, Luke. But it won't help you now. - Star Wars: Episode IV - A New Hope (1977)",
    "May the odds be ever in your favor. But they probably won't be.- The Hunger Games (2012)",
    "It's a trap! And there's no way out. - Star Wars: Episode VI - Return of the Jedi (1983)",
    "I see dead people. They're all around us, and they're all gone. - The Sixth Sense (1999)",
    "They're heeeeere... but they're not coming back. - Poltergeist (1982)",
    "I am serious... and so is my gun. - Airplane! (1980)",
    "My mother has a heart of gold, but it's been broken into a million pieces. - The Princess Bride (1987)",
    "Inconceivable! That's what my love for you is. - The Princess Bride (1987)",
    "You keep using that word. I do not think it means what you think it means. It means you're lost forever. - The Princess Bride (1987)",
    "As you wish. But my wishes never come true. - The Princess Bride (1987)",
    "Mawwiage. Mawwiage is wot bwings us togethow today. But it's all just a lie. - The Princess Bride (1987)",
  
];

const SadQuote = () => {
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

export default SadQuote;