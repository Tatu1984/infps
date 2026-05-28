"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction: _direction = "up",
  interval = 5000,
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  interval?: number;
}) => {
  void _direction;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (images.length === 0) return;
    // Only preload the FIRST image — defer the rest until they're about to be
    // shown. The old behaviour decoded every screenshot into a bitmap upfront,
    // which spiked memory on product pages with 5+ full-resolution PNGs.
    let cancelled = false;
    const img = new Image();
    img.src = images[0];
    img.onload = () => { if (!cancelled) setReady(true); };
    img.onerror = () => { if (!cancelled) setReady(true); };
    return () => { cancelled = true; };
  }, [images]);

  useEffect(() => {
    if (!ready || images.length <= 1) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let autoplayInterval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      autoplayInterval = setInterval(() => {
        // Skip advancing when the tab is hidden — saves the next image's decode cost
        // and stops React state churn on backgrounded tabs.
        if (document.hidden) return;
        setCurrentIndex((i) => (i + 1) % images.length);
      }, interval);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  }, [ready, autoplay, interval, images.length]);

  const slideVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {ready && children}
      {ready && overlay && (
        <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />
      )}

      {ready && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            loading="lazy"
            decoding="async"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-contain object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
