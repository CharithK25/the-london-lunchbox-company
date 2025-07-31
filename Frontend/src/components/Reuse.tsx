import React from "react";
import "./Cart.css"

interface Components {
  style?: String;
  name: String;
  image?: string;
  id?: string;
  subtitle?: string;
  detail?: string;
  descriptions?: string;
  price?: number;
  quantity?: number;
  ratings: number;
}

const CardReu: React.FC<Components> = ({
  style,
  name,
  id,
  image,
  detail,
  subtitle,
  descriptions,
  price,
  quantity,
  ratings,
}) => {
  return (
    <>
      <div className="product-card"> 
        <h1 className="product-info">{name}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        {/* <h3 className="details">{descriptions}</h3> */}
        <p className="description">{descriptions}</p>
        <p className="price">{price}</p>
        <p className="rating">{ratings}</p>
        <button className="btn primary">Add to Cart</button> 
      </div>
    </>
  );
};

export default CardReu;