"use client";

import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Sezgisel arayüz
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            İlerlemenizi takip etmek, çabalarınızı motive etmek ve her seferinde
            bir görev olmak üzere başarılarınızı kutlamak için tasarlanmış bir
            uygulama ile başarının keyfini çıkarın.
          </p>
        </div>

        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="The product screen"
            className="mt-14 mx-auto"
            ref={appImageRef}
          />
        </motion.div>
      </div>
    </div>
  );
};
