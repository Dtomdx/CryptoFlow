import { useCarousel } from "@/hooks";
import type { ReactNode } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showAutoPlayToggle?: boolean;
  className?: string;
  itemClassName?: string;
}

export const Carousel = <T,>({
  items,
  renderItem,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  showAutoPlayToggle = false,
  className = "",
  itemClassName = "",
}: CarouselProps<T>) => {
  const {
    currentIndex,
    isAutoPlaying,
    setIsAutoPlaying,
    next,
    prev,
    goTo,
    totalItems,
    canGoNext,
    canGoPrev,
  } = useCarousel({
    autoPlayInterval,
    enableAutoPlay: true,
    totalItems: items.length,
  });

  if (totalItems === 0) {
    return (
      <div className={`text-center py-8 text-gray-500`}>
        No items to display
      </div>
    );
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`overflow-hidden rounded-lg`}>
        <div
          className={`flex transition-transform-duration-300 ease-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full shrink-0 ${itemClassName}`}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
