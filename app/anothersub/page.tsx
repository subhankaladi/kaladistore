import React from 'react';
import './another.css';
import Link from 'next/link';
import Footer from '../footer/page';

const products = [
  {
    image: '/j1.png',
    title: 'NEW TRENDY WINTER COLLECTION PLANE...',
    price: 'Rs.1,299',
    discount: '-46%',
    rating: 4.2,
    reviews: 290,
  },
  {
    image: '/j2.png',
    title: 'DT900 Ultra, 7 in 1 Ultra, i20 Ultra...',
    price: 'Rs.1,598',
    discount: '-68%',
    rating: 4.3,
    reviews: 675,
  },
  {
    image: '/j3.png',
    title: 'Pack of 3-Improved Quality LARGE Storage...',
    price: 'Rs.299',
    discount: '-50%',
    rating: 4.5,
    reviews: 4419,
  },
  {
    image: '/j4.png',
    title: 'Ceiling Fan Blades & Motor Washable and Du...',
    price: 'Rs.183',
    discount: '-43%',
    rating: 4.1,
    reviews: 1082,
  },
  {
    image: 'j5.png',
    title: 'Simply Creative 3D Wooden Wall Hanging...',
    price: 'Rs.99',
    discount: '-40%',
    rating: 3.8,
    reviews: 22,
  },
  {
    image: 'j6.png',
    title: 'Body Posture Corrector Belt - Shoulder Supp...',
    price: 'Rs.259',
    discount: '-42%',
    rating: 4.6,
    reviews: 6007,
  },
  {
    image: 'j7.png',
    title: 'SP Dealz Manual Tabletop Drum Cheese Grater...',
    price: 'Rs.1,199',
    discount: '-70%',
    rating: 4.4,
    reviews: 720,
  },
  {
    image: 'j8.png',
    title: 'GLUPATONE Extreme Strong Emulsion 50ml...',
    price: 'Rs.950',
    discount: '-26%',
    rating: 4.7,
    reviews: 54306,
  },
  {
    image: 'j9.png',
    title: '3D Fairy Wooden Wall Clock | Light Wall Clock...',
    price: 'Rs.149',
    discount: '-25%',
    rating: 4.3,
    reviews: 333,
  },
  {
    image: '/j10.png',
    title: 'Pack of 16 Tube Hijab Caps - Plain Hijab Caps...',
    price: 'Rs.1,189',
    discount: '-40%',
    rating: 4.5,
    reviews: 425,
  },
  {
    image: '/j11.png',
    title: 'FRAKIN Child Baby Safety Locks Drawer Cabinets...',
    price: 'Rs.149',
    discount: '-26%',
    rating: 4.4,
    reviews: 692,
  },
  {
    image: '/j12.png',
    title: 'Fashion Exquisite Shopping Bag Retro...',
    price: 'Rs.1,153',
    discount: '-31%',
    rating: 4.2,
    reviews: 167,
  },
];

const AnotherSub = () => {
  return (
    <div className="another">
      <h1>Just For You</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <Link href="/list" key={index} className="product-card">  {/* Added Link with path "/list" */}
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price} <span className="discount">{product.discount}</span></p>
              <p className="product-rating">⭐ {product.rating} ({product.reviews})</p>
            </div>
          </Link>
        ))}
      </div>
      <br /><br /><br /><br />
      <Footer/>
    </div>
  );
};

export default AnotherSub;
