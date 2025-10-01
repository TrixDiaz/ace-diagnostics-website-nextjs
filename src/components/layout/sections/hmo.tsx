"use client";

import Image from "next/image";

interface SponsorsProps {
    img: string;
    alt: string;
}

const sponsors: SponsorsProps[] = [
    { img: "/images/hmo/maxicare.jpg", alt: "Maxicare" },
    { img: "/images/hmo/philcare.png", alt: "PhilCare" },
    { img: "/images/hmo/medocare.png", alt: "Medocare" },
    { img: "/images/hmo/icare.png", alt: "iCare" },
    { img: "/images/hmo/fortune.png", alt: "Fortune Care" },
    { img: "/images/hmo/valuecare.png", alt: "ValueCare" },
    { img: "/images/hmo/kaiser.jpg", alt: "Kaiser" },
    { img: "/images/hmo/amaphil.avif", alt: "Amaphil" },
    { img: "/images/hmo/flexicare.webp", alt: "Flexicare" },
    { img: "/images/hmo/cocolife.png", alt: "Cocolife" },
    { img: "/images/hmo/intellicare.png", alt: "Intellicate" },
    { img: "/images/hmo/eastwest.png", alt: "Eastwest" },
    { img: "/images/hmo/apex logo.jpg", alt: "Apex" },
    { img: "/images/hmo/sunlife.png", alt: "Sunlife" },
    { img: "/images/hmo/medasia.jpg", alt: "MedAsia" },
    { img: "/images/hmo/mega_ asianlife .png", alt: "Mega Asian Life" },
    { img: "/images/hmo/mega_amaphil logo.png", alt: "Mega Amaphil" },
    { img: "/images/hmo/mega_avega.png", alt: "Mega Avega" },
    { img: "/images/hmo/mega_caritas.png", alt: "Mega Caritas" },
    { img: "/images/hmo/mega_cocolife.png", alt: "Mega Cocolife" },
    { img: "/images/hmo/mega_eastwest.png", alt: "Mega Eastwest" },
    { img: "/images/hmo/mega_generali.png", alt: "Mega Generali" },
    { img: "/images/hmo/mega_hmi.png", alt: "Mega HMI" },
    { img: "/images/hmo/mega_insular.png", alt: "Mega Insular" },
    { img: "/images/hmo/mega_intellicare.png", alt: "Mega Intellicare" },
    { img: "/images/hmo/mega_medicard.jpg", alt: "Mega Medicard" },
    { img: "/images/hmo/mega_medilink.png", alt: "Mega Medilink" },
    { img: "/images/hmo/mega_valucare.png", alt: "Mega Valucare" },
    { img: "/images/hmo/mega_vso.png", alt: "Mega VSO" },
];

// Duplicate array to make loop
const loopedSponsors = [ ...sponsors, ...sponsors ];

export default function HMOSection() {
    return (
        <section id="sponsors" className="max-w-6xl mx-auto py-16 sm:py-24 overflow-hidden bg-transparent">
            <h2 className="text-lg md:text-2xl text-center mb-8">HMO Partners</h2>

            <div className="relative w-full overflow-hidden">
                <div
                    className="flex animate-slide gap-8 md:gap-12"
                    style={{ animationDuration: "15s" }}
                >
                    {loopedSponsors.map(({ img, alt }, index) => (
                        <div
                            key={`${alt}-${index}`}
                            className="flex items-center justify-center min-w-[100px] md:min-w-[160px] flex-shrink-0"
                        >
                            <Image
                                src={img}
                                alt={alt}
                                width={140}
                                height={70}
                                className="object-contain max-h-[70px] w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
