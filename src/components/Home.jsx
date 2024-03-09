import Navbar from './Navbar';
import React from 'react';
import img1 from '../assets/3A0A2961.jpg';
import img2 from '../assets/3A0A2926.jpg';
import img3 from '../assets/3A0A3005.jpg';
import front from '../assets/DJI_0003.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        fade: true,  
    };
    return (
        <>
            <Navbar />
            <img className="w-full max-w-full absolute top-0 left-0" src={front} alt="imagedescription" style={{zIndex:"-1", height:"100vh"}}/>
            <div style={{display:"flex", flexDirection:"column", gap:"20vh", marginTop:"95vh"}}>
                <div style={{marginLeft:"auto", marginRight:"auto" ,display:"flex", flexWrap:"wrap", gap:"50px"}}> 
                    <img className="h-auto max-w-lg rounded-lg" src="https://images.squarespace-cdn.com/content/v1/5faae45cf877175a51267735/f6aad9c1-8c95-4a58-bd5d-e1ba78b45bc8/IMG04412-squashed.jpg?format=1500w" alt="imagedescription" />
                    <div style={{paddingLeft:"30px", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                        <h1 className='white-space:pre-wrap;' style={{fontSize:"70px"}}>Order</h1>
                        <h1 className='white-space:pre-wrap;' style={{fontSize:"70px"}}>Online !</h1>
                        <h5 style={{fontSize:"30px"}}>SKIP THE APPS AND ORDER</h5>
                        <h5 style={{fontSize:"30px"}}>STRAIGHT THROUGH US</h5>
                    <button type="button" className="text-white bg-gradient-to-br p-6 mt-4 from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Order Now</button>
                    </div>
                </div>
            
                
                <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">eat together</h1>
                        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Every plate brings you right back to those old traditions- mangia!</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                 Menu
                                </span>
                            </button>
                        </div>
                    </div>
                </section>


                <div className="slideshow-wrapper">
                    <Slider {...settings} className="slideshow-slider" style={{width:"65vw", margin:"0 auto"}}>
                        <div>
                            <img src={img1} style={{ borderRadius: "10px"}} alt="Image1" />
                        </div>
                        <div>
                            <img src={img2} style={{ borderRadius: "10px"}} alt="Image2" />
                        </div>
                        <div>
                            <img src={img3} style={{ borderRadius: "10px"}} alt="Image3" />
                        </div>
                    </Slider>
                    <div className="slideshow-text my-4">
                        <h1 style={{textAlign: "center"}} className="mb-4 text-4xl font-bold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">gallery</h1>
                    </div>
                    <div class="text-center" style={{marginTop:"30px"}}>
                        <Link to="/gallery">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>

            <Footer />
            </div>
        </>
    )
}

export default Home
