import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import img1 from '../assets/3A0A2926.jpg';
import img2 from '../assets/3A0A2961.jpg';
import img3 from '../assets/3A0A3005.jpg';
import img4 from '../assets/PICO-WEB-157.jpeg';
import img5 from '../assets/Piccolo-41.jpg';
import img6 from '../assets/DJI_0003.jpg';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    function chunk(array, size) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    }
    return (
        <>
            <Navbar />
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4" style={{margin:"10px 150px 60px 150px"}}>
                {chunk(images, 3).map((imageGroup, groupIndex) => (
                    <div key={groupIndex} class="grid gap-4">
                        {imageGroup.map((image, index) => (
                            <div key={index}>
                                <img class="h-auto max-w-full rounded-lg" src={image} alt="" />
                            </div>
                        ))}
                    </div>
                ))}
                {chunk(images, 3).map((imageGroup, groupIndex) => (
                    <div key={groupIndex} class="grid gap-4">
                        {imageGroup.map((image, index) => (
                            <div key={index}>
                                <img class="h-auto max-w-full rounded-lg" src={image} alt="" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default Gallery
