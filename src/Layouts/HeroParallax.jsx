"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5).map((p, i) => ({ ...p, _key: `row0-${i}` }));
  const secondRow = products.slice(5, 10).map((p, i) => ({ ...p, _key: `row1-${i}` }));
  const thirdRow = products.slice(10, 15).map((p, i) => ({ ...p, _key: `row2-${i}` }));
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 200]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative h-[134rem] py-10 overflow-hidden antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product._key}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product._key}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product._key}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-black/80">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products. Faster launch MVPs in weeks, not months
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -12,
      }}
      className="group/product relative h-96 w-[30rem] shrink-0 overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-2xl motion-reduce:transform-none"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark_primary"
        aria-label={`Open ${product.title} project`}
      >
        <span className="sr-only">{product.title}</span>
      </a>
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="pointer-events-none absolute inset-0 h-full w-full rounded-3xl object-cover object-left-top"
        alt=""
        aria-hidden="true"
      />
      {/* Bottom scrim: readable titles without a full-frame black veil */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/85 via-black/40 to-transparent"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] px-5 pb-5 pt-12">
        <h2 className="max-w-[18rem] font-Poppins text-lg font-semibold leading-[1.25] tracking-tight text-white md:text-xl">
          {product.title}
        </h2>
      </div>
    </motion.div>
  );
};
