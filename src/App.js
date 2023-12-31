
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import CategoryMenu from './components/CategoryMenu';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import ProductPage from './components/ProductPage';

function App() {
  const [categories, setCategories] = useState([
    'Category A',
    'Category B',
    'Category C',
  ]);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      category: 'Category A',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      category: 'Category B',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      category: 'Category A',
      price: 300,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      category: 'Category C',
      price: 400,
    },
  ];

  return (
    <Router>
      <div>
        <div>
          <Header loggedIn={loggedIn} />
          {loggedIn ? (
            <LogoutButton onLogout={handleLogout} />
          ) : (
            <LoginButton onLogin={handleLogin} />
          )}
        </div>
        <Body className="container" products={products} categories={categories} handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory}>
                </Body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

