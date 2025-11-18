
'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const MessengerButton = () => {
    const [ hasBeenInteracted, setHasBeenInteracted ] = useState(false);

    const branches = [
        { name: "Fairview", href: "https://www.facebook.com/messages/t/107740837225773" },
        { name: "Novaliches", href: "https://www.facebook.com/messages/t/101707632889284" },
        { name: "Valenzuela", href: "https://www.facebook.com/messages/t/103167246074883" },
    ];

    return (
        <DropdownMenu onOpenChange={(open) => {
            if (open) {
                setHasBeenInteracted(true);
            }
        }}>
            <DropdownMenuTrigger asChild>
                <Button
                    size="lg"
                    onMouseEnter={() => setHasBeenInteracted(true)}
                    className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 ${hasBeenInteracted ? '' : 'animate-bounce'}`}
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-64 mb-4 mr-2"
                side="top"
                align="end"
            >
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">Get Support</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        Choose your nearest branch to start chatting
                    </p>
                </div>

                <DropdownMenuSeparator />

                <div className="p-2">
                    {branches.map((branch) => (
                        <DropdownMenuItem
                            key={branch.name}
                            className="cursor-pointer p-0"
                            onClick={() => window.open(branch.href, '_blank')}
                        >
                            <div className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-accent transition-colors">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{branch.name}</span>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export { MessengerButton }
