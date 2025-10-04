"use client";

import { ReactNode } from "react";
import { FairviewLaboratoryPricing } from "@/components/fairview-laboratory-pricing";
import { NovalichesLaboratoryPricing } from "@/components/novaliches-laboratory-pricing";
import { ValenzuelaLaboratoryPricing } from "@/components/valenzuela-laboratory-pricing";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

interface LocationProps {
    title: string;
    address: string;
    hours: string;
    mapUrl: string;
    mapEmbedUrl: string;
    laboratoryPricing: ReactNode;
}

const locations: LocationProps[] = [
    {
        title: "Ace Diagnostics, Fairview",
        address: "Fairview, Quezon City",
        hours: "Mon-Sat: 6:30 AM - 4:00 PM (Sunday: 6:30 AM - 3:00 PM)",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Diagnostics+Fairview+Quezon+City",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1362300027304!2d121.07077137643223!3d14.704887037910996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b09e7d6d7631%3A0x481c3ba178e14513!2sACE%20Diagnostics!5e0!3m2!1sen!2sph!4v1759390708913!5m2!1sen!2sph",
        laboratoryPricing: <FairviewLaboratoryPricing />
    },
    {
        title: "Ace Diagnostics Novaliches",
        address: "Novaliches, Quezon City",
        hours: "Mon-Sat: 7:00 AM - 5:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Diagnostics+Novaliches+Quezon+City",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.060926502421!2d121.03640377457484!3d14.709146574410994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0e133ba2629%3A0x73cab2ed9f0da93a!2sACE%20Diagnostics!5e0!3m2!1sen!2sph!4v1759390677143!5m2!1sen!2sph",
        laboratoryPricing: <NovalichesLaboratoryPricing />
    },
    {
        title: "Ace Diagnostics Valenzuela",
        address: "Valenzuela City",
        hours: "Mon-Sat: 7:00 AM - 5:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Diagnostics+Valenzuela+City",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65024.85621194998!2d120.90178535636367!3d14.723709672903615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8800355337b25d85%3A0x8ada83c0278ce7aa!2sAce%20Diagnostics-%20Valenzuela!5e0!3m2!1sen!2sph!4v1759390544429!5m2!1sen!2sph",
        laboratoryPricing: <ValenzuelaLaboratoryPricing />
    },
];

export const LocationSection = () => {
    return (
        <section id="location" className="max-w-7xl mx-auto py-24 sm:py-32 px-4">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                Our Locations
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                Visit Our Clinics
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
                Find us at any of our convenient locations across Metro Manila.
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locations.map((location) => (
                    <Card key={location.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="w-full h-64 relative">
                            <iframe
                                src={location.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>

                        <CardHeader>
                            <CardTitle className="text-xl">{location.title}</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">{location.address}</p>
                            </div>

                            <div className="flex items-start gap-2">
                                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">{location.hours}</p>
                            </div>

                            <div className="pt-2">
                                {location.laboratoryPricing}
                            </div>

                            <Button
                                variant="outline"
                                className="w-full mt-4"
                                onClick={() => window.open(location.mapUrl, '_blank')}
                            >
                                Get Directions
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
