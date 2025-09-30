"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    badge?: string;
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    images?: {
        src: string;
        alt: string;
    }[];
}

export const HeroSection = ({
    badge = "🏥 Walk-in Medical Care Center",
    heading = "ACE DIAGNOSTICS",
    description = "A fully equipped and professionally run medical facility providing state-of-the-art diagnosis and evaluation of healthcare needs. Established in 2002 with complete diagnostic facilities & specialty clinics.",
    buttons = {
        primary: {
            text: "View Services",
            url: "#services",
        },
        secondary: {
            text: "Contact Us",
            url: "#contact",
        },
    },
    images = [
        { src: "/images/fairview/lobby.jpg", alt: "ACE Diagnostics Lobby" },
        { src: "/images/fairview/lobby reception.jpg", alt: "Lobby Reception Area" },
        { src: "/images/fairview/clinical chemistry.jpg", alt: "Clinical Chemistry Laboratory" },
        { src: "/images/fairview/hematology.jpg", alt: "Hematology Department" },
        { src: "/images/fairview/extraction room.jpg", alt: "Sample Extraction Room" },
        { src: "/images/fairview/waiting area.jpg", alt: "Patient Waiting Area" },
        { src: "/images/fairview/lobby lounge.jpg", alt: "Lobby Lounge" },
    ],
}: HeroProps) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [ images.length ]);

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto p-4 mt-8">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    {/* Text */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge variant="outline">
                                {badge}
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                        )}
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl font-zapfhumnst">
                            {heading}
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <Link href={buttons.secondary.url}>
                                        {buttons.secondary.text}
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Image Slideshow */}
                    <div className="relative h-96 w-full overflow-hidden rounded-md">
                        {images.map((img, index) => (
                            <Image
                                width={1024}
                                height={576}
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
