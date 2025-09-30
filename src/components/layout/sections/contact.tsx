"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, Facebook } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ContactNumber {
    label: string;
    number: string;
}

interface BranchInfo {
    id: string;
    name: string;
    address: string;
    contactNumbers: ContactNumber[];
    email: string;
    hours: string;
    facebookUrl: string;
}

const branchesData: BranchInfo[] = [
    {
        id: "fairview",
        name: "ACE DIAGNOSTICS - FAIRVIEW",
        address: "Unit 2-5 CPE Bldg. Don Mariano Marcos Ave., Fairview, Quezon City",
        contactNumbers: [
            { label: "Reception", number: "(02) 8461-3905" },
            { label: "Cashier", number: "(02) 8461-3901 / 8461-3906" },
            { label: "Secretary", number: "(02) 8461-3890" },
            { label: "Lab", number: "0918 962 7616 (Smart) / 0917 562 5222 (Globe / Viber)" },
        ],
        email: "acediagnosticscorp@gmail.com",
        hours: "Mon-Sat: 7:00am – 4:00pm | Sun: 7:00am - 3:00pm",
        facebookUrl: "https://www.facebook.com/acediagnosticsfairview",
    },
    {
        id: "valenzuela",
        name: "ACE DIAGNOSTICS - VALENZUELA",
        address: "Unit 116-119 Arbortowne Plaza 2, Karuhatan Road, Gen. T. De Leon Valenzuela City",
        contactNumbers: [
            { label: "Reception", number: "(02) 8636-6291 / 8635-5918" },
            { label: "Cashier", number: "(02) 8584-5986" },
            { label: "Lab", number: "0998-9730305 (Smart) / 0917-1336276 (Globe)" },
        ],
        email: "acedxrecep.val@gmail.com",
        hours: "Mon-Sat: 7:00am – 4:00pm",
        facebookUrl: "https://www.facebook.com/acediagnosticsvalenzuela/",
    },
    {
        id: "novaliches",
        name: "ACE DIAGNOSTICS - NOVALICHES",
        address: "789 Quirino Highway, Gulod, Novaliches, Quezon City 1117",
        contactNumbers: [
            { label: "Reception", number: "(02) 8983-1966 / 8983-1968 / 8373-2099" },
            { label: "Lab", number: "0998 989 9178 (Smart) / 0917 558 4426 (Globe) / 0925 740 8744 (Sun)" },
        ],
        email: "acediagnosticsnova@gmail.com",
        hours: "Mon-Sat: 6:30am – 4:30pm",
        facebookUrl: "https://www.facebook.com/acediagnosticsnovaliches",
    },
];

const formSchema = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: z.string().email(),
    branch: z.string().min(1, "Please select a branch"),
    subject: z.string().min(2).max(255),
    message: z.string(),
});

interface BranchCardProps {
    branch: BranchInfo;
}

const BranchCard = ({ branch }: BranchCardProps) => (
    <div className="border-l-4 border-primary pl-4">
        <div className="flex gap-2 mb-2 items-center">
            <Building2 className="text-primary" />
            <span className="font-bold text-lg">{branch.name}</span>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
            <div className="font-semibold text-foreground">Address:</div>
            <div>{branch.address}</div>

            <div className="font-semibold text-foreground mt-2">Contact Numbers:</div>
            {branch.contactNumbers.map((contact, index) => (
                <div key={index} className={index === 0 ? "flex items-center gap-2" : "ml-6"}>
                    {index === 0 && <Phone className="w-4 h-4" />}
                    <span>{contact.label}: {contact.number}</span>
                </div>
            ))}

            <div className="flex items-center gap-2 mt-2">
                <Mail className="w-4 h-4" />
                <span>{branch.email}</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <Clock className="w-4 h-4" />
                <span>{branch.hours}</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <Facebook className="w-4 h-4" />
                <a href={branch.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Facebook Page
                </a>
            </div>
        </div>
    </div>
);

export const ContactSection = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            branch: "fairview",
            subject: "",
            message: "",
        },
    });

    const branchEmails = branchesData.reduce((acc, branch) => {
        acc[ branch.id ] = branch.email;
        return acc;
    }, {} as Record<string, string>);

    function onSubmit(values: z.infer<typeof formSchema>) {
        const mailToLink = `mailto:${branchEmails[ values.branch ]}?subject=${encodeURIComponent(
            values.subject
        )}&body=${encodeURIComponent(
            `Hello, I am ${values.firstName} ${values.lastName}. My email is ${values.email}.\n\n${values.message}`
        )}`;

        window.location.href = mailToLink;
    }

    return (
        <section id="contact" className="max-w-7xl mx-auto py-24 sm:py-32 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Info Panel */}
                <div>
                    <div className="mb-4">
                        <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>
                        <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
                    </div>
                    <p className="mb-8 text-muted-foreground lg:w-5/6">
                        {"We're here to help with your healthcare needs—whether it's diagnostic services, medical consultations, or any health-related inquiry, reach us through any of our three locations."}
                    </p>


                    <div className="flex flex-col gap-6">
                        {branchesData.map((branch) => (
                            <BranchCard key={branch.id} branch={branch} />
                        ))}
                    </div>
                </div>

                {/* Contact Form Panel */}
                <Card className="bg-muted/60 dark:bg-card h-fit">
                    <CardHeader className="text-primary text-xl md:text-2xl font-bold">Feedback Form</CardHeader>
                    <CardContent className="px-4 md:px-6">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem className="w-full">
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Last Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="branch"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Select Branch</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Choose a branch to contact" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {branchesData.map((branch) => (
                                                        <SelectItem key={branch.id} value={branch.id}>
                                                            {branch.name.replace("ACE DIAGNOSTICS - ", "")} Branch
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {form.watch("branch") && (
                                    <div className="space-y-2">
                                        <FormLabel className="text-sm">Branch Email</FormLabel>
                                        <Input
                                            type="email"
                                            value={branchEmails[ form.watch("branch") ]}
                                            disabled
                                            className="bg-muted/50 text-sm"
                                        />
                                    </div>
                                )}

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="you@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="How can we assist you?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea rows={4} placeholder="Your message..." className="resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="mt-2 w-full">Send Message</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
