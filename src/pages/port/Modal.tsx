import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ImageChanger from "../imageChanger";
import { ModaolContainer } from "./ModalStyles";

import CloseIcon from "../../assets/CloseIcon.svg";

function Modal({
  closeModal,
  selected,
}: {
  closeModal: () => void;
  selected: any;
}) {
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

        {selected.type === "vTuber" ? (
          <>
            <div className="imag">
              <ImageChanger
                onImageChange={(index: number) => setImageIndex(index)}
                images={selected.items.map((item: any) => item.main)}
              />
            </div>
            <div className="imageFull">
              <ImageFull
                images={selected.items.map((item: any) => item.full)}
                imageIndex={imageIndex}
              />
            </div>{" "}
          </>
        ) : selected.type === "image" ? (
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="typeImg"
            style={{ backgroundImage: `url("${selected.url}")` }}
          />
        ) : (
          <motion.video
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="typeVideo"
            autoPlay
            loop
            muted
            data-reactid=".0.1.0.0"
          >
            <source
              type="video/webm"
              data-reactid=".0.1.0.0.0"
              src={selected.url}
            />
          </motion.video>
        )}
      </div>
    </ModaolContainer>
  );
}

function ImageFull({ imageIndex, images }: any) {
  return (
    <AnimatePresence>
      {images[imageIndex].type === "image" ? (
        <motion.img
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
          src={images[imageIndex].url}
        />
      ) : (
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
            src={images[imageIndex].url}
          />
        </motion.video>
      )}
    </AnimatePresence>
  );
}

export default Modal;
