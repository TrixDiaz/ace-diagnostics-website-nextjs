"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Root
function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

// Tabs List
function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-muted p-1.5 text-muted-foreground",
        "h-10 w-fit shadow-sm",
        className
      )}
      {...props}
    />
  )
}

// Tabs Trigger
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Layout
        "inline-flex h-8 items-center justify-center whitespace-nowrap px-3 py-1",
        "rounded-xl text-sm font-medium transition-all duration-200",
        
        // Default
        "text-foreground dark:text-muted-foreground border border-transparent",

        // Active State
        "data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm",
        "dark:data-[state=active]:bg-primary/10 dark:data-[state=active]:text-primary",

        // Focus
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/20 focus-visible:border-primary",

        // Disabled
        "disabled:pointer-events-none disabled:opacity-50",

        // SVG styling
        "[&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",

        className
      )}
      {...props}
    />
  )
}

// Content
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 bg-background outline-none animate-fade-in",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
