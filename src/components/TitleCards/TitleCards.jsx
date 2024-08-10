import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {
  const [apidata, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzZkYjhhODhkOGFjNTNmOGE1OGNkNmIwMjkwZWEwNCIsIm5iZiI6MTcyMzI4MTU0Ni4xNjc5Nywic3ViIjoiNjZiNzMwMDI4Y2YwZjUyMGNkYThjNDE1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DI6U-Z0XX8axlAW1JUKI7Q5vQOI8O0bzeS-GvZu4VpU'
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheeel',handleWheel);
  },[])
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"My List"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards;
