import React, { useState } from 'react';
import './productcomponents.css';
import home from '../assets/HOME.png'
import jacket from '../assets/e1-desk.webp'
import tshirt from '../assets/tshirt.webp'
import trouser from '../assets/trouser.webp'
import jeans from '../assets/jeans.webp'
import shoes from '../assets/footwear.webp'

const products = {
    newLaunch: [
        { id: 1, image: home, title: 'Home Decor' },
        { id: 2, image: jacket, title: 'Jackets' },
    ],
    trending: [
        { id: 3, image: tshirt, title: 'Tshirt & Polo' },
        { id: 4, image: trouser, title: 'Trouser' }
    ],
    latest: [
        { id: 5, image: jeans, title: 'Jeans' },
        { id: 6, image: shoes, title: 'Footwear' }
    ]
};

const ProductComponent = () => {
    const [activeCategory, setActiveCategory] = useState('newLaunch');

    return (
        <div className="product-component">
            <div className="categories">
                <button onClick={() => setActiveCategory('newLaunch')} className={activeCategory === 'newLaunch' ? 'active' : ''}>New Launch</button>
                <button onClick={() => setActiveCategory('trending')} className={activeCategory === 'trending' ? 'active' : ''}>Trending</button>
                <button onClick={() => setActiveCategory('latest')} className={activeCategory === 'latest' ? 'active' : ''}>Latest Product</button>
            </div>
            <div className="product-list">
                {products[activeCategory].map(product => (
                    <div key={product.id} className="product-item">
                        <img className='list-img' src={product.image} alt={product.title} />
                        <h3 className='product-title'>{product.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductComponent;
