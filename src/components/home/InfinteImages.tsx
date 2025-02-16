"use client";

import heroImage1 from "@/assets/home/hero-1.jpg";
import heroImage2 from "@/assets/home/hero-2.jpg";
import heroImage3 from "@/assets/home/hero-3.jpg";
import heroImage4 from "@/assets/home/hero-4.jpg";
import heroImage5 from "@/assets/home/hero-5.jpg";
import heroImage6 from "@/assets/home/hero-6.jpg";
import heroImage7 from "@/assets/home/hero-7.jpg";
import heroImage8 from "@/assets/home/hero-8.jpg";
import Image, { StaticImageData } from "next/image";
import useMeasure from "react-use-measure";
import { motion } from "motion/react";

const images = [
  { image: heroImage1, alt: "House 1" },
  { image: heroImage2, alt: "House 2" },
  { image: heroImage3, alt: "House 3" },
  { image: heroImage4, alt: "House 4" },
  { image: heroImage5, alt: "House 5" },
  { image: heroImage6, alt: "House 6" },
  { image: heroImage7, alt: "House 7" },
  { image: heroImage8, alt: "House 8" },
];

interface ImageContainerProps {
  image: StaticImageData | string;
  alt: string;
  height: string;
}

const ImageContainer = ({ image, alt, height }: ImageContainerProps) => {
  return (
    <motion.div
      className={[
        "flex justify-center items-center shrink-0 w-52",
        height,
      ].join(" ")}
    >
      <div className="bg-gray-200 w-full h-full rounded-lg">
        <Image
          src={image}
          alt={alt}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const InfinteImages = () => {
  const [ref, { width }] = useMeasure();

  return (
    <div className="w-full overflow-x-clip relative h-72 after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-t after:from-white after:to-transparent after:to-50% after:z-10">
      <motion.div
        className="absolute bottom-0 h-full flex gap-5 mt-16 items-center"
        ref={ref}
        animate={{
          x: -(width / 2) + 20,
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          },
        }}
      >
        {/**
         * Duplicate the images to create an infinite loop
         */}
        {[...images].map((item, index) => {
          const height = index % 2 === 0 ? "h-full" : "h-4/5";
          return (
            <ImageContainer
              key={index}
              image={item.image}
              alt={item.alt}
              height={height}
            />
          );
        })}
        {[...images].map((item, index) => {
          const height = index % 2 === 0 ? "h-full" : "h-4/5";
          return (
            <ImageContainer
              key={index}
              image={item.image}
              alt={item.alt}
              height={height}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default InfinteImages;
