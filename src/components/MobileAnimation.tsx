'use client';
import React from 'react';

interface VideoData {
    src: string;
    title: string;
}

interface VehicleShowcaseProps {
    vehicleShowcaseText: {
        passengerSectionTitle: string;
        passengerSectionDescription: string;
        commercialSectionTitle: string;
        commercialSectionDescription: string;
    };
    passengerVideos: VideoData[];
    commercialVideos: VideoData[];
    selectedPassengerVideo: number;
    setSelectedPassengerVideo: (index: number) => void;
    selectedCommercialVideo: number;
    setSelectedCommercialVideo: (index: number) => void;
}

const MobileAnimation: React.FC<VehicleShowcaseProps> = ({
    vehicleShowcaseText,
    passengerVideos,
    commercialVideos,
    selectedPassengerVideo,
    setSelectedPassengerVideo,
    selectedCommercialVideo,
    setSelectedCommercialVideo,
}) => {
    return (
        <div className="flex flex-col gap-20 p-6">
            {/* Passenger Section */}
            <div className="text-center">
                <h2 className="text-xl font-semibold text-secondary mb-2">
                    {vehicleShowcaseText.passengerSectionTitle}
                </h2>
                <p className="text-sm text-white mb-4 w-[160px] mx-auto leading-snug">
                    {vehicleShowcaseText.passengerSectionDescription}
                </p>
                <div className="aspect-video w-full rounded-lg overflow-hidden my-4">
                    <video
                        className="w-full h-full object-cover"
                        src={passengerVideos[selectedPassengerVideo].src}
                        muted
                        autoPlay
                    />
                </div>
                <p className="text-white text-base font-medium mb-8">
                    {passengerVideos[selectedPassengerVideo].title}
                </p>
                <div className="flex items-center justify-center gap-2">
                    {passengerVideos.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedPassengerVideo(i)}
                            className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${selectedPassengerVideo === i
                                ? 'w-6 bg-secondary'
                                : 'w-2 bg-secondary/70'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Commercial Section */}
            <div className="text-center">
                <h2 className="text-xl font-semibold text-secondary mb-2">
                    {vehicleShowcaseText.commercialSectionTitle}
                </h2>
                <p className="text-sm text-white mb-4 w-[160px] mx-auto leading-snug">
                    {vehicleShowcaseText.commercialSectionDescription}
                </p>
                <div className="aspect-video w-full rounded-lg overflow-hidden my-2">
                    <video
                        className="w-full h-full object-cover"
                        src={commercialVideos[selectedCommercialVideo].src}
                        muted
                        autoPlay
                    />
                </div>
                <p className="text-white text-base font-medium mb-8">
                    {commercialVideos[selectedCommercialVideo].title}
                </p>
                <div className="flex items-center justify-center gap-2 mb-8">
                    {commercialVideos.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedCommercialVideo(i)}
                            className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${selectedCommercialVideo === i
                                ? 'w-6 bg-secondary'
                                : 'w-2 bg-secondary/70'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileAnimation;
