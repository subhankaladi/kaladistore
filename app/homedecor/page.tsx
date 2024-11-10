import React from 'react';
import Image from 'next/image';
import './homedecor.css';

const HomeDecor = () => {
  const products = [
    { title: "Knife Sets for Kitchen", price: "$69.99", link: "/bseller", img: "/y1.jpg" },
    { title: "Mop Broom Holder", price: "$9.99", link: "/bseller", img: "/y2.jpg" },
    { title: "Black Silverware Set", price: "$19.99", link: "/bseller", img: "/y3.jpg" },
    { title: "Push Up Board Equipment", price: "$59.99", link: "/bseller", img: "/y4.jpg" },
    { title: "Adhesive Shower Caddy", price: "$21.99", link: "/bseller", img: "/y5.jpg" },
    { title: "Magnetic Spice Rack", price: "$19.99", link: "/bseller", img: "/y6.jpg" },
    { title: "TP-Link Tapo Camera", price: "$16.99", link: "/bseller", img: "/y7.jpg" },
    { title: "Key Holder for Wall", price: "$12.99", link: "/bseller", img: "/y8.jpg" },
    { title: "Stanley Tumbler", price: "$35.00", link: "/bseller", img: "/y9.jpg" },
    { title: "Drink Coasters", price: "$8.99", link: "/bseller", img: "/y10.jpg"}
  ];

  return (
    <div className="home-decor">
      <h2>Some Good For Home Decoration</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <a href={product.link} key={index} className="product-item">
            <div className="product-content">
              <div className="image-container">
                <Image
                  src={product.img}
                  alt={product.title}
                  layout="fill" 
                  objectFit="cover" 
                  className="product-image"
                />
              </div>
              <div className="product-title">{product.title}</div>
              <div className="product-price">{product.price}</div>
              <button className="buy-now-btn">Buy Now</button> 
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeDecor;
