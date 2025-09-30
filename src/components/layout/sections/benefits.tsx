import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface BenefitsProps {
    icon: keyof typeof LucideIcons;
    title: string;
    description: string;
}

const benefitList: BenefitsProps[] = [
    {
        icon: "Stethoscope",
        title: "Onsite Laboratory and Clinic",
        description: "Complete diagnostic facilities with no appointment needed for your convenience."
    },
    {
        icon: "Clock",
        title: "Extended Operating Hours",
        description: "Open Monday to Saturday 7:00am to 4:00pm, Sundays 7:00am to 3:00pm (Fairview only)."
    },
    {
        icon: "Shield",
        title: "Professional Medical Staff",
        description: "Physicians from major hospitals in Metro Manila providing expert medical care."
    },
    {
        icon: "Heart",
        title: "Comprehensive Health Services",
        description: "From routine checkups to specialized diagnostics, we cover all your healthcare needs."
    },
];



export const BenefitsSection = () => {
    return (
        <section id="benefits" className="max-w-6xl mx-auto py-24 sm:py-32">
            <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
                <div>
                    <h2 className="text-lg text-primary mb-2 tracking-wider">Why Choose Us</h2>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Healthcare Services</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Experience professional medical care with state-of-the-art diagnostic facilities
                        and expert medical staff dedicated to your health and well-being.
                    </p>
                </div>


                <div className="grid lg:grid-cols-2 gap-4 w-full">
                    {benefitList.map(({ icon, title, description }, index) => {
                        const IconComponent = LucideIcons[ icon ] as LucideIcon; // ✅ Force correct type
                        return (
                            <Card
                                key={title}
                                className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                            >
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <IconComponent
                                            size={32}
                                            className="mb-6 text-primary"
                                        />
                                        <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <CardTitle>{title}</CardTitle>
                                </CardHeader>

                                <CardContent className="text-muted-foreground">
                                    {description}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
