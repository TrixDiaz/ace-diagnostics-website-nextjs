"use client"

import React, { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Search, FileText } from 'lucide-react'

interface LabTest {
    name: string
    price: number
    type: string
}

const labTests: LabTest[] = [
    // ✅ CLINICAL MICROSCOPY
    { name: "URINALYSIS", price: 100.00, type: "Clinical Microscopy" },
    { name: "FECALYSIS", price: 100.00, type: "Clinical Microscopy" },
    { name: "OCCULT BLOOD", price: 100.00, type: "Clinical Microscopy" },
    { name: "PREGNANCY TEST (TEST PACK)", price: 150.00, type: "Clinical Microscopy" },
    { name: "SERUM PREGTEST", price: 250.00, type: "Clinical Microscopy" },
    { name: "MICRAL TEST", price: 300.00, type: "Clinical Microscopy" },

    // ✅ HEMATOLOGY
    { name: "COMPLETE BLOOD COUNT", price: 300.00, type: "Hematology" },
    { name: "ERYTHROCYTE SEDIMENTATION RATE (ESR)", price: 140.00, type: "Hematology" },
    { name: "RETICULOCYTE COUNT", price: 180.00, type: "Hematology" },
    { name: "PROTHROMBIN TIME (PTPA)", price: 400.00, type: "Hematology" },
    { name: "PLASMA THROMBOPLASTIN TIME (PTT)", price: 450.00, type: "Hematology" },
    { name: "CLOTTING TIME/BLEEDING TIME", price: 140.00, type: "Hematology" },
    { name: "BLOOD TYPING (ABO & Rh)", price: 200.00, type: "Hematology" },

    // ✅ SEROLOGY
    { name: "VDRL/ RPR", price: 140.00, type: "Serology" },
    { name: "RHEUMATOID FACTOR (RA/RF)", price: 300.00, type: "Serology" },
    { name: "DENGUE NS1", price: 1200.00, type: "Serology" },
    { name: "DENGUE BLOT (IGG/IGM)", price: 1200.00, type: "Serology" },
    { name: "DENGUE DUO (NS1/IGG,IGM)", price: 1800.00, type: "Serology" },
    { name: "LIVER FUNCTION TEST ( LFT)", price: 1280.00, type: "Serology" },
    { name: "HBsAg SCREENING TEST", price: 300.00, type: "Serology" },

    // ✅ ELECTROLYTES
    { name: "SODIUM (Na+)", price: 190.00, type: "Electrolytes" },
    { name: "POTASSIUM (K+)", price: 190.00, type: "Electrolytes" },
    { name: "CHLORIDE (Cl-)", price: 190.00, type: "Electrolytes" },
    { name: "CALCIUM (Ca++)", price: 280.00, type: "Electrolytes" },
    { name: "MAGNESIUM (Mg++)", price: 450.00, type: "Electrolytes" },
    { name: "PHOSPHORUS", price: 300.00, type: "Electrolytes" },
    { name: "IONIZED CALCIUM", price: 680.00, type: "Electrolytes" },

    // ✅ THYROID FUNCTION TEST
    { name: "T3", price: 390.00, type: "Thyroid Function Test" },
    { name: "T4", price: 390.00, type: "Thyroid Function Test" },
    { name: "FT3", price: 520.00, type: "Thyroid Function Test" },
    { name: "FT4", price: 520.00, type: "Thyroid Function Test" },
    { name: "TSH", price: 580.00, type: "Thyroid Function Test" },

    // ✅ CLINICAL CHEMISTRY
    { name: "FASTING BLOOD SUGAR (FBS)", price: 90.00, type: "Clinical Chemistry" },
    { name: "RANDOM BLOOD SUGAR (RBS)", price: 90.00, type: "Clinical Chemistry" },
    { name: "POST PRANDIAL BLOOD SUGAR (PPBS)", price: 140.00, type: "Clinical Chemistry" },
    { name: "BLOOD UREA NITROGEN (BUN)", price: 110.00, type: "Clinical Chemistry" },
    { name: "CREATININE", price: 130.00, type: "Clinical Chemistry" },
    { name: "URIC ACID", price: 110.00, type: "Clinical Chemistry" },
    { name: "CHOLESTEROL", price: 180.00, type: "Clinical Chemistry" },
    { name: "TRIGLYCERIDES", price: 260.00, type: "Clinical Chemistry" },
    { name: "LIPID PROFILE (Chole, TAG, HDL,LDL,VLDL)", price: 750.00, type: "Clinical Chemistry" },
    { name: "BILIRUBIN", price: 250.00, type: "Clinical Chemistry" },
    { name: "ALBUMIN", price: 200.00, type: "Clinical Chemistry" },
    { name: "TOTAL PROTEIN (Albumin, Globulin, A/G Ratio)", price: 400.00, type: "Clinical Chemistry" },
    { name: "2Hr. ORAL GLUCOSE TOLERANCE TEST (OGTT)", price: 700.00, type: "Clinical Chemistry" },
    { name: "3 Hr. OGTT", price: 1000.00, type: "Clinical Chemistry" },
    { name: "HBA1C (GLYCOSYLATED Hgb)", price: 600.00, type: "Clinical Chemistry" },
    { name: "ORAL GLUCOSE CHALLENGE TEST (OGCT)", price: 300.00, type: "Clinical Chemistry" },
    { name: "EGFR", price: 280.00, type: "Clinical Chemistry" },

    // ✅ ENZYMES
    { name: "SGPT (ALT)", price: 190.00, type: "Enzymes" },
    { name: "SGOT (AST)", price: 190.00, type: "Enzymes" },
    { name: "GGTP", price: 500.00, type: "Enzymes" },
    { name: "LDH", price: 300.00, type: "Enzymes" },
    { name: "ALKALINE PHOSPHATASE (ALP)", price: 250.00, type: "Enzymes" },
    { name: "ACID PHOSPHATASE", price: 550.00, type: "Enzymes" },
    { name: "AMYLASE", price: 350.00, type: "Enzymes" },
    { name: "LIPASE", price: 500.00, type: "Enzymes" },
    { name: "TOTAL CPK", price: 550.00, type: "Enzymes" },

    // ✅ TUMOR MARKERS
    { name: "AFP", price: 1200.00, type: "Tumor Markers" },
    { name: "CEA - COLON", price: 1200.00, type: "Tumor Markers" },
    { name: "PROSTATIC SPECIFIC ANTIGEN (PSA)", price: 1450.00, type: "Tumor Markers" },
    { name: "B-HCG", price: 1200.00, type: "Tumor Markers" },
    { name: "CA 125 - OVARY", price: 2050.00, type: "Tumor Markers" },
    { name: "CA 15.3 -", price: 2500.00, type: "Tumor Markers" },
    { name: "CA 19.9 - BREAST", price: 2800.00, type: "Tumor Markers" },
    { name: "CA 72.3", price: 2800.00, type: "Tumor Markers" },
]

const NovalichesLaboratoryPricing = () => {
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ selectedType, setSelectedType ] = useState<string>("all")

    // Unique test categories
    const testTypes = useMemo(() => {
        return Array.from(new Set(labTests.map(test => test.type))).sort()
    }, [])

    // Filter by search + category
    const filteredTests = useMemo(() => {
        return labTests.filter(test => {
            const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesType = selectedType === "all" || test.type === selectedType
            return matchesSearch && matchesType
        })
    }, [ searchTerm, selectedType ])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    View Laboratory Pricing
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle>Novaliches Laboratory Pricelist</DialogTitle>
                    <DialogDescription>
                        Browse our complete list of laboratory tests and their corresponding prices. Document No: CN# 0601-2025
                    </DialogDescription>
                </DialogHeader>

                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                    {/* 🔍 Search + Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sticky top-0 bg-background z-10 pb-4">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Search tests by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Select value={selectedType} onValueChange={setSelectedType}>
                            <SelectTrigger className="w-full sm:w-[250px]">
                                <SelectValue placeholder="Filter by type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                {testTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* 📋 Pricing Table */}
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[60%]">Test Name</TableHead>
                                    <TableHead className="w-[25%]">Type</TableHead>
                                    <TableHead className="text-right w-[15%]">Price (₱)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredTests.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                                            No tests found
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredTests.map((test, index) => (
                                        <TableRow key={`${test.name}-${index}`}>
                                            <TableCell className="font-medium">{test.name}</TableCell>
                                            <TableCell className="text-muted-foreground text-sm">{test.type}</TableCell>
                                            <TableCell className="text-right font-mono">
                                                {test.price.toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        Showing {filteredTests.length} of {labTests.length} tests
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export { NovalichesLaboratoryPricing }
