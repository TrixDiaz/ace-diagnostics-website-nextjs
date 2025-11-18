"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const sponsors = [
    { src: "/images/hmo/mega_amaphil logo.png", name: "Amaphil" },
    { src: "/images/hmo/apex logo.jpg", name: "Apex" },
    { src: "/images/hmo/mega_ asianlife .png", name: "AsianLife" },
    { src: "/images/hmo/mega_avega.png", name: "Avega" },
    { src: "/images/hmo/mega_caritas.png", name: "Caritas" },
    { src: "/images/hmo/mega_cocolife.png", name: "Cocolife" },
    { src: "/images/hmo/cocolife.png", name: "Cocolife" },
    { src: "/images/hmo/mega_eastwest.png", name: "EastWest" },
    { src: "/images/hmo/eastwest.png", name: "EastWest" },
    { src: "/images/hmo/flexicare.webp", name: "FlexiCare" },
    { src: "/images/hmo/fortune.png", name: "Fortune" },
    { src: "/images/hmo/mega_generali.png", name: "Generali" },
    { src: "/images/hmo/mega_hmi.png", name: "HMI" },
    { src: "/images/hmo/icare.png", name: "iCare" },
    { src: "/images/hmo/mega_intellicare.png", name: "Intellicare" },
    { src: "/images/hmo/mega_insular.png", name: "Insular" },
    { src: "/images/hmo/kaiser.jpg", name: "Kaiser" },
    { src: "/images/hmo/maxicare.jpg", name: "Maxicare" },
    { src: "/images/hmo/medasia.jpg", name: "Medasia" },
    { src: "/images/hmo/medicare.jpg", name: "Medicare" },
    { src: "/images/hmo/mega_medicard.jpg", name: "Medicard" },
    { src: "/images/hmo/mega_medilink.png", name: "Medilink" },
    { src: "/images/hmo/medocare.png", name: "Medocare" },
    { src: "/images/hmo/one health card.jpg", name: "One Health Card" },
    { src: "/images/hmo/philcare.png", name: "Philcare" },
    { src: "/images/hmo/sunlife.png", name: "Sunlife" },
    { src: "/images/hmo/mega_valucare.png", name: "Valucare" },
    { src: "/images/hmo/valuecare.png", name: "Valuecare" },
    { src: "/images/hmo/mega_vso.png", name: "VSO" },
];


export default function HMOSection() {
    return (
        <section id="sponsors" className="max-w-[75%] mx-auto py-12 sm:py-24">
            <h2 className="text-xl md:text-2xl text-center">
                HEALTH & INSURANCE PLANS
            </h2>
            <p className="text-normal text-center mb-6">We accept the following:</p>
            <div className="mx-auto">
                <Marquee
                    className="gap-12 [--duration:80s]"
                    pauseOnHover={true}
                >
                    {sponsors.map(({ src, name }, index) => (
                        <div
                            key={`${name}-${index}`}
                            className="flex items-center text-xl md:text-2xl font-medium"
                        >
                            <Image
                                src={src}
                                alt={`${name} logo`}
                                height={100}
                                width={100}
                                className="mr-4"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
