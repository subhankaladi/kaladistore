import React from 'react';
import './gaming.css';
import Link from 'next/link'; // Importing Link from next

const Gaming = () => {
  // Array of items for each category
  const categories = [
    { name: 'Nintendo', image: '/z1.png' },
    { name: 'Oculus', image: '/z2.jpg' },
    { name: 'XBOX', image: '/z3.png' },
    { name: 'Laptops', image: '/z4.png' },
    { name: 'Controllers', image: '/z5.png' },
    { name: 'Playstation', image: '/z6.jpg' },
    { name: 'Video Games', image: '/z7.png' },
    { name: 'Headsets', image: '/z8.jpg' },
    { name: 'Keyboards', image: '/z9.jpg' },
    { name: 'Chairs', image: '/z10.jpg'},
  ];

  return (
    <div className="gaming">
      <h2>Essential For Gamers</h2>
      <div className="gaming-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
            
            <Link href="/bseller">
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
