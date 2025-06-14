import Image from "next/image";
import { footerData } from "../../data/data";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-white to-[#d2e7fb] text-black overflow-hidden px-4 pt-24 pb-10 ">
            {/* Background Image Right */}
            <div className="absolute right-0 top-0 h-full w-1/2 max-w-[400px] opacity-10 pointer-events-none hidden md:block">
                <Image
                    src={footerData.logoSrc}
                    alt="Background"
                    className="object-contain"
                    height={50}
                    width={50}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto md:px-20 lg:px-32 xl:px-40 flex flex-col space-y-12">

                {/* Logo (above the grid, left-aligned) */}
                <div className="flex justify-start lg:ml-8">
                    <Image
                        src={footerData.logoSrc}
                        alt="Supreme Group"
                        width={180}
                        height={50}
                    />
                </div>

                {/* Grid Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-9 w-full text-left md:text-center">
                    {footerData.columns.map((col, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-5">{col.title}</h4>
                            <ul className="space-y-4 text-sm font-light text-black/70">
                                {col.links.map((link, idx) => (
                                    <li key={idx}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Info */}
                <div className="text-sm text-black/70 flex flex-col md:flex-row justify-between gap-2 w-full max-w-5xl pt-6 border-t border-gray-300 mt-4">
                    <p className="text-center md:text-left md:py-4 max-md:pt-4">{footerData.copyright}</p>
                    <p className="text-center md:text-right py-4  text-pretty">{footerData.address}</p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
