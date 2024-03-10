import {React, useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from "axios";
import MenuItem from './MenuItem';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);

    const fetchProductsByCategory = async (category) => {
        try {
        const response = await axios.get(`https://food-for-good-backend-ukib.vercel.app/api/productget?category=${category}`);
        setProducts(response.data.products);
        
        } catch (error) {
        console.error('Error fetching products by category:', error);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        fetchProductsByCategory(category);
    };
  return (
    <>
        <Navbar />
    
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button type="button" onClick={() => handleCategoryClick('Indian')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Indian</button>
            <button type="button" onClick={() => handleCategoryClick('Mexican')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Mexican</button>
            <button type="button" onClick={() => handleCategoryClick('Chinese')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Chinese</button>
            <button type="button" onClick={() => handleCategoryClick('French')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">French</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{margin:"0px 10vw 6vh"}}>
            {products.map((product)=>{
                return <div className="col-md-3">
                     <MenuItem key={product._id} product={product}/>
                </div>
            })}
        </div>

        <Footer />
    </>
  )
}

export default Menu
