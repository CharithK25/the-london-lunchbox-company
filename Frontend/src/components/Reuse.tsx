import React from "react";
import "./Cart.css";

interface Components {
  name: string;
  subtitle?: string;
  descriptions?: string;
  price?: number;
  ratings: number;
  image?: string;
}

const CardReu: React.FC<Components> = (props) => {

  return (
    <div className="home-card">
      {props.image && <img className="home-card-img" src={props.image} alt={props.name} />}
      <div className="home-card-info">
        <h3 className="home-card-title">{props.name}</h3>
        {props.subtitle && <p className="home-card-sub">{props.subtitle}</p>}
        {props.descriptions && <p className="home-card-desc">{props.descriptions}</p>}
        {props.price && <p className="home-card-price">£{props.price.toFixed(2)}</p>}
        <button className="home-card-btn">Shop now</button>
      </div>
    // </div>
  );
};

export default CardReu;