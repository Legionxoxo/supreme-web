import React from 'react';
import { heroData } from '../../data/data';


const Hero = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-black text-white">
            <div className="w-11/12 max-w-[660px] text-center space-y-4">
                <p className="text-[22px] font-extralight">{heroData.subheading}</p>
                <h2 className="text-4xl md:text-5xl font-thin leading-tight">
                    <span className="font-normal">
                        {heroData.headingStart}{" "}
                        <span className="text-highlight font-normal">
                            {heroData.highlightedText}
                        </span>
                    </span>
                    <br className="hidden md:block" />
                    <span> {heroData.headingEnd}</span>
                </h2>
            </div>
        </div>
    );
};

export default Hero;
