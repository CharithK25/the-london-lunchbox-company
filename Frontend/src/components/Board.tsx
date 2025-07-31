import React from 'react';
import './Board.css';

type Logo = {
  name: string;
  src: string;
  alt?: string;
};

interface BoardProps {
  logos: Logo[];
}

const Board: React.FC<BoardProps> = ({ logos }) => {
  return (
    <section className="as-seen-in">
      <h2>Our Customers</h2>
      <div className="logo-grid">
        {logos.concat(logos).map((logo , index) => (
          <img
          key ={index}
            // key={logo.name}
            src={logo.src}
            alt={ logo.name}
            className="logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Board;