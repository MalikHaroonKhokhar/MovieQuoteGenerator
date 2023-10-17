import React, { useState} from "react";
import './quotestyle.css'
import { useNavigate } from 'react-router-dom'

const quotes = [
    "I'm gonna make him an offer he can't refuse. - The Godfather (1972)",
    "You're gonna need a bigger boat. - Jaws (1975)",
    "I'll have what she's having. - When Harry Met Sally (1989)",
    "You can't handle the truth! - A Few Good Men (1992)",
    "You talking to me? - Taxi Driver (1976)",
    "I'm as mad as hell, and I'm not going to take this anymore! - Network (1976)",
    "I'm not bad. I'm just drawn that way. - Who Framed Roger Rabbit (1988)",
    "You're a man, baby! - The Big Lebowski (1998)",
    "Say 'what' again. Say 'what' again, I dare you! - Scarface (1983)",
    "You're dead, kid. - The Matrix (1999)",
    "Give me the keys, give me the keys, give me the keys! - National Lampoon's Animal House (1978)",
    "I'm not gonna be ignored, Dan. - The Big Lebowski (1998)",
    "You're not wearing that to my party, are you? - Clueless (1995)",
    "Don't call me stupid! - Dumb and Dumber (1994)",
    "You're killin' me, Smalls! - The Sandlot (1993)",
    "I don't want to be a vampire. - Interview with the Vampire (1994)",
    "You're a vampire, David. - The Lost Boys (1987)",
    "I'm a werewolf, not a vampire. - An American Werewolf in London (1981)",
    "I'm not a juvenile delinquent, I'm a patriot. - Rebel Without a Cause (1955)",
    "You're tearing me apart, Lisa! - The Breakfast Club (1985)",
    "What a bunch of morons. - The Wild Life (1984)",
    "I can't believe you're still alive. - The Princess Bride (1987)",
    "You've got to be kidding. - Aliens (1986)",
    "Game over, man. Game over! - Aliens (1986)",
    "Get away from her, you bitch! - Aliens (1986)",
    "I'll never join you! - Star Wars: Episode III - Revenge of the Sith (2005)",
    "You're a traitor! - Star Wars: Episode IV - A New Hope (1977)",
    "I am your father. - Star Wars: Episode V - The Empire Strikes Back (1980)",
    "Do or do not. There is no try. - Star Wars: Episode V - The Empire Strikes Back (1980)"
  
];

const AngryQuote = () => {
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

export default AngryQuote;