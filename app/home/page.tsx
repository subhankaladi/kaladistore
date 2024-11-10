"use client"

import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'; // Import Link from Next.js
import './home.css';
import SubHome from '../subhome/page';
import AnHome from '../anhome/page';


const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/gamingchair.png', 'airbuds.png','/pc.png' ,'/furniture.png', '/img4.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="home">
      <div className="top-nav">
        <div className="logo">Kaladi Store</div>
        <div className="actions">
          <button><Link href='/login'>Login</Link></button>
          <button> <Link href='/list'>
            <ShoppingCartIcon />
            </Link>
          </button>
          <button><Link href='/bseller'>Become a Seller</Link></button>
        </div>
      </div>
      <div className="category-bar">
  <div className="category">
    Grocery
    <div className="subcategory">
      <Link href="/list">Oils</Link>
      <Link href="/list">Pulses</Link>
      <Link href="/list">Snacks</Link>
    </div>
  </div>
  <div className="category">
    Mobiles
    <div className="subcategory">
      <Link href="/list">Smartphones</Link>
      <Link href="/list">Tablets</Link>
    </div>
  </div>
  <div className="category">
    Fashion
    <div className="subcategory">
      <Link href="/list">T-Shirts</Link>
      <Link href="/list">Pants</Link>
      <Link href="/list">Shoes</Link>
    </div>
  </div>
  <div className="category">
    Electronics
    <div className="subcategory">
      <Link href="/list">Laptops</Link>
      <Link href="/list">Cameras</Link>
    </div>
  </div>
  <div className="category">
    Home & Furniture
    <div className="subcategory">
      <Link href="/list">Sofas</Link>
      <Link href="/list">Beds</Link>
      <Link href="/list">Chairs</Link>
    </div>
  </div>
  <div className="category">
    Appliances
    <div className="subcategory">
      <Link href="/list">Refrigerators</Link>
      <Link href="/list">Washing Machines</Link>
    </div>
  </div>
  <div className="category">
    Flight Bookings
    <div className="subcategory">
      <Link href="/list">Domestic</Link>
      <Link href="/list">International</Link>
    </div>
  </div>
  <div className="category">
    Beauty, Toys & More
    <div className="subcategory">
      <Link href="/list">Skincare</Link>
      <Link href="/list">Toys</Link>
      <Link href="/list">Games</Link>
    </div>
  </div>
  <div className="category">
    Two Wheelers
    <div className="subcategory">
      <Link href="/list">Bikes</Link>
      <Link href="/list">Scooters</Link>
    </div>
  </div>
</div>


      {/* Carousel Section */}
      <div className="carousel">
        <img src={images[currentImage]} alt={`Sale Banner ${currentImage + 1}`} />
      </div>
      <AnHome/>
      <SubHome/>
    </div>
  );
};

export default Home;
