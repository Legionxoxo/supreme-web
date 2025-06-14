'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    commercialVideos,
    passengerVideos,
    vehicleShowcaseText,
    passengerIcons,
    commercialIcons,
} from '../../data/data';
import MobileAnimation from './MobileAnimation';
import HeroText from './HeroText';
import Image from 'next/image';

const Animation = () => {
    const [currentSection, setCurrentSection] = useState<'passenger' | 'commercial' | 'next'>('passenger');
    const [selectedPassengerVideo, setSelectedPassengerVideo] = useState(0);
    const [selectedCommercialVideo, setSelectedCommercialVideo] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [videoProgress, setVideoProgress] = useState(0);
    const currentPassengerVideo = passengerVideos[selectedPassengerVideo] || passengerVideos[0];
    const currentCommercialVideo = commercialVideos[selectedCommercialVideo] || commercialVideos[0];

    const passengerVideoRef = useRef<HTMLVideoElement>(null);
    const commercialVideoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll tracking and section switching
    useEffect(() => {
        if (!isMobile) {
            const handleScroll = () => {
                if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const elementHeight = rect.height;
                    const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight)));
                    setScrollPercent(progress);

                    if (progress < 0.4) {
                        setCurrentSection('passenger');
                    } else if (progress < 0.85) {
                        setCurrentSection('commercial');
                    } else {
                        setCurrentSection('next');
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isMobile]);

    // Sync video playback with current section
    useEffect(() => {
        if (currentSection === 'passenger') {
            passengerVideoRef.current?.play();
            commercialVideoRef.current?.pause();
        } else if (currentSection === 'commercial') {
            commercialVideoRef.current?.play();
            passengerVideoRef.current?.pause();
        }
    }, [currentSection, selectedPassengerVideo, selectedCommercialVideo]);

    // Add video progress tracking
    useEffect(() => {
        const updateProgress = () => {
            const videoRef = currentSection === 'passenger' ? passengerVideoRef : commercialVideoRef;
            if (videoRef.current) {
                const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setVideoProgress(progress);
            }
        };

        const videoRef = currentSection === 'passenger' ? passengerVideoRef : commercialVideoRef;
        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', updateProgress);
            return () => videoRef.current?.removeEventListener('timeupdate', updateProgress);
        }
    }, [currentSection, selectedPassengerVideo, selectedCommercialVideo]);

    const togglePlayback = () => {
        const videoRef = currentSection === 'passenger' ? passengerVideoRef : commercialVideoRef;
        if (videoRef.current) {
            if (isPaused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPaused(!isPaused);
            console.log('scrollPercent', scrollPercent)
        }
    };

    return (
        <div className="bg-black text-white">
            {/* Hero */}
            <div className='lg:hidden block'>
                <HeroText />
            </div>
            {/* Desktop layout */}
            {!isMobile && (
                <div ref={containerRef} className="relative min-h-[300vh] mt-100">
                    <div className="sticky top-0 flex flex-col">
                        {/* Animated Text (now part of sticky layout) */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center max-w-6xl mx-auto px-4"
                        >
                            <h1 className="text-3xl lg:text-5xl font-light leading-tight text-pretty">
                                {vehicleShowcaseText.heroHeadingLine1}{' '}
                                <span className="font-bold text-white">{vehicleShowcaseText.heroHighlight}</span>
                                <br />
                                {vehicleShowcaseText.heroHeadingLine2}
                            </h1>
                        </motion.div>

                        <div className="flex flex-1">
                            {/* Left Panel */}
                            <div className="w-1/2 flex pl-24">
                                <div className="flex items-start pl-12">
                                    <div className="relative w-[2px] h-[350px] bg-white/20 flex flex-col justify-between">
                                        <div
                                            className={`w-full h-1/2 transition-all duration-700 ease-in-out ${currentSection === 'passenger' ? 'bg-white' : 'bg-white/40'}`}
                                        />
                                        <div
                                            className={`w-full h-1/2 transition-all duration-700 ease-in-out ${currentSection === 'commercial' ? 'bg-white' : 'bg-white/40'}`}
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-between px-16">
                                    <div
                                        className={`cursor-pointer transition-all duration-500 ${currentSection === 'passenger' ? 'opacity-100' : 'opacity-30'
                                            }`}
                                        onClick={() => setCurrentSection('passenger')}
                                    >
                                        <h2 className="text-[32px] font-medium mb-2 mt-10">
                                            {vehicleShowcaseText.passengerSectionTitle}
                                        </h2>
                                        <p className="text-lg whitespace-pre-line">
                                            {vehicleShowcaseText.passengerSectionDescription}
                                        </p>
                                    </div>

                                    <div
                                        className={`cursor-pointer transition-all duration-500 ${currentSection === 'commercial' ? 'opacity-100' : 'opacity-30'
                                            }`}
                                        onClick={() => setCurrentSection('commercial')}
                                    >
                                        <h2 className="text-[32px] font-medium mb-2 md:-mt-60 lg:-mt-64 xl:-mt-80 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {vehicleShowcaseText.commercialSectionTitle}
                                        </h2>

                                        <p className="text-lg whitespace-pre-line">
                                            {vehicleShowcaseText.commercialSectionDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="w-1/2 flex items-center justify-center px-12 py-6">
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
                                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-8 pr-40">
                                            <video
                                                ref={currentSection === 'passenger' ? passengerVideoRef : commercialVideoRef}
                                                key={(currentSection === 'passenger'
                                                    ? currentPassengerVideo
                                                    : currentCommercialVideo).id}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                onEnded={() => {
                                                    const videoRef = currentSection === 'passenger' ? passengerVideoRef : commercialVideoRef;
                                                    if (videoRef.current) {
                                                        videoRef.current.pause();
                                                        setIsPaused(true);
                                                    }
                                                }}
                                            >
                                                <source
                                                    src={(currentSection === 'passenger'
                                                        ? currentPassengerVideo
                                                        : currentCommercialVideo).src}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>

                                        {/* Video Selector and Controls */}
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
                                                                <Image
                                                                    src={icon.src}
                                                                    alt={icon.title}
                                                                    className={`w-16 h-16 object-contain transition-transform duration-300 ${isSelected
                                                                        ? 'scale-110'
                                                                        : 'opacity-70 group-hover:opacity-100'
                                                                        }`}
                                                                />
                                                                <span
                                                                    className={`text-sm ${isSelected
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
                                            <button
                                                onClick={togglePlayback}
                                                className="relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer -mt-10"
                                            >
                                                {/* Progress Ring */}
                                                <div
                                                    className="absolute inset-0 rounded-full"
                                                    style={{
                                                        background: `conic-gradient(rgba(255,255,255,0.7) ${videoProgress}%, rgba(255,255,255,0.2) ${videoProgress}%)`,
                                                        width: '100%',
                                                        height: '100%'
                                                    }}
                                                />
                                                {/* Button Content */}
                                                <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center" style={{ width: '85%', height: '85%', margin: 'auto' }}>
                                                    {isPaused ? (
                                                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                                    ) : (
                                                        <div className="flex space-x-[3px]">
                                                            <div className="w-[3px] h-3 bg-white" />
                                                            <div className="w-[3px] h-3 bg-white" />
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Layout */}
            {
                isMobile && (
                    <MobileAnimation
                        vehicleShowcaseText={vehicleShowcaseText}
                        passengerVideos={passengerVideos}
                        commercialVideos={commercialVideos}
                        selectedPassengerVideo={selectedPassengerVideo}
                        setSelectedPassengerVideo={setSelectedPassengerVideo}
                        selectedCommercialVideo={selectedCommercialVideo}
                        setSelectedCommercialVideo={setSelectedCommercialVideo}
                    />
                )
            }
        </div >
    );
};

export default Animation;
