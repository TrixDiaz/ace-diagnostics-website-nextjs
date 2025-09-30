import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeaturesProps {
    icon: keyof typeof LucideIcons;
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: "TabletSmartphone",
        title: "Broad ICT Portfolio",
        description: "Comprehensive solutions — from networking, servers, & storage to virtualization & peripherals.",
    },
    {
        icon: "BadgeCheck",
        title: "Certified Expertise",
        description: "Delivered by a technically skilled, certified team ready to tackle any ICT challenge.",
    },
    {
        icon: "Goal",
        title: "Solution-Centric Design",
        description: "Customized, cost-effective, and value-engineered solutions tailored to unique business needs.",
    },
    {
        icon: "PictureInPicture",
        title: "High-Quality AV & Unified Communications",
        description: "Strong audio-visual systems and advanced IP-PBX, Cloud PBX, and hybrid communications.",
    },
    {
        icon: "MousePointerClick",
        title: "Reliable Data Center Infrastructure",
        description: "Robust mission-critical data center solutions — with UPS, HVAC, redundancy & fire safety.",
    },
    {
        icon: "Newspaper",
        title: "Trusted Longevity",
        description: "Nearly two decades of proven ICT excellence delivering efficient, client-focused solutions.",
    },
];

export const FeaturesSection = () => (
    <section id="features" className="max-w-7xl mx-auto py-24 sm:py-32">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Features</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">What Makes Us Different</h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            With nearly two decades of ICT excellence, we deliver certified, customized solutions—from infrastructure and AV to networking and data centers.
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureList.map(({ icon, title, description }) => {
                const IconComponent = LucideIcons[icon] as LucideIcon;
                return (
                    <div key={title}>
                        <Card className="h-full bg-background border-0 shadow-none">
                            <CardHeader className="flex justify-center items-center flex-col">
                                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                                    <IconComponent size={24} className="text-primary" />
                                </div>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-center">
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                );
            })}
        </div>
    </section>
);
