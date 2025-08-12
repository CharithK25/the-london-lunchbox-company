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

const CardReu: React.FC<Components> = ({
  name,
  subtitle,
  descriptions,
  price,
  ratings,
  image,
}) => {

  return (
    <div className="home-card">
      {image && <img className="home-card-img" src={image} alt={name} />}
      <div className="home-card-info">
        <h3 className="home-card-title">{name}</h3>
        {subtitle && <p className="home-card-sub">{subtitle}</p>}
        {descriptions && <p className="home-card-desc">{descriptions}</p>}
        {price && <p className="home-card-price">£{price.toFixed(2)}</p>}
        <button className="home-card-btn">Shop now</button>
      </div>
    </div>
  );
};

export default CardReu;