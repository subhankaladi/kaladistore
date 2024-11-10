import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './subhome.module.css';
import AnotherSub from '../anothersub/page';

const products = [
  {
    name: 'Gravastar Wireless Bluetooth Earbuds',
    price: 'Rs.1,963',
    discount: '-44%',
    link: '/list',  // changed to /list
    image: '/buds1.jpg',
  },
  {
    name: 'Original Wireless Magnetic Earbuds',
    price: 'Rs.313',
    discount: '-79%',
    link: '/list',  // changed to /list
    image: '/buds2.jpg',
  },
  {
    name: 'Ceiling Fan Cover Set Safe From Dust',
    price: 'Rs.869',
    discount: '-30%',
    link: '/list',  // changed to /list
    image: '/fan.png',
  },
  {
    name: 'Air 31 Wireless Bluetooth Earbuds',
    price: 'Rs.725',
    discount: '-76%',
    link: '/list',  // changed to /list
    image: '/buds3.png',
  },
  {
    name: 'Wireless Magnetic Suction Earbuds',
    price: 'Rs.842',
    discount: '-79%',
    link: '/list',  // changed to /list
    image: '/buds4.jpg',
  },
  {
    name: '2Pcs Ladies Fashion Trend Gold Digital',
    price: 'Rs.470',
    discount: '-70%',
    link: '/list',  // changed to /list
    image: '/watch.jpg',
  },
];

const categories = [
  {
    name: 'Messenger Bags',
    link: '/list',  // changed to /list
    image: '/p1.jpg',
  },
  {
    name: 'Sunglasses',
    link: '/list',  // changed to /list
    image: '/p2.jpg',
  },
  {
    name: 'samsung',
    link: '/list',  // changed to /list
    image: '/p3.jpg',
  },
  {
    name: 'Mops & Sweepers',
    link: '/list',  // changed to /list
    image: '/p4.jpg',
  },
  {
    name: 'Tote Bags ',
    link: '/list',  // changed to /list
    image: '/p5.jpg',
  },
  {
    name: 'Dog & Cat Beds ',
    link: '/list',  // changed to /list
    image: '/p6.jpg',
  },
  {
    name: 'Starter Kits',
    link: '/list',  // changed to /list
    image: '/p8.jpg',
  },
  {
    name: 'Building Toys',
    link: '/list',  // changed to /list
    image: '/p9.png',
  },
  {
    name: 'Knife Sharpeners',
    link: '/list',  // changed to /list
    image: '/p10.jpg',
  },
  {
    name: 'Ready to Eat',
    link: '/list',  // changed to /list
    image: '/p11.jpg',
  },
  {
    name: 'Pencils',
    link: '/list',  // changed to /list
    image: '/p12.jpg',
  },
  {
    name: 'Laminate Floring',
    link: '/list',  // changed to /list
    image: '/p13.jpg',
  },
  {
    name: 'Microphones',
    link: '/list',  // changed to /list
    image: '/p14.jpg',
  },
  {
    name: 'AirBuds',
    link: '/list',  // changed to /list
    image: '/p15.jpg',
  },
];


const SubHome = () => {
  return (
    <div>
        <div className={styles.subhome}>
      <h2 className={styles.heading}>On Sale Now</h2>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <Link href={product.link} key={index} className={styles.link}>
            <div className={styles.productCard}>
              <Image src={product.image} alt={product.name} width={150} height={150} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <span className={styles.productDiscount}>{product.discount}</span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className={styles.heading}>Categories</h2>
      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className={styles.link}>
            <div className={styles.categoryCard}>
              <Image src={category.image} alt={category.name} width={150} height={150} className={styles.categoryImage} />
              <h3 className={styles.categoryName}>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      </div>
      <AnotherSub/>
    </div>
  );
};

export default SubHome;
