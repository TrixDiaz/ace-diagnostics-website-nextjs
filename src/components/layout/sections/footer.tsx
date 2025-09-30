"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const FooterSection = () => {
    return (
        <footer id="footer" className="max-w-6xl mx-auto py-24 sm:py-32">
            <div className="p-10 bg-card border border-secondary rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                    {/* Logo / Brand */}
                    <div className="col-span-full xl:col-span-2">
                        <Link href="/#hero" className="flex font-bold items-center">
                            <p className="text-2xl">ACE DIAGNOSTICS</p>
                        </Link>
                        <p className="mt-2 text-sm opacity-70">
                            A fully equipped and professionally run medical facility providing
                            state-of-the-art diagnosis and evaluation of healthcare needs.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Services</h3>
                        <Link href="/#services" className="opacity-60 hover:opacity-100">
                            Laboratory Services
                        </Link>
                        <Link href="/#services" className="opacity-60 hover:opacity-100">
                            Imaging Services
                        </Link>
                        <Link href="/#services" className="opacity-60 hover:opacity-100">
                            Cardiovascular Testing
                        </Link>
                        <Link href="/#services" className="opacity-60 hover:opacity-100">
                            Specialty Clinics
                        </Link>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Company</h3>
                        <Link href="/#benefits" className="opacity-60 hover:opacity-100">
                            About Us
                        </Link>
                        <Link href="/#services" className="opacity-60 hover:opacity-100">
                            Services
                        </Link>
                        <Link href="/#contact" className="opacity-60 hover:opacity-100">
                            Contact Us
                        </Link>
                        <Link href="/#faq" className="opacity-60 hover:opacity-100">
                            FAQ
                        </Link>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Legal</h3>
                        <Link href="/privacy-policy" className="opacity-60 hover:opacity-100">
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Follow Us</h3>
                        <Link href="https://www.facebook.com/acediagnosticsfairview" target="_blank" className="opacity-60 hover:opacity-100">
                            Facebook (Fairview)
                        </Link>
                        <Link href="https://www.facebook.com/acediagnosticsvalenzuela" target="_blank" className="opacity-60 hover:opacity-100">
                            Facebook (Valenzuela)
                        </Link>
                        <Link href="https://www.facebook.com/acediagnosticsnovaliches" target="_blank" className="opacity-60 hover:opacity-100">
                            Facebook (Novaliches)
                        </Link>
                    </div>
                </div>

                <Separator className="my-6" />
                <section className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-70">
                    <p>
                        &copy; {new Date().getFullYear()} ACE Diagnostics Corporation. All rights reserved.
                    </p>
                </section>
            </div>
        </footer>
    );
};
