import React, { useState } from 'react';
import logo from '../assets/logo.png';
import axios from "axios";
import { Link } from 'react-router-dom';

const Alogin = () => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://food-for-good-backend-ukib.vercel.app/api/adauth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/dashboard";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <>
      <div>
        <img src={logo} alt="Login" className="mx-auto w-60 h-auto" />
      </div>
      <div className="w-full max-w-sm pt-0 px-8 pb-8 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center mb-8">
        <Link to="/login" style={{padding:"10px 75px"}} className="bg-gray-500 border-r border-black hover:bg-blue-600 text-white font-semibold px-8 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400">User</Link>
        <Link to="/alogin" style={{padding:"10px 75px"}} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400">Admin</Link>
      </div>
      <div className="flex justify-center gap-4 mb-8">
        <Link to="/alogin" className="bg-blue-600 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">Login</Link>
        {/* <Link to="/asignup" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400">Signup</Link> */}
      </div>

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input type="email" name="email"
							onChange={handleChange}
							value={data.email}
							required id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" name="password"
							onChange={handleChange}
							value={data.password}
							required id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </form>
      </div>
    </>
  )
}

export default Alogin
