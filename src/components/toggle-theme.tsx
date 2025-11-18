"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import React from "react";

export const ToggleTheme = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>((props, ref) => {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            ref={ref}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="ghost"
            className="w-auto justify-start items-center"
            {...props}
        >
            <div className="flex gap-2 dark:hidden">
                <Moon className="size-4" />
                <span className="block lg:hidden"> Dark </span>
            </div>

            <div className="dark:flex gap-2 hidden">
                <Sun className="size-4" />
                <span className="block lg:hidden"> Light </span>
            </div>

            <span className="sr-only"> System </span>
        </Button>
    );
});

ToggleTheme.displayName = "ToggleTheme";