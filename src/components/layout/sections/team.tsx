import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamProps {
    name: string;
    branch: string;
    specialization: string;
    schedule: string[];
}

export const TeamSection = () => {
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
            name: "Dr. Freman Cerezo, M.D",
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
            name: "Ellen Aranas, M.D",
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
    ];

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
                                    {name}
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
        </section>
    );
};
