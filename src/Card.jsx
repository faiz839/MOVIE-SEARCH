import React from 'react';
import welcome  from './welcome.jpg'
import hello from './hello.jpg'
export default function Card() {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={welcome} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Welcome</h5>
          <p className="card-text">
          Title: Title: Welcome
Genre: Comedy, Crime, Drama
Director: Anees Bazmee, Mayur K. Barot
Actors: Akshay Kumar, Katrina Kaif, Nana Patekar
          </p>
          <a href="#" className="btn btn-primary">Movie</a>
        </div>
      </div>
    </div>
  );
}
<div>
<div className="card" style={{ width: '18rem' }}>
  <img src={hello} className="card-img-top" alt="Card image" />
  <div className="card-body">
    <h5 className="card-title">Hello</h5>
    <p className="card-text">
    Title:Title: Hello
Genre: Drama, Romance
Director: Atul Agnihotri
Actors: Sharman Joshi, Amrita Arora, Sohail Khan
    </p>
    <a href="#" className="btn btn-primary">Movie</a>
  </div>
</div>
</div>






  

