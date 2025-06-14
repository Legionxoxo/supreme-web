export const heroData = {
    subheading: "Driven by performance",
    headingStart: "Soft trims and",
    highlightedText: "NVH solutions",
    headingEnd: "for seamless rides",
};

export interface VideoData {
    id: string;
    src: string;
    title: string;
}

export interface ImageData {
    id: string;
    src: string;
    title: string;
}

export const passengerVideos: VideoData[] = [
    { id: "p1", src: "/videos/p-1.mp4", title: "Complete body" },
    { id: "p2", src: "/videos/p-2.mp4", title: "Front" },
    { id: "p3", src: "/videos/p-3.mp4", title: "Cabin" },
    { id: "p4", src: "/videos/p-4.mp4", title: "Trunk" },
    { id: "p5", src: "/videos/p-5.mp4", title: "Exterior" },
];

export const passengerIcons: ImageData[] = [
    { id: "p1", src: "/icons/complete-body.png", title: "Complete body" },
    { id: "p2", src: "/icons/front.png", title: "Front" },
    { id: "p3", src: "/icons/cabin.png", title: "Cabin" },
    { id: "p4", src: "/icons/trunk.png", title: "Trunk" },
    { id: "p5", src: "/icons/exterior.png", title: "Exterior" },
];

export const commercialVideos: VideoData[] = [
    { id: "c1", src: "/videos/t-1.mp4", title: "Complete Body" },
    { id: "c2", src: "/videos/t-2.mp4", title: "Engine" },
    { id: "c3", src: "/videos/t-3.mp4", title: "Cabin" },
];

export const commercialIcons: ImageData[] = [
    { id: "p1", src: "/icons/complete-body.png", title: "Complete body" },
    { id: "p2", src: "/icons/front.png", title: "Engine" },
    { id: "p3", src: "/icons/cabin.png", title: "Cabin" },
];
export const vehicleShowcaseText = {
    heroHeadingLine1: "Evolving the drive with",
    heroHighlight: "360-degree",
    heroHeadingLine2: "comprehensive solutions",

    passengerSectionTitle: "Passenger vehicles",
    passengerSectionDescription:
        "Revving up innovation from\ninterior to exterior.",

    commercialSectionTitle: "Commercial vehicles",
    commercialSectionDescription:
        "Advancing engineering\nfor heavy-duty vehicles.",

    nextSectionTitle: "Next Component",
    nextSectionDescription: "Additional content here...",
};

export const contactInfo = {
    address: "110, 16th Road, Chembur,",
    address2: "Mumbai - 400071",
    phone: "+91 22 25208822",
    email: "info@supremegroup.co.in",
};

export const footerData = {
    logoSrc: "/supreme_logo.png",
    bgImageSrc: "/footer-bg.svg",
    columns: [
        {
            title: "APPLICATIONS",
            links: [
                "Apparel",
                "Automotive",
                "Filtration",
                "Customised Solutions",
            ],
        },
        {
            title: "COMPANY",
            links: [
                "Who We Are",
                "Global Competency",
                "Innovation",
                "ESG Impact",
            ],
        },
        {
            title: "MORE",
            links: ["Contact Us", "Careers"],
        },
        {
            title: "FOLLOW US",
            links: ["LinkedIn"],
        },
    ],
    copyright: "©2024. All Rights Reserved.",
    address: "Supreme House, 110, 16th Road, Chembur, Mumbai -400071",
};
