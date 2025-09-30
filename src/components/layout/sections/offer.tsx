"use client";

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
}

const locations: LocationProps[] = [
    {
        title: "Ace Diagnostics, Fairview",
        address: "Fairview, Quezon City",
        hours: "Mon-Sat: 7:00 AM - 5:00 PM (Sunday: 7:00 AM - 3:00 PM)",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Diagnostics+Fairview+Quezon+City",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.0!2d121.0!3d14.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph",
    },
    {
        title: "Ace Diagnostics Novaliches",
        address: "Novaliches, Quezon City",
        hours: "Mon-Sat: 7:00 AM - 5:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Diagnostics+Novaliches+Quezon+City",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.0!2d121.0!3d14.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph",
    },
    {
        title: "Ace Diagnostics Valenzuela",
        address: "Valenzuela City",
        hours: "Mon-Sat: 7:00 AM - 5:00 PM",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ace+Diagnostics+Valenzuela+City",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.0!2d121.0!3d14.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph",
    },
];

export const OfferSection = () => {
    return (
        <section id="offers" className="max-w-7xl mx-auto py-24 sm:py-32 px-4">
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
