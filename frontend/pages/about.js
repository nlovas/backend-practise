import Header from "../components/Header";
import * as React from "react";
import Link from "next/link";

class About extends React.Component {
  //constructor(){}
  render() {
    return (
      <div>
        <Header />
        <h1>About</h1>
        <div>
          Welcome to Isle of Cosplay! A site where cosplayers can share photos
          of their cosplays, make cosplans, befriend other cosplayers, and more!
        </div>
        <br />
        <h2>FAQ</h2>
        <h3>Cosplay? What's that?</h3>
        <div>
          Cosplay is a blend of the words "Costume" and "Play" and is an
          activity where someone wears a costume to represent a specific
          character. Cosplay is a hobby for many people who express their love
          for a character, video game, comic, movie, anime, book, or tv series.
          Cosplays can be any combination of hand-made or purchased from a
          store.
        </div>
        <h3>Why would someone want to do that?</h3>
        <div>
          There are many reasons, but to put it simply, for the fun of it! Some
          people love the challenge of recreating a complex character design,
          some do it to compete in cosplay competitions, some to meet people
          with shared interests, some perform, some just want to make people
          smile.
        </div>
        <h3>So what is this website for?</h3>
        <div>
          This website is for cosplayers to show off their work, make friends,
          and share crafting secrets. BUT officially this website is being used
          as a way for me to learn back-end development.
        </div>
        <h3>Wait... Who made this website?</h3>
        <div>
          <a href="https://github.com/nlovas">Me!</a>
        </div>
        <h3>What are some upcoming features?</h3>
        <div>
          I'd love to call some API's in order to have a database of characters
          and series on hand. I'd also like to be able to tag certain parts of a
          costume for a character.
        </div>
      </div>
    );
  }
}

export default About;
