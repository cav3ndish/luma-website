import React from "react";
import { UncontrolledCarousel } from 'reactstrap';
import "./carouselGallery.css"
export default function CarouselGallery()
{const items = [
  {
    src: 'img/salvo-inverno-2.jpeg',
    altText: 'Salvo, inverno',
    caption: 'Salvo, Inverno',
    header: 'Salvo',
    key: '1'
  },
  {
    src: 'img/salvo.jpeg',
    altText: 'Salvo, inverno 2',
    caption: 'Salvo, Inverno',
    header: 'Salvo',
    key: '2'
  },
  {
    src: 'img/tano-festa.jpg',
    altText: 'tano festa',
    caption: 'Tano Festa, Da Michelangelo',
    header: 'Festa',
    key: '3'
  }
];
return(<div className="carousel">
   <UncontrolledCarousel items={items} />
 
</div>);
}