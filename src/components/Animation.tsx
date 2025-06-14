import React, { useState, useEffect, useRef } from 'react';
import {
    commercialVideos,
    passengerVideos,
    vehicleShowcaseText,
    passengerIcons,
    commercialIcons,
} from '../../data/data';

const Animation = () => {
    const [currentSection, setCurrentSection] = useState<'passenger' | 'commercial' | 'next'>('passenger');
    const [selectedPassengerVideo, setSelectedPassengerVideo] = useState(0);
    const [selectedCommercialVideo, setSelectedCommercialVideo] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);



    const containerRef = useRef<HTMLDivElement>(null);
    const passengerVideoRef = useRef<HTMLVideoElement>(null);
    const commercialVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const elementHeight = rect.height;
                const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight)));
                setScrollProgress(progress);

                if (progress < 0.33) {
                    setCurrentSection('passenger');
                } else if (progress < 0.66) {
                    setCurrentSection('commercial');
                } else {
                    setCurrentSection('next');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const togglePlayback = () => {
        const videoRef = currentSection === 'passenger' ? passengerVideoRef : commercialVideoRef;
        if (videoRef.current) {
            if (isPaused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPaused(!isPaused);
        }
    };

    const currentPassengerVideo = passengerVideos[selectedPassengerVideo];
    const currentCommercialVideo = commercialVideos[selectedCommercialVideo];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center">
                <div className="text-center max-w-6xl px-4">
                    <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                        {vehicleShowcaseText.heroHeadingLine1}{' '}
                        <span className="font-bold text-white">{vehicleShowcaseText.heroHighlight}</span>
                        <br />
                        {vehicleShowcaseText.heroHeadingLine2}
                    </h1>
                </div>
            </div>

            {/* Interactive Section */}
            <div ref={containerRef} className="relative min-h-[300vh]">
                <div className="sticky top-0 h-screen flex">
                    {/* Left Panel */}
                    <div className="w-1/2 flex">
                        <div className="w-1 bg-gray-800 relative">
                            <div
                                className="w-full bg-blue-500 transition-all duration-300"
                                style={{ height: `${scrollProgress * 100}%` }}
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-center px-12">
                            {/* Passenger Vehicles */}
                            <div
                                className={`mb-16 cursor-pointer transition-all duration-500 ${currentSection === 'passenger' ? 'opacity-100' : 'opacity-30'
                                    }`}
                                onClick={() => setCurrentSection('passenger')}
                            >
                                <h2 className="text-4xl md:text-5xl font-light mb-4">
                                    {vehicleShowcaseText.passengerSectionTitle}
                                </h2>
                                <p className="text-xl text-blue-400 whitespace-pre-line">
                                    {vehicleShowcaseText.passengerSectionDescription}
                                </p>
                            </div>

                            {/* Commercial Vehicles */}
                            <div
                                className={`cursor-pointer transition-all duration-500 ${currentSection === 'commercial' ? 'opacity-100' : 'opacity-30'
                                    }`}
                                onClick={() => setCurrentSection('commercial')}
                            >
                                <h2 className="text-4xl md:text-5xl font-light mb-4">
                                    {vehicleShowcaseText.commercialSectionTitle}
                                </h2>
                                <p className="text-xl text-gray-400 whitespace-pre-line">
                                    {vehicleShowcaseText.commercialSectionDescription}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-1/2 flex items-center justify-center p-12">
                        {currentSection === 'next' ? (
                            <div className="text-center">
                                <h2 className="text-4xl font-light mb-8">
                                    {vehicleShowcaseText.nextSectionTitle}
                                </h2>
                                <p className="text-xl text-gray-400">
                                    {vehicleShowcaseText.nextSectionDescription}
                                </p>
                            </div>
                        ) : (
                            <div className="relative w-full max-w-3xl">
                                {/* Video Preview */}
                                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-8">
                                    {currentSection === 'passenger' ? (
                                        <video
                                            ref={passengerVideoRef}
                                            key={currentPassengerVideo.id}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            <source src={currentPassengerVideo.src} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <video
                                            ref={commercialVideoRef}
                                            key={currentCommercialVideo.id}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                        >
                                            <source src={currentCommercialVideo.src} type="video/mp4" />
                                        </video>
                                    )}
                                </div>

                                {/* Video Navigation with Icons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-6">
                                        {(currentSection === 'passenger' ? passengerVideos : commercialVideos).map(
                                            (video, index) => {
                                                const isPassenger = currentSection === 'passenger';
                                                const isSelected = isPassenger
                                                    ? selectedPassengerVideo === index
                                                    : selectedCommercialVideo === index;
                                                const icon = isPassenger
                                                    ? passengerIcons[index]
                                                    : commercialIcons[index];

                                                return (
                                                    <button
                                                        key={video.id}
                                                        onClick={() =>
                                                            isPassenger
                                                                ? setSelectedPassengerVideo(index)
                                                                : setSelectedCommercialVideo(index)
                                                        }
                                                        className="flex flex-col items-center space-y-2 group"
                                                    >
                                                        <img
                                                            src={icon.src}
                                                            alt={icon.title}
                                                            className={`w-12 h-12 object-contain transition-transform duration-300 ${isSelected
                                                                ? 'scale-110'
                                                                : 'opacity-70 group-hover:opacity-100'
                                                                }`}
                                                        />
                                                        <span
                                                            className={`text-sm transition-colors duration-300 ${isSelected
                                                                ? 'text-white'
                                                                : 'text-gray-400 group-hover:text-gray-300'
                                                                }`}
                                                        >
                                                            {video.title}
                                                        </span>
                                                    </button>
                                                );
                                            }
                                        )}
                                    </div>

                                    {/* video Button */}
                                    <button
                                        onClick={togglePlayback}
                                        className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                                    >
                                        {isPaused ? (
                                            // ▶️ Play Icon
                                            <div className="w-1 h-2 border-t-4 border-b-4 border-l-6 border-transparent border-l-white ml-1" />
                                        ) : (
                                            // ⏸️ Pause Icon
                                            <div className="flex space-x-1">
                                                <div className="w-1 h-3 bg-white" />
                                                <div className="w-1 h-3 bg-white" />
                                            </div>
                                        )}
                                    </button>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animation;
