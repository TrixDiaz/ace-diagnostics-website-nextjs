"use client";

import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

interface GalleryProps {
    images?: GalleryImage[];
    title?: string;
    description?: string;
}

const defaultGalleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "/images/fairview/lobby.jpg",
        alt: "Main Lobby",
        title: "Main Lobby",
        description: "Welcoming entrance to our state-of-the-art facility"
    },
    {
        id: 2,
        src: "/images/fairview/lobby reception.jpg",
        alt: "Lobby Reception",
        title: "Lobby Reception",
        description: "Professional reception area for patient check-in"
    },
    {
        id: 3,
        src: "/images/fairview/lobby lounge.jpg",
        alt: "Lobby Lounge",
        title: "Lobby Lounge",
        description: "Comfortable lounge area for patients and visitors"
    },
    {
        id: 4,
        src: "/images/fairview/lobby loungee 2.jpg",
        alt: "Lobby Lounge Area",
        title: "Lobby Lounge Area",
        description: "Spacious seating area with modern amenities"
    },
    {
        id: 5,
        src: "/images/fairview/lobby lounge 3.jpg",
        alt: "Extended Lounge",
        title: "Extended Lounge",
        description: "Additional comfortable seating for our guests"
    },
    {
        id: 6,
        src: "/images/fairview/waiting area.jpg",
        alt: "Waiting Area",
        title: "Waiting Area",
        description: "Comfortable waiting area with modern facilities"
    },
    {
        id: 7,
        src: "/images/fairview/waiting area clinic 1 and 2.jpg",
        alt: "Clinic Waiting Area",
        title: "Clinic Waiting Area",
        description: "Dedicated waiting space for clinic services"
    },
    {
        id: 8,
        src: "/images/fairview/waiting area 1 and 2 last.jpg",
        alt: "Patient Waiting Area",
        title: "Patient Waiting Area",
        description: "Well-appointed waiting area for patient comfort"
    },
    {
        id: 9,
        src: "/images/fairview/extraction room.jpg",
        alt: "Extraction Room",
        title: "Extraction Room",
        description: "Sterile environment for blood sample collection"
    },
    {
        id: 10,
        src: "/images/fairview/hematology.jpg",
        alt: "Hematology Laboratory",
        title: "Hematology Laboratory",
        description: "Advanced equipment for blood analysis and testing"
    },
    {
        id: 11,
        src: "/images/fairview/clinical chemistry.jpg",
        alt: "Clinical Chemistry Lab",
        title: "Clinical Chemistry Lab",
        description: "State-of-the-art chemical analysis laboratory"
    },
    {
        id: 12,
        src: "/images/fairview/clinical microscopy.jpg",
        alt: "Clinical Microscopy Lab",
        title: "Clinical Microscopy Lab",
        description: "Precision microscopy for detailed analysis"
    },
    {
        id: 13,
        src: "/images/fairview/accounting.jpg",
        alt: "Accounting Department",
        title: "Accounting Department",
        description: "Professional billing and accounting services"
    }
];

const GalleryComponent = ({
    images = defaultGalleryImages,
    title = "Fairview Facility Gallery",
    description = "Take a virtual tour of our Fairview facility featuring modern laboratories, comfortable waiting areas, and professional service spaces designed with your comfort and care in mind."
}: GalleryProps) => {

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto max-w-7xl px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <ScrollArea className="h-[600px] w-full rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                        {images.map((image) => (
                            <Dialog key={image.id}>
                                <DialogTrigger asChild>
                                    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                            <div className="absolute inset-0 flex items-end p-4">
                                                <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                    <h3 className="font-semibold text-base text-white drop-shadow-lg">
                                                        {image.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[90vh]">
                                    <DialogTitle className="text-2xl font-bold text-foreground">
                                        {image.title}
                                    </DialogTitle>
                                    <div className="space-y-4">
                                        <div className="relative aspect-video overflow-hidden rounded-lg">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-contain"
                                                sizes="90vw"
                                            />
                                        </div>
                                        <p className="text-muted-foreground">
                                            {image.description}
                                        </p>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </ScrollArea>
            </main>

            <FooterSection />
        </div>
    );
};

export default function GalleryPage() {
    return <GalleryComponent />;
}

// Export the component for reuse with custom props
export { GalleryComponent, type GalleryImage, type GalleryProps };