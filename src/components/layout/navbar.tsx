"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ToggleTheme } from "@/components/toggle-theme";

interface GuestRouteProps {
    href: string;
    label: string;
}

interface FeatureProps {
    title: string;
    description: string;
}

const guestRouteList: GuestRouteProps[] = [
    {
        href: "/#home",
        label: "Home",
    },
    {
        href: "/#team",
        label: "Doctors",
    },
    {
        href: "/gallery",
        label: "Gallery",
    },
    {
        href: "/#about-us",
        label: "About Us",
    },
    {
        href: "/#see-us",
        label: "See Us",
    },
];

const featureList: FeatureProps[] = [
    {
        title: "Quality Policy",
        description: "ACE Diagnostics Corporation is committed to providing state-of-the-art diagnosis and evaluation of healthcare needs with the highest standards of medical care.",
    },
    {
        title: "Company Vision",
        description:
            "To be the leading provider of comprehensive diagnostic and medical services, offering complete healthcare solutions with professional medical staff from major hospitals in Metro Manila.",
    },
    {
        title: "Company Mission",
        description:
            "To provide accessible, high-quality medical diagnostic services with state-of-the-art equipment and professional medical staff, ensuring comprehensive healthcare for all patients.",
    },
];

export const Navbar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleNavigation = () => {
        closeMobileMenu();
    };

    return (
        <nav className="backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border/80 bg-background/95">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/#hero" className="flex items-center gap-2">
                        <span className="font-bold text-xl text-primary font-zapfhumnst">ACE DIAGNOSTICS</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 font-medium">
                        <NavigationMenu suppressHydrationWarning>
                            <NavigationMenuList className="flex items-center gap-6">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-base">
                                        Our Values
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                                            <Image
                                                src="/images/fairview/accounting.jpg"
                                                alt="Company Values"
                                                className="h-full w-full rounded-md object-cover"
                                                width={600}
                                                height={600}
                                            />
                                            <ul className="flex flex-col gap-2">
                                                {featureList.map(({ title, description }) => (
                                                    <li
                                                        key={title}
                                                        className="rounded-md p-3 text-sm hover:bg-muted"
                                                    >
                                                        <p className="mb-1 font-semibold leading-none text-foreground">
                                                            {title}
                                                        </p>
                                                        <p className="line-clamp-2 text-muted-foreground">
                                                            {description}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {guestRouteList.map(({ href, label }) => (
                                    <NavigationMenuItem key={href}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={href}
                                                className="text-base px-3 py-2 rounded-lg hover:text-primary hover:bg-primary/10 transition-all duration-200"
                                            >
                                                {label}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Theme Toggle, Online Result Button and Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2">
                            <ToggleTheme />
                        </div>
                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                            aria-label="Toggle menu"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t bg-background/95 backdrop-blur">
                        <div className="py-4 space-y-2">
                            {guestRouteList.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="block px-4 py-2 text-base font-medium hover:text-primary hover:bg-primary/10 transition-all duration-200 rounded-lg mx-2"
                                    onClick={handleNavigation}
                                >
                                    {label}
                                </Link>
                            ))}
                            <div className="px-4 py-2 mx-2">
                                <ToggleTheme />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};