import { Github, Linkedin, Twitter } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
    name: string;
    url: string;
}

export const TeamSection = () => {
    const teamList: TeamProps[] = [
        {
            imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
            firstName: "Dr. Maria",
            lastName: "Santos",
            positions: [ "Chief Medical Officer", "Internal Medicine Specialist" ],
            socialNetworks: [
                { name: "LinkedIn", url: "#" },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
            firstName: "Dr. John",
            lastName: "Cruz",
            positions: [ "Cardiologist", "Echocardiography Specialist" ],
            socialNetworks: [
                { name: "LinkedIn", url: "#" },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
            firstName: "Dr. Ana",
            lastName: "Reyes",
            positions: [ "Pathologist", "Laboratory Director" ],
            socialNetworks: [
                { name: "LinkedIn", url: "#" },
            ],
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1594824371741-0b2b4b0b8a8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
            firstName: "Dr. Carlos",
            lastName: "Mendoza",
            positions: [ "Radiologist", "Imaging Specialist" ],
            socialNetworks: [
                { name: "LinkedIn", url: "#" },
            ],
        },
    ];

    const socialIcon = (socialName: string) => {
        switch (socialName) {
            case "LinkedIn":
                return <Linkedin size={20} />;
            case "Github":
                return <Github size={20} />;
            case "X":
                return <Twitter size={20} />; // Lucide uses Twitter icon
            default:
                return null;
        }
    };

    return (
        <section id="team" className="lg:w-[75%] mx-auto py-24 sm:py-32">
            <div className="text-center mb-8">
                <p className="text-lg text-primary mb-2 tracking-wider">Medical Staff</p>
                <p className="text-3xl md:text-4xl font-bold">Our Expert Medical Team</p>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Our medical staff is composed of physicians from major hospitals in Metro Manila,
                    providing expert medical care and diagnostic services.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamList.map(
                    ({ imageUrl, firstName, lastName, positions, socialNetworks }, index) => (
                        <Card
                            key={index}
                            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden"
                        >
                            <CardHeader className="p-0 gap-0">
                                <div className="h-full overflow-hidden">
                                    <Image
                                        width={600}
                                        height={250}
                                        src={imageUrl}
                                        alt=""
                                        className="w-full aspect-square object-cover size-full"
                                    />
                                </div>
                                <CardTitle className="py-6 pb-4 px-6">
                                    {firstName}
                                    <span className="text-primary ml-2">{lastName}</span>
                                </CardTitle>
                            </CardHeader>

                            {positions.map((position, posIndex) => (
                                <CardContent
                                    key={posIndex}
                                    className={`pb-0 text-muted-foreground ${posIndex === positions.length - 1 && "pb-6"
                                        }`}
                                >
                                    {position}
                                    {posIndex < positions.length - 1 && <span>,</span>}
                                </CardContent>
                            ))}

                            <CardFooter className="space-x-4 mt-auto">
                                {socialNetworks.map(({ name, url }, snIndex) => (
                                    <Link
                                        key={snIndex}
                                        href={url}
                                        target="_blank"
                                        className="hover:opacity-80 transition-all"
                                    >
                                        {socialIcon(name)}
                                    </Link>
                                ))}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
