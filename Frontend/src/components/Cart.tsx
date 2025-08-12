// import React, {useState} from "react";
// import "./Cart.css";
// import nikeShoe from "../Assets/Meal1.jpg";
// import Navbar from "./Navbar";

// const Cart: React.FC = () => {

// const[showModal , setShowModal] = useState(false);

// const handleOpen = () => {
//     setShowModal(true);
// };

// const handleClose =() => {
//     setShowModal(false);
// }

//   return (
//     <>
//      {/* Card 1 — image left, text right */}
//     <div className="product-card">
//         {/* <Navbar/> */}
//       <div className="product-img">
//         <img src={nikeShoe} 
//         onClick={handleOpen}
//         alt= " Meal 1 Lunch Box" />
//       </div>

//       {showModal && (
//       <div className = "modal-overlay " onClick ={handleClose}  >
//       <img className = " modal-img " 
//       src={nikeShoe} 
//       alt = "Zoomed Logo"/> 
//       </div>
//       )}
//       <div className="product-info">
//         <h1>Meal A</h1>
//         <h2 className="subtitle">Premium Lunch Box - Serves 1 Person</h2>
//         <div className="details">
//           <h3>What’s Inside:</h3>
//           <ul>
//             <li>Freshly made sandwich with assorted fillings</li>
//             <li>Crunchy crisps</li>
//             <li>A whole apple for a healthy crunch</li>
//             <li>Your choice of chilled fruit juice or bottled spring water</li>
//           </ul>
//           <p className="description">
//             💬 Perfect for lunch meetings, corporate orders or on-the-go meals. Every box is crafted to balance taste and nutrition using responsibly sourced ingredients.
//           </p>
//           <p className="rating">⭐️⭐️⭐️⭐️⭐️ (132 reviews)</p> 
//         </div>

//         <p className="price">Price: £6.20</p>
//         <button className = " btn primary "> Add to Cart </button>
//       </div>
//     </div>

// <div className="product-card">
//       {/* <Navbar/> */}
//     <div className="product-img">
//       <img src={nikeShoe} 
//       onClick={handleOpen}
//       alt= " Meal 1 Lunch Box" />
//     </div>

//     {showModal && (
//     <div className = "modal-overlay " onClick ={handleClose}  >
//     <img className = " modal-img " 
//     src={nikeShoe} 
//     alt = "Zoomed Logo"/> 
//     </div>
//     )}
//     <div className="product-info">
//       <h1>Meal A</h1>
//       <h2 className="subtitle">Premium Lunch Box - Serves 1 Person</h2>
//       <div className="details">
//         <h3>What’s Inside:</h3>
//         <ul>
//           <li>Freshly made sandwich with assorted fillings</li>
//           <li>Crunchy crisps</li>
//           <li>A whole apple for a healthy crunch</li>
//           <li>Your choice of chilled fruit juice or bottled spring water</li>
//         </ul>
//         <p className="description">
//           💬 Perfect for lunch meetings, corporate orders or on-the-go meals. Every box is crafted to balance taste and nutrition using responsibly sourced ingredients.
//         </p>
//         <p className="rating">⭐️⭐️⭐️⭐️⭐️ (132 reviews)</p> 
//       </div>

//       <p className="price">Price: £6.20</p>
//       <button className = " btn primary "> Add to Cart </button>
//     </div>
//   </div>
//   </div>
//   </>
//   );
// };

// export default Cart;


import React, { useState } from "react";
import "./Cart.css";
import nikeShoe from "../Assets/Meal1.jpg";
import Navbar from "./Navbar";

const Cart: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const products = [
    {
      id: 1,
      title: "Meal A",
      subtitle: "Premium Lunch Box - Serves 1 Person",
      price: "£6.20",
      image: nikeShoe,
      details: [
        "Freshly made sandwich with assorted fillings",
        "Crunchy crisps",
        "A whole apple for a healthy crunch",
        "Your choice of chilled fruit juice or bottled spring water",
      ],
      description:
        "💬 Perfect for lunch meetings, corporate orders or on-the-go meals. Every box is crafted to balance taste and nutrition using responsibly sourced ingredients.",
      rating: "⭐️⭐️⭐️⭐️⭐️ (132 reviews)",
    },
    {
      id: 2,
      title: "Meal B",
      subtitle: "Premium Lunch Box - Serves 1 Person",
      price: "£6.20",
      image: nikeShoe,
      details: [
        "Freshly made sandwich with assorted fillings",
        "Crunchy crisps",
        "A whole apple for a healthy crunch",
        "Your choice of chilled fruit juice or bottled spring water",
      ],
      description:
        "💬 Perfect for lunch meetings, corporate orders or on-the-go meals. Every box is crafted to balance taste and nutrition using responsibly sourced ingredients.",
      rating: "⭐️⭐️⭐️⭐️⭐️ (132 reviews)",
    },
  ];

  return (
    <div className="cards-rail">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-card ${index % 2 === 0 ? "align-left" : "align-right"}`}
        >
          <Navbar/>
          <div className="product-img">
            <img
              src={product.image}
              onClick={handleOpen}
              alt={` ${product.title} Lunch Box`}
            />
          </div>

          {showModal && (
            <div className="modal-overlay" onClick={handleClose}>
              <img
                className="modal-img"
                src={product.image}
                alt="Zoomed Logo"
              />
            </div>
          )}

          <div className="product-info">
            <h1>{product.title}</h1>
            <h2 className="subtitle">{product.subtitle}</h2>
            <div className="details">
              <h3>What’s Inside:</h3>
              <ul>
                {product.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="description">{product.description}</p>
              <p className="rating">{product.rating}</p>
            </div>

            <p className="price">Price: {product.price}</p>
            <button className="btn primary">Add to Cart</button>
          </div>
        </div>
      ))}
</div>
 );
};

export default Cart;

