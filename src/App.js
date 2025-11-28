import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import essential components (Navbar/Loader are always present)
import Navbar from './components/Navbar.jsx'; 
import LoadingSpinner from './components/LoadingSpinner.jsx'; 

// --- LAZY LOADING: This tells React to wait for the component's code to load ---
// This is the core fix for the universal loader
const LazyHome = lazy(() => import('./pages/Home.jsx'));
const LazyAbout = lazy(() => import('./pages/About.jsx'));
const LazyBlog = lazy(() => import('./pages/Blog.jsx'));
const LazyContact = lazy(() => import('./pages/Contact.jsx'));
const LazyPortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'));

const App = () => {
    return (
        <BrowserRouter>
            {/* Navbar stays outside the Suspense wrapper so it loads instantly */}
            <Navbar />
            
            {/* Suspense displays the spinner while the components are loading */}
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    {/* Home Page (Your main scrollable dashboard) */}
                    <Route path="/" element={<LazyHome />} />
                    
                    {/* Dedicated Content Pages */}
                    <Route path="/about" element={<LazyAbout />} />
                    <Route path="/portfolio" element={<LazyPortfolioPage />} />
                    <Route path="/work" element={<LazyPortfolioPage />} />
                    <Route path="/blog" element={<LazyBlog />} />
                    <Route path="/contact" element={<LazyContact />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;