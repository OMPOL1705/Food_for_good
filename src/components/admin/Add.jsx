import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setProductData({
            ...productData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('category', productData.category);
        formData.append('image', productData.image);
        console.log(formData);

        try {
            await axios.post('http://localhost:8080/api/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Reset form fields after successful submission
            console.log(productData);
            setProductData({
                name: '',
                description: '',
                price: '',
                category: '',
                image: null
            });
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('An error occurred while adding the product. Please try again.');
        }
    };

  return (
    <>
    <h1 className='text-center text-5xl my-4' style={{marginBottom:"10px", marginTop:"10px"}}>Add new item</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-5">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select cuisine</label>
            <select id="category" name="category" value={productData.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Indian</option>
                <option>Mexican</option>
                <option>Chinese</option>
                <option>French</option>
            </select>
        </div>
        <div className="mb-5">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of food</label>
            <input type="text" id="name" name="name" value={productData.name} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="description" name="description" value={productData.description} onChange={handleChange} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add here..." required></textarea>
        </div>
        <div className="mb-5">
            <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price:</label>
            <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1000" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload image</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="image" name="image" onChange={handleImageChange} type="file" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </form>
    </>
  )
}

export default Add
