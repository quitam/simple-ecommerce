import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function App() {
    const [theme] = useThemeHook();
    return (
        <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product-details/:productId" element={<ProductDetails />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
