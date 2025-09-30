import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServiceProps {
    title: string;
    description: string;
}

const laboratoryServices: ServiceProps[] = [
    { title: "Routine & Specialized Laboratory", description: "Comprehensive laboratory testing for accurate diagnosis and health monitoring." },
    { title: "Pathology", description: "Expert pathological analysis for disease detection and treatment planning." },
    { title: "Hematology", description: "Blood analysis and hematological studies for comprehensive health assessment." },
    { title: "Blood Chemistry", description: "Detailed biochemical analysis for metabolic and organ function evaluation." },
    { title: "Immunology and Serology", description: "Advanced immunological testing for immune system assessment and disease detection." },
    { title: "Clinical Microscopy", description: "Precise microscopic examination for cellular and tissue analysis." },
    { title: "Pap's Smear", description: "Cervical cancer screening and gynecological health assessment." },
];

const imagingServices: ServiceProps[] = [
    { title: "X-Ray Services", description: "Digital X-ray imaging for bone, chest, and internal structure evaluation." },
    { title: "Ultrasound", description: "Non-invasive imaging for soft tissue, organ, and fetal development assessment." },
    { title: "CT Scan", description: "Advanced computed tomography for detailed cross-sectional imaging." },
    { title: "Pulmonary Function Test", description: "Comprehensive lung function evaluation for respiratory health assessment." },
    { title: "ECG", description: "Electrocardiogram for heart rhythm and electrical activity monitoring." },
    { title: "2D Echo Doppler & Wall Strain", description: "Advanced cardiac imaging for heart function and blood flow analysis." },
    { title: "Treadmill Stress Test", description: "Exercise stress testing for cardiovascular fitness and heart health evaluation." },
    { title: "24Hr Holter Monitoring", description: "Continuous heart rhythm monitoring for comprehensive cardiac assessment." },
    { title: "24 Hrs Ambulatory BP monitoring", description: "24 hours Blood pressure monitoring for your normal daily activities." },
];

export const ServicesSection = () => (
    <section id="services" className="max-w-6xl mx-auto py-24 sm:py-32">
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-orange-500 text-lg text-center mb-2 tracking-wider">
                Services
            </p>
            <p className="text-3xl md:text-4xl text-center font-bold mb-4">
                Our Medical Services
            </p>
            <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
                Comprehensive diagnostic and medical services with state-of-the-art equipment
                and professional medical staff from major hospitals in Metro Manila.
            </p>
        </div>

        <Tabs defaultValue="laboratory" className="w-full">
            <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="laboratory">Laboratory Services</TabsTrigger>
                <TabsTrigger value="imaging">Imaging & Cardiovascular</TabsTrigger>
            </TabsList>

            <TabsContent value="laboratory">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
                    {laboratoryServices.map(({ title, description }) => (
                        <Card key={title} className="bg-muted/60 dark:bg-card h-full">
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="imaging">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
                    {imagingServices.map(({ title, description }) => (
                        <Card key={title} className="bg-muted/60 dark:bg-card h-full">
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    </section>
);
