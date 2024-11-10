import React from 'react';
import './anhome.css';
import Link from 'next/link';

const AnHome = () => {
  const cardsData = [
    {
      title: "Gaming accessories",
      images: [
        "/c1.jpg",
        "/c2.jpg",
        "/c3.jpg",
        "/c4.jpg",
      ],
      names: [
        "Headsets",
        "Keyboards",
        "Computer mice",
        "Chairs",
      ],
      linkText: "See more",
      linkUrl: "/gaming",
    },
    {
      title: "Shop for your home essentials",
      images: [
        "/d1.jpg",
        "/d2.jpg",
        "/d3.jpg",
        "/d4.jpg",
      ],
      names: [
        "Cleaning Tools",
        "Home Storage",
        "Home Decor",
        "Bedding",
      ],
      linkText: "Discover more in Home",
      linkUrl: "/homedecor",
    },
    {
      title: "Score the top PCs & Accessories",
      images: [
        "/e1.jpg",
        "/e2.jpg",
        "/e3.jpg",
        "/e4.jpg",
      ],
      names: [
        "Desktops",
        "Laptops",
        "Hard Drives",
        "PC Accessories",
      ],
      linkText: "See more",
      linkUrl: "/computer",
    },
  ];

  return (
    <div className="main-anhome">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <div className="images-container">
            {card.images.map((imageSrc, imgIndex) => (
              <div key={imgIndex} className="image-box">
                <img src={imageSrc} alt={card.names[imgIndex]} />
                <p>{card.names[imgIndex]}</p>
              </div>
            ))}
          </div>
          <Link href={card.linkUrl} className="link">{card.linkText}</Link>
        </div>
      ))}
    </div>
  );
};

export default AnHome;
