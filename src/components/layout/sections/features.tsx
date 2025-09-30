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
        icon: "TestTube",
        title: "Comprehensive Laboratory Services",
        description: "Complete diagnostic testing including hematology, clinical chemistry, clinical microscopy, and immunology.",
    },
    {
        icon: "BadgeCheck",
        title: "Accredited & Certified",
        description: "Fully licensed and accredited diagnostic center with certified medical technologists and pathologists.",
    },
    {
        icon: "Clock",
        title: "Fast & Accurate Results",
        description: "Quick turnaround time for test results with accurate and reliable diagnostic findings.",
    },
    {
        icon: "Stethoscope",
        title: "Expert Medical Professionals",
        description: "Experienced physicians and medical staff from major hospitals in Metro Manila.",
    },
    {
        icon: "FileText",
        title: "HMO & Insurance Accepted",
        description: "Accredited with major HMOs and health insurance providers for convenient cashless transactions.",
    },
    {
        icon: "Building2",
        title: "Modern Facilities",
        description: "State-of-the-art equipment and comfortable facilities ensuring quality patient care and service.",
    },
];

export const FeaturesSection = () => (
    <section id="features" className="max-w-7xl mx-auto py-24 sm:py-32">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Features</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Why Choose ACE Diagnostics</h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            Your trusted partner in health, providing quality diagnostic services with modern facilities, expert medical professionals, and comprehensive laboratory testing.
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureList.map(({ icon, title, description }) => {
                const IconComponent = LucideIcons[ icon ] as LucideIcon;
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
