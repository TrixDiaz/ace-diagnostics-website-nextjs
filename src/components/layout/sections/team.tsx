"use client";

import { useState, useMemo } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TeamProps {
    name: string;
    branch: string;
    specialization: string;
    schedule: string[];
}

const teamList: TeamProps[] = [
    {
        name: "Ma. Lourdes Bunyi, M.D",
        branch: "Fairview Branch",
        specialization: "IM-Cardiologist",
        schedule: [
            "Monday (1:00 pm to 4:00 pm)",
            "Friday (10:00 am to 12:00 nn)"
        ],
    },
    {
        name: "Freman Cerezo, M.D",
        branch: "Fairview Branch",
        specialization: "IM-Cardiologist",
        schedule: [
            "Monday (10:00 am to 12:00 nn)",
            "Wednesday (10:00 pm to 12:00 nn)",
            "Saturday (10:00 am to 12:00 nn)"
        ],
    },
    {
        name: "Ma. Luisa Afable, M.D",
        branch: "Fairview Branch",
        specialization: "IM-Cardiologist",
        schedule: [
            "Wednesday (2:00 pm to 4:00 pm)"
        ],
    },
    {
        name: "Ellen Gloria Aranas, M.D",
        branch: "Fairview Branch",
        specialization: "IM-Cardiologist",
        schedule: [
            "Tuesday (1:00 pm to 4:00 pm)",
            "Thursday (1:00 pm to 4:00 pm)"
        ],
    },
    {
        name: "Rene V. Reyes, M.D",
        branch: "Fairview Branch",
        specialization: "IM-Cardiologist",
        schedule: [
            "Tuesday (10:00 am to 12:00 nn)",
            "Thursday (10:00 am to 12:00 nn)",
            "Saturday (2:00 pm to 4:00 pm)"
        ],
    },
    {
        name: "Marojorie Cerezo M.D",
        branch: "Fairview Branch",
        specialization: "Pediatrician",
        schedule: [
            "Monday (10:00 am to 12:00 nn)",
            "Wednesday (10:00 am to 12:00 nn)",
            "Friday (10:00 am to 12:00 nn)"
        ],
    },
    {
        name: "Paul Espina, M.D",
        branch: "Fairview Branch",
        specialization: "Urologist",
        schedule: [
            "Tuesday (1:00 pm to 3:00 pm)",
            "Friday (9:00 am to 11:00 am)",
        ],
    },
    {
        name: "Christine Flores, M.D",
        branch: "Fairview Branch",
        specialization: "Internel Medicine",
        schedule: [
            "Monday (9:00 pm to 11:00 pm)",
        ],
    },
    {
        name: "Edison So, M.D",
        branch: "Fairview Branch",
        specialization: "Endocrinologist",
        schedule: [
            "By Appointment(On Call)",
        ],
    },
    {
        name: "Maria Angela Sarmiento, M.D",
        branch: "Fairview Branch",
        specialization: "OB-Gynecologist",
        schedule: [
            "(By Appointment)",
            "Tueday (1:00 pm to 4:00 pm)",
            "Thursday (10:00 am to 12:00 nn)"
        ],
    },
    {
        name: "Miguel Carlo Mendoza, M.D",
        branch: "Fairview Branch",
        specialization: "Endocrinologist",
        schedule: [
            "Saturday (2:00 pm to 4:00 pm)",
        ],
    },
    {
        name: "Kristel Tanhui-Manzana, M.D",
        branch: "Fairview Branch",
        specialization: "Nephrologist",
        schedule: [
            "Tuesday (1:00 pm to 3:00 pm)",
        ],
    },
];

export const TeamSection = () => {
    const [ isExpanded, setIsExpanded ] = useState(false);
    const [ selectedSpecialization, setSelectedSpecialization ] = useState<string>("All");

    const INITIAL_VISIBLE_COUNT = 4;

    // Get unique specializations
    const specializations = useMemo(() => {
        const unique = Array.from(new Set(teamList.map(member => member.specialization)));
        return [ "All", ...unique.sort() ];
    }, []);

    // Filter team members based on selected specialization
    const filteredTeamList = useMemo(() => {
        if (selectedSpecialization === "All") {
            return teamList;
        }
        return teamList.filter(member => member.specialization === selectedSpecialization);
    }, [ selectedSpecialization ]);

    // Get visible team members based on expanded state
    const visibleTeamList = isExpanded
        ? filteredTeamList
        : filteredTeamList.slice(0, INITIAL_VISIBLE_COUNT);

    // Check if there are more items to load
    const hasMore = filteredTeamList.length > INITIAL_VISIBLE_COUNT;

    // Handle load more / show less toggle
    const handleToggleView = () => {
        setIsExpanded(!isExpanded);
    };

    // Reset expanded state when filter changes
    const handleFilterChange = (specialization: string) => {
        setSelectedSpecialization(specialization);
        setIsExpanded(false);
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

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
                {specializations.map((specialization) => (
                    <Button
                        key={specialization}
                        variant={selectedSpecialization === specialization ? "default" : "outline"}
                        onClick={() => handleFilterChange(specialization)}
                        className="text-sm"
                    >
                        {specialization}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {visibleTeamList.map(
                    ({ name, branch, specialization, schedule }, index) => (
                        <Card
                            key={index}
                            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden"
                        >
                            <CardHeader className="p-0 gap-0">
                                <div className="h-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center aspect-square">
                                    <div className="text-6xl font-bold text-primary/30">
                                        {name.split(' ')[ 0 ].charAt(0)}{name.split(' ')[ 1 ]?.charAt(0) || ''}
                                    </div>
                                </div>
                                <CardTitle className="py-6 pb-4 px-6 text-lg">
                                    {name} <br />
                                    <Badge>{specialization}</Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pb-2 px-6">
                                <p className="text-muted-foreground text-sm">{branch}</p>
                            </CardContent>

                            <CardContent className="pb-6 px-6">
                                {schedule.map((time, timeIndex) => (
                                    <p key={timeIndex} className="text-sm text-muted-foreground">
                                        {time}
                                    </p>
                                ))}
                            </CardContent>
                        </Card>
                    )
                )}
            </div>

            {/* Load More / Show Less Button */}
            {hasMore && (
                <div className="flex justify-center mt-8">
                    <Button
                        onClick={handleToggleView}
                        variant="outline"
                        size="lg"
                    >
                        {isExpanded ? "Show Less" : "Load More"}
                    </Button>
                </div>
            )}

            {/* Show count info */}
            <div className="text-center mt-4 text-sm text-muted-foreground">
                Showing {visibleTeamList.length} of {filteredTeamList.length} doctors
            </div>
        </section>
    );
};
