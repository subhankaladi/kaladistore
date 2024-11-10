import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './list.css';

const CombinedList = () => {
  const products =  [
    // From AnotherSub component
    { title: 'NEW TRENDY WINTER COLLECTION PLANE...', price: 'Rs.1,299', discount: '-46%', rating: 4.2, reviews: 290, image: '/j1.png' },
    { title: 'DT900 Ultra, 7 in 1 Ultra, i20 Ultra...', price: 'Rs.1,598', discount: '-68%', rating: 4.3, reviews: 675, image: '/j2.png' },
    { title: 'Pack of 3-Improved Quality LARGE Storage...', price: 'Rs.299', discount: '-50%', rating: 4.5, reviews: 4419, image: '/j3.png' },
    { title: 'Ceiling Fan Blades & Motor Washable and Du...', price: 'Rs.183', discount: '-43%', rating: 4.1, reviews: 1082, image: '/j4.png' },
    { title: 'Simply Creative 3D Wooden Wall Hanging...', price: 'Rs.99', discount: '-40%', rating: 3.8, reviews: 22, image: '/j5.png' }, // add `/`
    { title: 'Body Posture Corrector Belt - Shoulder Supp...', price: 'Rs.259', discount: '-42%', rating: 4.6, reviews: 6007, image: '/j6.png' }, // add `/`
    { title: 'SP Dealz Manual Tabletop Drum Cheese Grater...', price: 'Rs.1,199', discount: '-70%', rating: 4.4, reviews: 720, image: '/j7.png' }, // add `/`
    { title: 'GLUPATONE Extreme Strong Emulsion 50ml...', price: 'Rs.950', discount: '-26%', rating: 4.7, reviews: 54306, image: '/j8.png' }, // add `/`
    { title: '3D Fairy Wooden Wall Clock | Light Wall Clock...', price: 'Rs.149', discount: '-25%', rating: 4.3, reviews: 333, image: '/j9.png' }, // add `/`
    { title: 'Pack of 16 Tube Hijab Caps - Plain Hijab Caps...', price: 'Rs.1,189', discount: '-40%', rating: 4.5, reviews: 425, image: '/j10.png' },
  
    
        // From AnotherSub component
        { title: 'NEW TRENDY WINTER COLLECTION PLANE...', price: 'Rs.1,299', discount: '-46%', rating: 4.2, reviews: 290, image: '/j1.png' },
        { title: 'DT900 Ultra, 7 in 1 Ultra, i20 Ultra...', price: 'Rs.1,598', discount: '-68%', rating: 4.3, reviews: 675, image: '/j2.png' },
        { title: 'Pack of 3-Improved Quality LARGE Storage...', price: 'Rs.299', discount: '-50%', rating: 4.5, reviews: 4419, image: '/j3.png' },
        { title: 'Ceiling Fan Blades & Motor Washable and Du...', price: 'Rs.183', discount: '-43%', rating: 4.1, reviews: 1082, image: '/j4.png' },
        { title: 'Simply Creative 3D Wooden Wall Hanging...', price: 'Rs.99', discount: '-40%', rating: 3.8, reviews: 22, image: '/j5.png' },
        { title: 'Body Posture Corrector Belt - Shoulder Supp...', price: 'Rs.259', discount: '-42%', rating: 4.6, reviews: 6007, image: '/j6.png' },
        { title: 'SP Dealz Manual Tabletop Drum Cheese Grater...', price: 'Rs.1,199', discount: '-70%', rating: 4.4, reviews: 720, image: '/j7.png' },
        { title: 'GLUPATONE Extreme Strong Emulsion 50ml...', price: 'Rs.950', discount: '-26%', rating: 4.7, reviews: 54306, image: '/j8.png' },
        { title: '3D Fairy Wooden Wall Clock | Light Wall Clock...', price: 'Rs.149', discount: '-25%', rating: 4.3, reviews: 333, image: '/j9.png' },
        { title: 'Pack of 16 Tube Hijab Caps - Plain Hijab Caps...', price: 'Rs.1,189', discount: '-40%', rating: 4.5, reviews: 425, image: '/j10.png' },
      
        // From SubHome component
        { title: 'Gravastar Wireless Bluetooth Earbuds', price: 'Rs.1,963', discount: '-44%', rating: 4.0, reviews: 510, image: '/buds1.jpg' },
        { title: 'Original Wireless Magnetic Earbuds', price: 'Rs.313', discount: '-79%', rating: 3.9, reviews: 300, image: '/buds2.jpg' },
        { title: 'Ceiling Fan Cover Set Safe From Dust', price: 'Rs.869', discount: '-30%', rating: 4.3, reviews: 105, image: '/fan.png' },
        { title: 'Air 31 Wireless Bluetooth Earbuds', price: 'Rs.725', discount: '-76%', rating: 4.1, reviews: 620, image: '/buds3.png' },
        { title: 'Wireless Magnetic Suction Earbuds', price: 'Rs.842', discount: '-79%', rating: 4.4, reviews: 210, image: '/buds4.jpg' },
        { title: '2Pcs Ladies Fashion Trend Gold Digital', price: 'Rs.470', discount: '-70%', rating: 4.2, reviews: 150, image: '/watch.jpg' },
      
        // From HomeDecor component
        { title: 'Knife Sets for Kitchen', price: '$69.99', rating: 4.6, reviews: 800, image: '/y1.jpg' },
        { title: 'Mop Broom Holder', price: '$9.99', rating: 4.2, reviews: 95, image: '/y2.jpg' },
        { title: 'Black Silverware Set', price: '$19.99', rating: 4.3, reviews: 240, image: '/y3.jpg' },
        { title: 'Push Up Board Equipment', price: '$59.99', rating: 4.5, reviews: 540, image: '/y4.jpg' },
        { title: 'Adhesive Shower Caddy', price: '$21.99', rating: 4.4, reviews: 330, image: '/y5.jpg' },
        { title: 'Magnetic Spice Rack', price: '$19.99', rating: 4.7, reviews: 180, image: '/y6.jpg' },
        { title: 'TP-Link Tapo Camera', price: '$16.99', rating: 4.0, reviews: 770, image: '/y7.jpg' },
        { title: 'Key Holder for Wall', price: '$12.99', rating: 4.1, reviews: 85, image: '/y8.jpg' },
        { title: 'Stanley Tumbler', price: '$35.00', rating: 4.8, reviews: 560, image: '/y9.jpg' },
      
    { title: 'Body Posture Corrector Belt - Shoulder Supp...', price: 'Rs.259', discount: '-42%', rating: 4.6, reviews: 6007, image: '/j6.png' }, // add `/`
    { title: 'SP Dealz Manual Tabletop Drum Cheese Grater...', price: 'Rs.1,199', discount: '-70%', rating: 4.4, reviews: 720, image: '/j7.png' }, // add `/`
    { title: 'GLUPATONE Extreme Strong Emulsion 50ml...', price: 'Rs.950', discount: '-26%', rating: 4.7, reviews: 54306, image: '/j8.png' }, // add `/`
   
    { title: 'Drink Coasters', price: '$8.99', discount: '-68%', rating: 2.1, reviews: 315, image: '/y10.jpg' },
    { title: 'Original Wireless Magnetic Earbuds', price: 'Rs.313',  discount: '-68%', rating: 4.3, reviews: 675, image: '/buds2.jpg' },

  ];
  

  return (
    <div className="combined-list">
      <h2>All Categories</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Image src={product.image} alt={product.title} width={150} height={150} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
              {product.discount && <span className="product-discount">{product.discount}</span>}
              {product.rating && <p className="product-rating">⭐ {product.rating} ({product.reviews} reviews)</p>}
              <Link href="/bseller" className="buy-now-button">Buy Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedList;
