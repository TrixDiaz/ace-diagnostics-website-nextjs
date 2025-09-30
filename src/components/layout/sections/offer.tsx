import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
    NO = 0,
    YES = 1,
}

interface PlanProps {
    title: string;
    popular: PopularPlan;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const plans: PlanProps[] = [
    {
        title: "Products",
        popular: 0,
        price: 0,
        description:
            "Wide range of products for both consumer and enterprise needs.",
        buttonText: "Learn More",
        benefitList: [
            "Covers all consumer needs",
            "Meets enterprise requirements",
            "Quality assured",
            "Variety of options",
            "Tailored solutions",
        ],
    },
    {
        title: "Services",
        popular: 1,
        price: 0,
        description:
            "Knowledgeable, experienced, and certified manpower.",
        buttonText: "Learn More",
        benefitList: [
            "Certified experts",
            "Professional support",
            "Technical assistance",
            "Efficient processes",
            "Client-focused approach",
        ],
    },
    {
        title: "Solutions",
        popular: 0,
        price: 0,
        description:
            "Over 19 years delivering efficient ICT solutions.",
        buttonText: "Learn More",
        benefitList: [
            "Proven track record",
            "Custom ICT solutions",
            "Optimized performance",
            "Reliable delivery",
            "Client satisfaction",
        ],
    },
];


export const OfferSection = () => {
    return (
        <section id="offers" className="max-w-7xl mx-auto py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                What We Offer
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                Products, Services & Solutions
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
                Delivering top-quality offerings backed by expertise and years of
                experience to help you succeed.
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
                {plans.map(({ title, popular, description, buttonText, benefitList }) => (
                    <Card
                        key={title}
                        className={
                            popular === PopularPlan.YES
                                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]"
                                : ""
                        }
                    >
                        <CardHeader>
                            <CardTitle className="pb-2">{title}</CardTitle>
                            <CardDescription className="pb-4">
                                {description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex">
                            <div className="space-y-3">
                                {benefitList.map((benefit) => (
                                    <span key={benefit} className="flex">
                                        <Check className="text-primary mr-2" />
                                        <h3>{benefit}</h3>
                                    </span>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button
                                variant={popular === PopularPlan.YES ? "default" : "secondary"}
                                className="w-full"
                            >
                                {buttonText}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
