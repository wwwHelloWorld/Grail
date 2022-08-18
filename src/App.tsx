import React, { useEffect, useState } from "react";
import cats from "./assets/cats.jpg";
import chubaka from "./assets/chubaka.jpg";
import dogs from "./assets/dogs.jpg";
import dyno from "./assets/dyno.jpg";
import planets from "./assets/planets.jpg";

import "./App.css";

type HeaderProps = {
  image: string;
};
type FooterProps = {
  image: string;
};
type MainProps = {
  setIsMove: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
};

const Header: React.FC<HeaderProps> = ({ image }) => {
  return <header data-testid="header" style={{ backgroundImage: `url(${image})`, position: 'sticky', }}></header>;
};

const Footer: React.FC<FooterProps> = ({ image }) => {
  return <footer data-testid="footer" style={{ backgroundImage: `url(${image})`,  position: 'sticky', }}></footer>;
};

const Content: React.FC<MainProps> = ({ images, setIsMove }) => {

  const clickIntervalHandler = () => {
    setInterval(() => setIsMove((prev) => !prev), 520);
  };
  const clickHandler = () => {
    setIsMove((prev) => !prev);
  };

  return (
    <main data-testid="main">
      <section
        className="left"
        style={{ backgroundImage: `url(${images[0]})` }}
      ></section>
      <section
        className="center"
        style={{ backgroundImage: `url(${images[1]})` }}
      >
        <button className="move" data-testid="actionButton" title='moveButton' onClick={clickHandler}>
          Action!
        </button>
        <button className="interval" data-testid="intervalButton" onClick={clickIntervalHandler}>
          Move with Interval
        </button>
      </section>
      <section
        className="right"
        style={{ backgroundImage: `url(${images[2]})` }}
      ></section>
    </main>
  );
};

const App: React.FC = () => {
  const [isMove, setIsMove] = useState<boolean>(false);
  const [pictures, setPictures] = useState<string[]>([
    cats,
    dogs,
    planets,
    chubaka,
    dyno,
  ]);

  useEffect(() => {
    setPictures((prev) => prev.sort(() => Math.random() - 0.5));
  }, [isMove]);

  return (
    <div className="App">
      <Header image={pictures[0]} />
      <Content
        setIsMove={setIsMove}
        images={[pictures[1], pictures[2], pictures[3]]}
      />
      <Footer image={pictures[4]} />
    </div>
  );
};

export default App;
