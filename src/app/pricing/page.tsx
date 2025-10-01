import React from 'react'
import { FairviewLaboratoryPricing } from '@/components/fairview-laboratory-pricing'
import { NovalichesLaboratoryPricing } from '@/components/novaliches-laboratory-pricing'
import { ValenzuelaLaboratoryPricing } from '@/components/valenzuela-laboratory-pricing'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function PricingPage() {
    return (
        <main className="min-h-screen py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Laboratory Pricing</h1>
                    <p className="text-xl text-muted-foreground">
                        View our competitive pricing for all laboratory tests across our branches
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Fairview Branch</CardTitle>
                            <CardDescription>Ace Diagnostics, Fairview</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FairviewLaboratoryPricing />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Novaliches Branch</CardTitle>
                            <CardDescription>Ace Diagnostics Novaliches</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <NovalichesLaboratoryPricing />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Valenzuela Branch</CardTitle>
                            <CardDescription>Ace Diagnostics Valenzuela</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ValenzuelaLaboratoryPricing />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}

