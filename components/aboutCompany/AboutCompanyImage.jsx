import Image from 'next/image';
import React from 'react';
import img from "@/public/image/companyAbout.png"

const AboutCompanyImage = () => {
    return (
        <div>
            <Image src={img} alt='next growth digital'/>
        </div>
    );
};

export default AboutCompanyImage;