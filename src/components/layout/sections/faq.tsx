import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "Do I need an appointment for diagnostic services?",
        answer:
            "No appointment is needed! We are a walk-in medical care center with complete diagnostic facilities. You can visit us during our operating hours for immediate service.",
        value: "item-1",
    },
    {
        question: "What are your operating hours?",
        answer:
            "We are open Monday to Saturday from 7:00am to 4:00pm, and Sundays from 7:00am to 3:00pm (Fairview location only).",
        value: "item-2",
    },
    {
        question: "What diagnostic services do you offer?",
        answer:
            "We offer comprehensive laboratory services, imaging services (X-ray, Ultrasound, CT Scan), cardiovascular testing (ECG, Echo, Stress Test), and specialty clinics.",
        value: "item-3",
    },
    {
        question: "Do you accept health insurance plans?",
        answer:
            "Yes, we accept various health and insurance plans including Maxicare, PhilCare, Intellicare, and many others. Please contact us for the complete list of accepted plans.",
        value: "item-4",
    },
    {
        question: "How long does it take to get test results?",
        answer:
            "Most routine laboratory tests are available within 24-48 hours, while specialized tests may take longer. We will inform you of the expected turnaround time when you visit.",
        value: "item-5",
    },
    {
        question: "Do you offer home service?",
        answer:
            "Yes, we provide home service for certain diagnostic tests and medical consultations. Please contact us to discuss your specific needs and availability.",
        value: "item-6",
    },
    {
        question: "What specialty clinics do you have?",
        answer:
            "We have specialty clinics for Adult Cardiology, ENT, Internal Medicine, Pediatrics, Surgery, Urology, and OB-Gyne with prenatal care services.",
        value: "item-7",
    },
];


export const FAQSection = () => {
    return (
        <section id="faq" className="md:w-[700px] mx-auto py-24 sm:py-32">
            <div className="text-center mb-8">
                <p className="text-lg text-center text-primary mb-2 tracking-wider">
                    FAQS
                </p>

                <p className="text-3xl md:text-4xl text-center font-bold">
                    Common Questions
                </p>
            </div>

            <Accordion type="single" collapsible className="AccordionRoot">
                {FAQList.map(({ question, answer, value }) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};