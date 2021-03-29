import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ImageChanger from "../imageChanger";
import { ModaolContainer } from "./ModalStyles";

import CloseIcon from "../../assets/CloseIcon.svg";

function Modal({ closeModal }: { closeModal: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <ModaolContainer>
      <div className="modal">
        <div className="header">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              delay: 0.3,
              duration: 0.2,
            }}
            className="begin"
          />
          <motion.div className="middle">
            <motion.div
              animate={{ background: "transparent" }}
              whileHover={{ background: "white" }}
              className="close"
              onClick={closeModal}
            >
              <img src={CloseIcon} alt="" />
            </motion.div>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                type: "tween",
                ease: "easeInOut",
              }}
              className="line"
            />
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              delay: 0.1,
              duration: 0.2,
            }}
            className="end"
          />
        </div>
        <div className="empty">
          <div className="begin"></div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{
              delay: 0.3,
              duration: 0.2,
            }}
            className="middle"
          />
          <motion.div
            className="end"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{
              delay: 0.3,
              duration: 0.2,
            }}
          />
        </div>
        <div className="footer">
          <div className="begin"></div>
          <div className="middle"></div>
          <div className="end"></div>
        </div>

        <div className="imag">
          <ImageChanger
            onImageChange={(index: number) => setImageIndex(index)}
            images={[
              {
                type: "video",
                url:
                  "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Main.webm?alt=media&token=54448b68-dfda-4855-b1f3-34e8f287a979",
              },
              {
                type: "video",
                url:
                  "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Mad.webm?alt=media&token=ee23b0f7-fa70-49e9-946e-f651d0954aba",
              },
              {
                type: "video",
                url:
                  "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/Main.webm?alt=media&token=54448b68-dfda-4855-b1f3-34e8f287a979",
              },
            ]}
          />
        </div>
        <div className="imageFull">
          <ImageFull imageIndex={imageIndex} />
        </div>
      </div>
    </ModaolContainer>
  );
}

function ImageFull({ imageIndex }: any) {
  const imagesFull2 = [
    "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/MainFull.webm?alt=media&token=9c5f1e3c-8c77-467b-afd0-bafbf2a3ca37",
    "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/MadFull.webm?alt=media&token=c61fc74a-9dd2-4918-8396-c8b52d42e0e1",
    "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/MainFull.webm?alt=media&token=9c5f1e3c-8c77-467b-afd0-bafbf2a3ca37",
  ];
  return (
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
          height: "100%",
          zIndex: 5,
        }}
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
    </AnimatePresence>
  );
}

export default Modal;
