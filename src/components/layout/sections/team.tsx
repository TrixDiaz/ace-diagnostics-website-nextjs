"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BranchSchedule {
    branch: string;
    schedule: string[];
}

interface TeamProps {
    name: string;
    branches: BranchSchedule[];
    specialization: string;
    gender: string;
}

const teamList: TeamProps[] = [
    {
        name: "Jeremiah V. Tio Cuison, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Saturday (10:00 am to 12:00 nn)",
            ]
        } ],
        specialization: "Orthopedic Surgeon",
        gender: "Male",
    },
    {
        name: "Ma. Lourdes Bunyi, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Monday (1:00 pm to 4:00 pm)",
                "Friday (10:00 am to 12:00 nn)"
            ]
        } ],
        specialization: "IM-Cardiologist",
        gender: "Female",
    },
    {
        name: "Freman Cerezo, M.D",
        branches: [
            {
                branch: "Fairview Branch",
                schedule: [
                    "Monday (10:00 am to 12:00 nn)",
                    "Wednesday (10:00 pm to 12:00 nn)",
                    "Saturday (10:00 am to 12:00 nn)"
                ]
            },
            {
                branch: "Novaliches Branch",
                schedule: [
                    "Monday (2:00 pm to 4:00 pm)",
                    "Tuesday (2:00 pm to 4:00 pm)",
                    "Thursday (2:00 pm to 4:00 pm)",
                    "Friday (2:00 pm to 4:00 pm)"
                ]
            }
        ],
        specialization: "IM-Cardiologist",
        gender: "Male",
    },
    {
        name: "Ma. Luisa Afable, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Wednesday (2:00 pm to 4:00 pm)"
            ]
        } ],
        specialization: "IM-Cardiologist",
        gender: "Female",
    },
    {
        name: "Leuvina Paguio, M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "Friday (1:00 pm to 3:00 pm)"
            ]
        } ],
        specialization: "IM-Pediatrician",
        gender: "Female",
    },
    {
        name: "Albert Ong-Lopez, M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "Friday (1:00 pm to 3:00 pm)"
            ]
        } ],
        specialization: "IM-Endocrinologist",
        gender: "Male",
    },
    {
        name: "Carissa Rae Mirano, M.D",
        branches: [ {
            branch: "Novaliches Branch",
            schedule: [
                "Monday (10:00 am to 12:00 pm)"
            ]
        } ],
        specialization: "IM-Endocrinologist",
        gender: "Female",
    },
    {
        name: "Ria Manicad, M.D",
        branches: [ {
            branch: "Novaliches Branch",
            schedule: [
                "Thursday (10:00 am to 12:00 pm)",
                "Friday (2:00 pm to 4:00 pm)"
            ]
        } ],
        specialization: "IM-Pediatrician",
        gender: "Female",
    },
    {
        name: "Ellen Gloria Aranas, M.D",
        branches: [
            {
                branch: "Fairview Branch",
                schedule: [
                    "Tuesday (1:00 pm to 4:00 pm)",
                    "Thursday (1:00 pm to 4:00 pm)"
                ]
            },
            {
                branch: "Novaliches Branch",
                schedule: [
                    "Wednesday (10:00 am to 4:00 pm)",
                    "Saturday (10:00 am to 4:00 pm)"
                ]
            }
        ],
        specialization: "IM-Cardiologist",
        gender: "Female",
    },
    {
        name: "Rene V. Reyes, M.D",
        branches: [
            {
                branch: "Fairview Branch",
                schedule: [
                    "Tuesday (10:00 am to 12:00 nn)",
                    "Thursday (10:00 am to 12:00 nn)",
                    "Saturday (2:00 pm to 4:00 pm)"
                ]
            },
            {
                branch: "Valenzuela Branch",
                schedule: [
                    "Tuesday (3:00 pm to 5:00 pm)",
                    "Thursday (3:00 pm to 5:00 pm)",
                ]
            }
        ],
        specialization: "IM-Cardiologist",
        gender: "Male",
    },
    {
        name: "Jaret Chessrence Consul M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "Wednesday (10:00 am to 12:00 nn)",
                "Saturday (10:00 am to 12:00 nn)",
            ]
        } ],
        specialization: "IM-Pulmonologist",
        gender: "Female",
    },
    {
        name: "Marjorie Cerezo M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Monday (10:00 am to 12:00 nn)",
                "Wednesday (10:00 am to 12:00 nn)",
                "Friday (10:00 am to 12:00 nn)"
            ]
        } ],
        specialization: "Pediatrician",
        gender: "Female",
    },
    {
        name: "Paul Espina, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Tuesday (1:00 pm to 3:00 pm)",
                "Friday (9:00 am to 11:00 am)",
            ]
        } ],
        specialization: "Urologist",
        gender: "Male",
    },
    {
        name: "Christine Flores, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Monday (9:00 pm to 11:00 pm)",
            ]
        } ],
        specialization: "Internel Medicine",
        gender: "Female",
    },
    {
        name: "Edison So, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "By Appointment(On Call)",
            ]
        } ],
        specialization: "Endocrinologist",
        gender: "Male",
    },
    {
        name: "Maria Angela Sarmiento, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "(By Appointment)",
                "Tueday (1:00 pm to 4:00 pm)",
                "Thursday (10:00 am to 12:00 nn)"
            ]
        } ],
        specialization: "OB-Gynecologist",
        gender: "Female",
    },
    {
        name: "Miguel Carlo Mendoza, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Saturday (2:00 pm to 4:00 pm)",
            ]
        } ],
        specialization: "Endocrinologist",
        gender: "Male",
    },
    {
        name: "Kristel Tanhui-Manzana, M.D",
        branches: [ {
            branch: "Fairview Branch",
            schedule: [
                "Tuesday (1:00 pm to 3:00 pm)",
            ]
        } ],
        specialization: "Nephrologist",
        gender: "Female",
    },
    {
        name: "Mark Anthony Tiu, M.D, FPCP, DPSN",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "Monday (10:00 am to 12:00 nn)",
                "Wednesday (10:00 am to 12:00 nn)",
            ]
        } ],
        specialization: "Adult Nephrologist",
        gender: "Male",
    },
    {
        name: "Shaira Marcelo, M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "Monday (1:00 pm to 4:00 pm)",
                "Saturday (8:00 am to 3:00 pm)",
            ]
        } ],
        specialization: "General Physician",
        gender: "Female",
    },
    {
        name: "John Paul Martin Bagos, M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "Thursday (10:00 am to 12:00 nn)",
            ]
        } ],
        specialization: "IM-Endocrinologist",
        gender: "Male",
    },
    {
        name: "Aishley Jayme L. Daza, M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "By Appointment(On Call)",
            ]
        } ],
        specialization: "General Physician",
        gender: "Female",
    },
    {
        name: "Nathaniel Anthony Salvador, M.D",
        branches: [ {
            branch: "Novaliches Branch",
            schedule: [
                "Monday (10:00 am to 12:00 nn)",
                "Thursday (10:00 am to 12:00 nn)",
            ]
        } ],
        specialization: "IM - Geriatrician",
        gender: "Female",
    },
    {
        name: "Rogerson Tiangco, M.D",
        branches: [ {
            branch: "Valenzuela Branch",
            schedule: [
                "By Appointment(On Call)",
            ]
        } ],
        specialization: "Urologist",
        gender: "Female",
    },
];

export const TeamSection = () => {
    const [ isExpanded, setIsExpanded ] = useState(false);
    const [ selectedSpecialization, setSelectedSpecialization ] = useState<string>("All");
    const [ selectedBranch, setSelectedBranch ] = useState<string>("All");

    const INITIAL_VISIBLE_COUNT = 3;

    // Get unique branches
    const branches = useMemo(() => {
        const unique = Array.from(new Set(
            teamList.flatMap(member => member.branches.map(b => b.branch))
        ));
        return [ "All", ...unique.sort() ];
    }, []);

    // Get specializations based on selected branch (cascading filter)
    const specializations = useMemo(() => {
        let filteredMembers = teamList;

        // If a branch is selected, only get specializations from that branch
        if (selectedBranch !== "All") {
            filteredMembers = teamList.filter(member =>
                member.branches.some(branch => branch.branch === selectedBranch)
            );
        }

        const unique = Array.from(new Set(filteredMembers.map(member => member.specialization)));
        return [ "All", ...unique.sort() ];
    }, [ selectedBranch ]);

    // Filter team members based on selected specialization and branch
    const filteredTeamList = useMemo(() => {
        let filtered = teamList;

        // Filter by specialization
        if (selectedSpecialization !== "All") {
            filtered = filtered.filter(member => member.specialization === selectedSpecialization);
        }

        // Filter by branch
        if (selectedBranch !== "All") {
            filtered = filtered.filter(member =>
                member.branches.some(branch => branch.branch === selectedBranch)
            );
        }

        return filtered;
    }, [ selectedSpecialization, selectedBranch ]);

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
    const handleSpecializationChange = (specialization: string) => {
        setSelectedSpecialization(specialization);
        setIsExpanded(false);
    };

    const handleBranchChange = (branch: string) => {
        setSelectedBranch(branch);
        setSelectedSpecialization("All"); // Reset specialization when branch changes
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
            <div className="space-y-6 mb-8">
                {/* Branch Filter - First Step */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-3">
                        Step 1: Select Branch
                        {selectedBranch !== "All" && (
                            <span className="text-sm font-normal text-muted-foreground ml-2">
                                (Selected: {selectedBranch})
                            </span>
                        )}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {branches.map((branch) => (
                            <Button
                                key={branch}
                                variant={selectedBranch === branch ? "default" : "outline"}
                                onClick={() => handleBranchChange(branch)}
                                className="text-sm"
                            >
                                {branch}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Specialization Filter - Second Step */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-3">
                        Step 2: Select Specialization
                        {selectedBranch !== "All" && (
                            <span className="text-sm font-normal text-muted-foreground ml-2">
                                (Available in {selectedBranch})
                            </span>
                        )}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {specializations.map((specialization) => (
                            <Button
                                key={specialization}
                                variant={selectedSpecialization === specialization ? "default" : "outline"}
                                onClick={() => handleSpecializationChange(specialization)}
                                className="text-sm"
                                disabled={selectedBranch !== "All" && specializations.length === 1 && specialization === "All"}
                            >
                                {specialization}
                            </Button>
                        ))}
                    </div>
                    {selectedBranch !== "All" && specializations.length === 1 && (
                        <p className="text-sm text-muted-foreground mt-2">
                            No specializations available for the selected branch.
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                {visibleTeamList.map(
                    ({ name, branches, specialization, gender }, index) => (
                        <Card
                            key={index}
                            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden"
                        >
                            <CardHeader className="p-0 gap-0">
                                <div className="h-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center aspect-square relative">
                                    <Image
                                        src={gender === "Female"
                                            ? "/images/female-unknown.png"
                                            : "/images/male-unknown.png"
                                        }
                                        alt={`${name} profile`}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            // Fallback to initials if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const fallback = target.nextElementSibling as HTMLElement;
                                            if (fallback) fallback.style.display = 'flex';
                                        }}
                                    />
                                    <div className="text-6xl font-bold text-primary/30 absolute inset-0 items-center justify-center hidden">
                                        {name.split(' ')[ 0 ].charAt(0)}{name.split(' ')[ 1 ]?.charAt(0) || ''}
                                    </div>
                                </div>
                                <CardTitle className="py-6 pb-4 px-6 text-lg">
                                    {name} <br />
                                    <Badge>{specialization}</Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pb-6 px-6 space-y-4">
                                {branches.map((branchData, branchIndex) => (
                                    <div key={branchIndex} className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Badge className="text-xs">
                                                {branchData.branch}
                                            </Badge>
                                        </div>
                                        <div className="space-y-1">
                                            {branchData.schedule.map((time, timeIndex) => (
                                                <p key={timeIndex} className="text-sm text-muted-foreground">
                                                    {time}
                                                </p>
                                            ))}
                                        </div>
                                        {branchIndex < branches.length - 1 && (
                                            <hr className="border-border/50" />
                                        )}
                                    </div>
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
                {selectedSpecialization !== "All" && (
                    <span> • Specialization: {selectedSpecialization}</span>
                )}
                {selectedBranch !== "All" && (
                    <span> • Branch: {selectedBranch}</span>
                )}
            </div>
        </section>
    );
};
