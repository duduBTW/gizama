import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

import React, { useEffect, useRef, useState } from "react";
import setas from "../../assets/setas.svg";

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const swipeConfidenceThreshold = 10000;
export default function ImageChanger({
  images,
  onImageChange,
}: {
  images: { type: "image" | "video"; url: any }[];
  onImageChange?: any;
}) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [show, setShow] = useState<boolean>(false);
  const imageIndex = wrap(0, images.length, page);
  const mouseRef = useRef<any>();

  useEffect(() => {
    window.addEventListener("mousemove", cursor);
    return () => {};
  }, []);

  useEffect(() => {
    if (onImageChange) onImageChange(imageIndex);
  }, [imageIndex, onImageChange]);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const cursor = (e: any) => {
    if (mouseRef.current) {
      mouseRef.current.style.top = e.clientY + "px";
      mouseRef.current.style.left = e.clientX + "px";
    }
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: 75,
              height: 75,
            }}
            style={{
              width: 75,
              height: 75,
              borderRadius: 50,
              transform: "translate(-50%, -50%)",
              border: "1px solid #1C2354",
              backgroundColor: "rgba(253, 247, 249, 0.5)",
              position: "fixed",
              zIndex: 20,
              pointerEvents: "none",
              transformOrigin: "100% 100%",
              backgroundSize: "60%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${setas})`,
            }}
            ref={mouseRef}
          ></motion.div>
        )}
      </AnimatePresence>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          {images[imageIndex].type === "image" ? (
            <motion.img
              onHoverStart={() => setShow(true)}
              onHoverEnd={() => setShow(false)}
              style={{
                height: "100%",
                position: "absolute",
                zIndex: 10,
              }}
              key={page}
              src={images[imageIndex].url}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="imgInt"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              onDrag={(e, { offset }) => {
                // setShow(offset.x > 0 ? "rgth" : "left");
                console.log("data", offset.x);
              }}
              onDragEnd={(e, { offset, velocity }) => {
                // setShow(null);
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          ) : (
            <motion.video
              onHoverStart={() => setShow(true)}
              onHoverEnd={() => setShow(false)}
              style={{
                height: "100%",
                position: "absolute",
                zIndex: 10,
              }}
              key={page}
              src={images[imageIndex].url}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              onDrag={(e, { offset }) => {
                // setShow(offset.x > 0 ? "rgth" : "left");
                console.log("data", offset.x);
              }}
              onDragEnd={(e, { offset, velocity }) => {
                // setShow(null);
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="imgInt"
              autoPlay
              loop
              muted
              data-reactid=".0.1.0.0"
            >
              <source
                type="video/webm"
                data-reactid=".0.1.0.0.0"
                src={images[imageIndex].url}
              />
            </motion.video>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
