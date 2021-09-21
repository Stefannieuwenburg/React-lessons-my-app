import React from 'react';
import Joke from './Joke'; 
//import jokeData from '.jokesData'
function App() {
 //const JokeComponent = jokesData.map(joke => joke key={joke.id} question={joke.question}
 //  punchLine={joke.punchLine} />) extra info voor ipa data.
 // basis code is const joke = joke.map(function (joke) { return})

    return (
        // <div>
        // {jokeComponent} extra info voor ipa
        // </div>

        <div>
           <Joke 
           question="My wife told me to stop acting like a flamingo." 
           punchLine="I had to put my foot down."
           />

           <Joke 
           question="What is Whitney Houston’s favorite type of coordination?" 
           punchLine="HAAANNNNND EYEEEEEEE."
           />

           <Joke
            question="Why are gay people always smiling?" 
            punchLine="Because they can’t keep a straight face."
            />

           <Joke
            question="Why did David Hasselhoff change his name to “The Hoff?”" 
            punchLine="It’s less hassle."
            />

           <Joke
            question="Why does Waldo wear stripes?"
            punchLine="Because he doesn’t want to be spotted."
            />
        </div>
        
    )
}

export default App