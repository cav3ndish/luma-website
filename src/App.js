import React from 'react';
import './App.css';
import CarouselGallery from "./CarouselGallery";

function App() {
  return (
    <div className="container-fluid ">
    <div className="App">
      <header className="Header">
       
          <img className="logoImg" src="./favicon.ico" alt="logo" />
        <span className="title">Luma Contemporary Art</span>   
        <nav>
          <ul className="link-list">
            <li className="linkItem"><a href="https://www.instagram.com/lumacontemporaryart/" target ="blank">Instragram</a></li>
            <li className="linkItem"><a href="https://www.facebook.com/lumacontemporaryart/" target ="blank">Facebook</a></li>
            <li className="linkItem"><a href="https://www.artsy.net/luma-arte" target ="blank">Artsy</a></li>
            <li className="linkItem"><a href="https://open.spotify.com/playlist/2pgIO167wB1RVqR01H8Qko?si=sW_pHXtZTO6tAkxOSlGHTw&nd=1" target ="blank">Spotify</a></li>
            <li className="linkItem"><a href="#" target ="blank">Contact</a></li>
            <li className="linkItem"><a href="#" target ="blank">Articoli</a></li>
          </ul>
        </nav>
       
      </header>
<div className="subTitle"> <h2>The fastest way from viewer to collectionist</h2></div>
<CarouselGallery />
      <footer> <small>Coded by Cav3ndish</small> </footer>
    </div>
   </div>
  );
}

export default App;
