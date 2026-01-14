import { useCallback, useEffect, useRef, useState } from "react";


export interface UseCarouselOptions {
    autoPlayInterval?: number;
    initialIndex?: number;
    enableAutoPlay?: boolean;
    loop?: boolean;
    totalItems: number;
}

export interface UseCarouselReturn {
    currentIndex: number;
    isAutoPlaying: boolean;
    setIsAutoPlaying: (playing: boolean) => void;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    totalItems: number;
    canGoNext: boolean;
    canGoPrev: boolean;
}


export const useCarousel = ({
     autoPlayInterval,
     initialIndex = 0,
     enableAutoPlay = true,
     loop = true,
     totalItems,

}: UseCarouselOptions) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const [isAutoPlaying, setIsAutoPlaying] = useState(enableAutoPlay)
    //const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    //Calculo util para ui
    const canGoNext = loop || currentIndex < totalItems - 1;
    const canGoPrev = loop || currentIndex > 0

    const next = useCallback(() => {
        if(totalItems === 0) return;
        setCurrentIndex((prev) => {
            if (prev === totalItems - 1){
                return loop ? 0 : prev;
            }
            return prev + 1 
        })
    }, [totalItems, loop])

    const prev = useCallback(() => {
        if (totalItems === 0) return;

        setCurrentIndex((prev) => {
            if (prev === 0){
                return loop ? totalItems - 1 : prev;
            }
            return prev - 1;
        })
    }, [totalItems, loop])

    const goTo = useCallback((index: number) => {
        if (totalItems === 0) return;
        const safeIndex = Math.max(0, Math.min(index, totalItems - 1))
        setCurrentIndex(safeIndex)

    }, [totalItems])

    const startInterval = useCallback(() => {
        if (intervalRef.current) {
        clearInterval(intervalRef.current);
        }
        
        if (isAutoPlaying && totalItems > 1) {
        intervalRef.current = setInterval(next, autoPlayInterval);
        }
    }, [isAutoPlaying, next, autoPlayInterval, totalItems]);

    // 🎯 Efecto principal con cleanup
    useEffect(() => {
        startInterval();
        
        return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        };
    }, [startInterval]);

    // 🎯 Reset al cambiar totalItems
    useEffect(() => {
        if (currentIndex >= totalItems && totalItems > 0) {
        setCurrentIndex(totalItems - 1);
        }
    }, [totalItems, currentIndex]);

    return {
        currentIndex,
        isAutoPlaying,
        setIsAutoPlaying,
        next,
        prev,
        goTo,
        totalItems,
        canGoNext,
        canGoPrev,
    }
}