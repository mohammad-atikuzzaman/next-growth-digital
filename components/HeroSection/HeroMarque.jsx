import React from 'react';
import Marquee from "react-fast-marquee";

import { FaBitcoin } from "react-icons/fa";

const HeroMarque = () => {
    return (
        <Marquee className='container mx-auto mt-16' pauseOnHover={true}>
            <div className='ml-6 flex items-center gap-4 bg-purple-200 px-2 rounded-md text-gray-200'>
                <FaBitcoin className='text-2xl'/>
                <h2 className='text-3xl font-bold'>Coinbase</h2>
            </div>
            <div className='ml-6 flex items-center gap-4 bg-purple-200 px-2 rounded-md text-gray-200'>
                <FaBitcoin className='text-2xl'/>
                <h2 className='text-3xl font-bold'>Coinbase</h2>
            </div>
            <div className='ml-6 flex items-center gap-4 bg-purple-200 px-2 rounded-md text-gray-200'>
                <FaBitcoin className='text-2xl'/>
                <h2 className='text-3xl font-bold'>Coinbase</h2>
            </div>
            <div className='ml-6 flex items-center gap-4 bg-purple-200 px-2 rounded-md text-gray-200'>
                <FaBitcoin className='text-2xl'/>
                <h2 className='text-3xl font-bold'>Coinbase</h2>
            </div>
            <div className='ml-6 flex items-center gap-4 bg-purple-200 px-2 rounded-md text-gray-200'>
                <FaBitcoin className='text-2xl'/>
                <h2 className='text-3xl font-bold'>Coinbase</h2>
            </div>
            <div className='ml-6 flex items-center gap-4 bg-purple-200 px-2 rounded-md text-gray-200'>
                <FaBitcoin className='text-2xl'/>
                <h2 className='text-3xl font-bold'>Coinbase</h2>
            </div>
            
        </Marquee>
    );
};

export default HeroMarque;