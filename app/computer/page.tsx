import React from 'react';
import Link from 'next/link';
import './computer.css';

const Computer = () => {
  const products = [
    { id: 1, img: 'x1.png', title: 'MDO2Q Office Desk Accessories', price: '$6.99' },
    { id: 2, img: 'x2.png', title: 'SUPERDANNY LED Desk Lamp', price: '$29.99' },
    { id: 3, img: 'x3.png', title: 'UHURU Dual Wireless Gaming Headset', price: '$49.99' },
    { id: 4, img: 'x4.png', title: 'YSAGI Leather Desk Pad Protector', price: '$9.99' },
    { id: 5, img: 'x5.png', title: '8Bitdo Retro Mechanical Keyboard', price: '$88.5' },
    { id: 6, img: 'x6.png', title: 'ASUS ProArt Display PA278QV Monitor', price: '$249.99' },
    { id: 7, img: 'x7.png', title: 'Large RGB Gaming Mouse Pad', price: '$9.99' },
    { id: 8, img: 'x8.png', title: 'BONTEC Dual Monitor Stand Riser', price: '$29.99' },
    { id: 9, img: 'x9.png', title: 'Beikell SD Card Reader', price: '$7.99' },
    { id: 10, img:'x10.png', title: 'Amazon Basics Ergonomic Wireless Keyboard', price: '$39.99' }
  ];

  return (
    <div className='computer-heading'>
      <h2>Top Level Of Accessories</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <Link href="/bseller">
              <button className="buy-now-btn">Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Computer;
