import React from 'react';
import './App.css';

function App() {
  return (
    <main id="main">
      <div className="main-header">
        <p className="heading">A Tribute Page for our Supreme Leader, Mr. Tyler Durden</p>
      </div>
      <div id="img-div">
        <img
          id="image"
          src="https://i.pinimg.com/474x/7c/82/28/7c8228205052be6276147f552ab793ee.jpg"
          alt="tyler-durden"
        />
        <p id="image-caption">This is an image of Tyler Durden</p>
      </div>

      <div className="tribute-father">
        <span id="tribute-info">
          Tyler Durden is a fictional character and the leader of Project Mayhem in the 1999 novel
          and film Fight Club. He is a CIA targeting officer and dissociative anarchist who opposes
          modern society, consumerism, and popular culture. Tyler is the Narrator's imaginary alter
          ego, the embodiment of his “death drive” and repressed masculinity. He is smart, capable,
          charismatic, and intuitive. Tyler is charismatic, powerful, masculine, and in-control. He
          is unafraid of confrontation or violence and teaches the Narrator how to embrace pain and
          violence. Tyler is also a minimalist and neo-luddite who rejects the basic assumptions of
          civilization, especially the importance of material possessions. Tyler is the alter ego of
          the Narrator, a fictional character and the protagonist and main antagonist of Fight Club.
          During the day, the Narrator is an insomniac with a split personality who is depicted as an
          unnamed everyman. At night during periods of insomnia, he becomes the chaotic and
          charismatic Tyler Durden. In the film, Edward Norton plays the Narrator.
        </span>
      </div>

      <div id="img-div">
        <img
          id="image"
          className="image2"
          src="https://miro.medium.com/v2/resize:fit:651/1*zirYVcZVeh5As_hOxjayrA.jpeg"
          alt="tyler-durden"
        />
      </div>

      <div id="img-div">
        <img
          id="image"
          className="image3"
          src="https://manvsdebt.com/wp-content/uploads/2009/09/TylerDurden.jpg"
          alt="tyler-durden"
        />
      </div>

      <footer>
        <a
          id="tribute-link"
          className="link1"
          href="https://fightclub.fandom.com/wiki/Tyler_Durden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="heading heading2">You really don't wanna die without any scars?</h2>
        </a>
      </footer>
    </main>
  );
}

export default App;
