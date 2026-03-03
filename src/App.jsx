import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import placeHolderImg from './assets/placeholder.png';
import Momoyo from './assets/Momoyo.png';
import Suika from './assets/Suika/png';
import Yuuma from './assets/Yuuma.png';
import Kokoro from './assets/Kokoro.png';
import Koishi from './assets/Koishi.png';
import Junko from './assets/Junko.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={placeHolderImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
        </div>
        <div>
          <h1>Touhou characters I really like</h1>
          <p></p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Some characters I really like</h2>
          <p>All images are from Touhouwiki.net</p>
          <ul>
            <li>
              <a
                href="https://en.touhouwiki.net/wiki/Yuuma_Toutetsu"
                target="_blank"
              >
                <img className="logo" src={Yuuma} alt="" />
                If I had to describe her... imagine Kirby but as a Yakuxa boss
                that uses a spork as a weapon. Also look at her character
                portiat from Sunken Fossil World
              </a>
            </li>
            <li>
              <a
                href="https://en.touhouwiki.net/wiki/Suika_Ibuki"
                target="_blank"
              >
                <img className="button-icon" src={Suika} alt="" />
                So fun fact the image I use for placeholders(which features this
                character) actually appeared on ESPN of all places{' '}
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a
                href="https://en.touhouwiki.net/wiki/Momoyo_Himemushi"
                target="_blank"
              >
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="assets/Momoyo.png"></use>
                </svg>
                Ironically enough Momoyo is my favorite despite being based on a
                giant dragon eating centipide
              </a>
            </li>
            <li>
              <a href="https://en.touhouwiki.net/wiki/Hata_no_Kokoro" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="assets/Kokoro.png"></use>
                </svg>
             Side rant but OMG her voice in Genso-Wander Reloaded is ADORABLE!!!!
              </a>
            </li>
            <li>
              <a href="https://en.touhouwiki.net/wiki/Koishi_Komeiji" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="assets/Koishi.png"></use>
                </svg>
She was one of the first characters I was introduced to from this franchise.
              </a>
            </li>
            <li>
              <a href="https://en.touhouwiki.net/wiki/Junko" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="assets/Junko.png"></use>
                </svg>
                Her theme is great, I really like her design and I find the fandoms decision of making her treat 
                her partner in crime and one of their minions as her new family to be adorable.
           </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
