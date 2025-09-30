"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
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

const formSchema = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    email: z.string().email(),
    subject: z.string().min(2).max(255),
    message: z.string(),
});

export const ContactSection = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const mailToLink = `mailto:acediagnosticscorp@gmail.com?subject=${encodeURIComponent(
            values.subject
        )}&body=${encodeURIComponent(
            `Hello, I am ${values.firstName} ${values.lastName}. My email is ${values.email}.\n\n${values.message}`
        )}`;

        window.location.href = mailToLink;
    }

    return (
        <section id="contact" className="max-w-7xl mx-auto py-24 sm:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <div>
                            <div className="flex gap-2 mb-1 items-center"><Building2 /> <span className="font-bold">ACE DIAGNOSTICS - FAIRVIEW</span></div>
                            <div>Unit 2-5 CPE Bldg. Don Mariano Marcos Ave., Fairview, Quezon City</div>
                            <div className="mt-2">
                                <div className="flex gap-2 mb-1 items-center"><Phone /> <span className="font-bold">ACE DIAGNOSTICS - VALENZUELA</span></div>
                                <div>Unit 116-119 Arbortowne Plaza 2, Karuhatan Road, Gen. T. De Leon Valenzuela City</div>
                            </div>
                            <div className="mt-2">
                                <div className="flex gap-2 mb-1 items-center"><Phone /> <span className="font-bold">ACE DIAGNOSTICS - NOVALICHES</span></div>
                                <div>789 Quirino Highway, Gulod, Novaliches, Quezon City 1117</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 mb-1 items-center"><Phone /> <span className="font-bold">Contact Numbers</span></div>
                            <ul className="list-none">
                                <li><strong>Fairview:</strong> (02) 8461 3905</li>
                                <li><strong>Valenzuela:</strong> (02) 8636 6291 / (02) 8635 5918</li>
                                <li><strong>Novaliches:</strong> (02) 8983 1966 / (02) 8983 1968</li>
                            </ul>
                        </div>
                        <div>
                            <div className="flex gap-2 mb-1 items-center"><Mail /> <span className="font-bold">Email</span></div>
                            <div>acediagnosticscorp@gmail.com</div>
                            <div>acedxrecep.val@gmail.com</div>
                            <div>acediagnosticsnova@gmail.com</div>
                        </div>
                        <div>
                            <div className="flex gap-2 mb-1 items-center"><Clock /> <span className="font-bold">Service Hours</span></div>
                            <div>Monday - Saturday: 7:00am – 4:00pm</div>
                            <div>Sunday: 7:00am - 3:00pm (Fairview only)</div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Panel */}
                <Card className="bg-muted/60 dark:bg-card">
                    <CardHeader className="text-primary text-2xl">Send Us a Message</CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                                <div className="flex flex-col md:flex-row gap-8">
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
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
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
                                                <Textarea rows={5} placeholder="Your message..." className="resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button className="mt-4 w-full">Send Message</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
