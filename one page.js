import React, { useState } from 'react';
import './styles.css';

const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 25.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Jeans',
    price: 59.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 99.99,
    image: 'https://via.placeholder.com/150'
  }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    setTotal(prevTotal => prevTotal + product.price);
  }

  return (
    <div className="App">
      <header>
        <h1>E-Commerce Website</h1>
        <nav>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#cart">Cart ({cart.length})</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="products">
          <h2>Products</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>${product.price.toFixed(2)}</h4>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>
        <section id="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>${product.price.toFixed(2)}</h4>
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
        </section>
      </main>
    </div>
  );
};

export default App;
