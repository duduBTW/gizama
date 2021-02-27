import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { wrap } from "popmotion";
//@ts-ignore
import alerNoSound from "../assets/testeAlpha.webm";
//@ts-ignore
import oka from "../assets/oka2.webm";

export const images = [
  "https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png",
  "https://i.imgur.com/C2p79XQ.jpg",

  // "https://cdn.donmai.us/original/b4/1d/b41de76c1089f24061909592636a3ee9.png",
];
export const imagesFull = [
  "https://i.pinimg.com/originals/0d/04/f0/0d04f07cb5bb3b5cd376679b8860e764.png",
  // alerNoSound,
  "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/277588_359286.png",

  // "https://cdn.donmai.us/original/b4/1d/b41de76c1089f24061909592636a3ee9.png",
];

const imagesFull2 = [
  alerNoSound,
  oka,
  // "https://cdn.donmai.us/original/b4/1d/b41de76c1089f24061909592636a3ee9.png",
];
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const swipeConfidenceThreshold = 10000;
function Modal() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [show, setShow] = useState<"left" | "rgth" | null>(null);
  const mouseRef = useRef<any>();
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
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const cursor = (e: any) => {
    if (mouseRef.current) {
      mouseRef.current.style.top = e.pageY + "px";
      mouseRef.current.style.left = e.pageX + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", cursor);
    return () => {};
  }, []);
  return (
    <div style={show ? { cursor: "none" } : {}}>
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
              backgroundColor: "#1C2354",
              position: "absolute",
              zIndex: 5,
              pointerEvents: "none",
              transformOrigin: "100% 100%",
              backgroundImage:
                show === "left"
                  ? "url('https://www.iconsdb.com/icons/preview/white/left-xxl.png')"
                  : "url('https://www.iconsdb.com/icons/preview/white/right-xxl.png')",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            }}
            ref={mouseRef}
          ></motion.div>
        )}
      </AnimatePresence>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "70vh",
            width: "70vw",
            background: "#3A3C64",
            position: "relative",
            margin: "0px auto",
          }}
        >
          <motion.div
            animate={{
              height: "100%",
            }}
            initial={{
              height: 0,
            }}
            style={{
              background: "#FFFFFF",
              position: "absolute",
              width: 1,
              zIndex: 0,
              bottom: 0,
              left: "5%",
              top: 0,
            }}
            transition={{ type: "tween", duration: 0.3 }}
          />
          <motion.div
            animate={{
              width: "95%",
            }}
            initial={{
              width: 0,
            }}
            transition={{ type: "tween", delay: 0.15, duration: 0.3 }}
            style={{
              background: "#FFFFFF",
              position: "absolute",
              height: 1,
              left: "5%",
              right: 0,
              top: "50%",
              zIndex: 0,
            }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                style={{
                  height: "100%",
                  position: "absolute",
                  zIndex: 10,
                  left: "5%",
                }}
                key={page}
                src={images[imageIndex]}
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
                  setShow(offset.x > 0 ? "rgth" : "left");
                  console.log("data", offset.x);
                }}
                onDragEnd={(e, { offset, velocity }) => {
                  setShow(null);
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
          </div>
          <AnimatePresence>
            <motion.video
              initial={{
                y: -200,
                opacity: 0,
              }}
              exit={{
                x: 200,
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              key={imageIndex}
              style={{
                position: "absolute",
                right: "10%",
                bottom: "2%",
                height: "110%",
                maxWidth: 400,
                zIndex: 5,
              }}
              className="video-container video-container-overlay"
              autoPlay
              loop
              muted
              data-reactid=".0.1.0.0"
            >
              <source
                type="video/webm"
                data-reactid=".0.1.0.0.0"
                src={imagesFull2[imageIndex]}
              />
            </motion.video>
            {/* <motion.img
              key={imageIndex}
              style={{
                position: "absolute",
                right: "10%",
                bottom: "2%",
                height: "110%",
                zIndex: 5,
              }}
              initial={{
                y: -200,
                opacity: 0,
              }}
              exit={{
                x: 200,
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              // transition={{ delay: 0.2 }}
              src={imagesFull[imageIndex]}
            /> */}
          </AnimatePresence>
          <motion.div
            animate={{
              height: 60,
            }}
            initial={{
              height: 0,
            }}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              background: "#041143",
            }}
          >
            <motion.h3
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              style={{
                zIndex: 3,
                color: "#FFFFFF",
                letterSpacing: 3,
                fontSize: 24,
                fontWeight: 500,
                marginLeft: "45%",
                textTransform: "uppercase",
              }}
            >
              Teste
            </motion.h3>
          </motion.div>
          <motion.div
            animate={{
              height: 60,
            }}
            initial={{
              height: 0,
            }}
            transition={{ delay: 0.1 }}
            style={{
              position: "absolute",
              bottom: 10,
              width: "100%",
              background: "#FFFFFF",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
