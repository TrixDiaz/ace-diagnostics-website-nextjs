"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

export default function CarouselSection() {
    return (
        <>
            <div className="flex items-center justify-center mb-24 sm:mb-32 sm:py-4">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <Image height={1250} width={1250} src="/sample.jfif" alt="sample" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image height={1250} width={1250} src="/sample.jfif" alt="sample" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image height={1250} width={1250} src="/sample.jfif" alt="sample" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}