import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
    return (
        <section className='w-[40%]'>
            <Image src="/image/heroimage.png" alt="" width={450} height={450} />
        </section>
    );
};

export default HeroImage;