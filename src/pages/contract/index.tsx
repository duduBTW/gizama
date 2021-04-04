import { motion, useTransform, useViewportScroll } from "framer-motion";
import { velocityPerSecond } from "popmotion";
import React, { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";

import { Document, Page } from "react-pdf";
import { SizeMe } from "react-sizeme";
import { ContractContainer } from "./styles";
import content, { ItemProp } from "../../data";

export default function Contract({ idioma }: { idioma: "en" | "pt" }) {
  const data = content[idioma];
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, (value) => value * 100);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  return (
    <ContractContainer>
      <div className="progress">
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        >
          <motion.div
            style={{
              height: scale,
              background: "#3A3C64",
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -25,
              right: 0,
              fontSize: 12,
              color: "#292929",
              letterSpacing: 2,
            }}
            className="subtitle"
          >
            progress
          </div>
        </div>
      </div>
      <SizeMe
        monitorHeight
        refreshRate={128}
        refreshMode={"debounce"}
        //@ts-ignore
        render={({ size }) => (
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            <Document
              className="border"
              file={{
                url: data.contract,
              }}
            >
              <Page width={Math.min(size.width, 800)} pageNumber={1} />
            </Document>
          </motion.div>
        )}
      />
    </ContractContainer>
  );
}
