
import React from 'react';

type Props = {
    video: { id: string; src: string; title: string };
    icons: { src: string; title: string }[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    isPaused: boolean;
    togglePlayback: () => void;
};

const PassengerSection = ({
    video,
    icons,
    selectedIndex,
    setSelectedIndex,
    videoRef,
    isPaused,
    togglePlayback,
}: Props) => {
    return (
        <div className="relative w-full max-w-3xl">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-8">
                <video
                    ref={videoRef}
                    key={video.id}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src={video.src} type="video/mp4" />
                </video>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex space-x-6">
                    {icons.map((icon, index) => {
                        const isSelected = selectedIndex === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className="flex flex-col items-center space-y-2 group"
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.title}
                                    className={`w-16 h-16 object-contain transition-transform duration-300 ${isSelected ? 'scale-110' : 'opacity-70 group-hover:opacity-100'
                                        }`}
                                />
                                <span
                                    className={`text-sm transition-colors duration-300 ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                                        }`}
                                >
                                    {video.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <button
                    onClick={togglePlayback}
                    className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10"
                >
                    {isPaused ? (
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                    ) : (
                        <div className="flex space-x-[3px]">
                            <div className="w-[3px] h-3 bg-white" />
                            <div className="w-[3px] h-3 bg-white" />
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PassengerSection;
