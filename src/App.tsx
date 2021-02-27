// import { AnimatePresence, motion } from "framer-motion";
// import React, { useState } from "react";

// function App() {
//   const [selected, setselected] = useState(true);

//   return (
//     <div>
//       {/*
//       //@ts-ignore */}
//       <center>
//         <motion.h1
//           animate={{
//             y: 0,
//           }}
//           initial={{
//             y: -100,
//           }}
//           style={{ letterSpacing: 10 }}
//         >
//           PORTFOLIO
//         </motion.h1>
//         {/*
//       //@ts-ignore */}
//       </center>
//       <motion.div
//         animate={{
//           width: "99vw",
//         }}
//         initial={{
//           width: 0,
//         }}
//         transition={{ type: "tween", duration: 0.4 }}
//         style={{
//           // width: "100vw",
//           maxWidth: "100vw",
//           margin: "0px auto",
//           height: 1,
//           background: "#FDE6E9",
//         }}
//       />
//       <motion.div
//         animate={{
//           height: "100vh",
//         }}
//         initial={{
//           height: 0,
//         }}
//         transition={{ type: "tween", duration: 0.4, delay: 0.15 }}
//         style={{
//           width: 1,
//           background: "#FDE6E9",
//           margin: "0px auto",
//           position: "fixed",
//           left: "50vw",
//         }}
//       />
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "center",
//           maxWidth: "100vw",
//         }}
//       >
//         <AnimatePresence exitBeforeEnter>
//           {selected ? (
//             <motion.div
//               layoutId="1"
//               onClick={() => setselected(false)}
//               style={{
//                 backgroundImage:
//                   "url(https://i.ytimg.com/vi/zZYwqWfpPBQ/maxresdefault.jpg)",
//                 width: "300px",
//                 height: 300,
//                 margin: "100px 200px",
//                 backgroundSize: "cover",
//               }}
//               initial={{
//                 x: 10,
//                 y: 10,
//               }}
//               animate={{
//                 x: 0,
//                 y: 0,
//               }}
//               whileHover={{
//                 x: 10,
//                 y: 10,
//               }}
//             />
//           ) : (
//             <motion.div
//               layoutId="1"
//               // onClick={() => setselected(true)}
//               style={{
//                 position: "relative",
//                 top: 100,
//                 left: 350,
//                 width: "900px",
//                 height: 500,
//                 background: "#041143",
//                 margin: "80px 50px",
//                 zIndex: 100,

//                 display: "flex",
//                 alignItems: "flex-end",
//                 justifyContent: "flex-end",
//               }}
//               initial={{
//                 x: 10,
//                 y: 10,
//               }}
//               animate={{
//                 x: 0,
//                 y: 0,
//               }}
//             >
//               {/* <motion.div
//                 style={{
//                   overflow: "hidden",
//                   height: "100%",
//                   width: "100%",
//                   // position: "fixed",
//                   // bottom: 0,
//                   // top: 0,
//                   // left: 0,
//                 }}
//               > */}
//               <motion.div
//                 style={{
//                   overflow: "hidden",
//                   display: "flex",
//                   // position: "fixed",
//                   // bottom: 0,
//                   // top: 0,
//                   // left: 0,
//                 }}
//               >
// <motion.img
//   drag="x"
//   style={{ width: "20%" }}
//   initial={{
//     y: -200,
//     opacity: 0,
//   }}
//   animate={{
//     y: 0,
//     opacity: 1,
//   }}
//   transition={{ delay: 0.2 }}
//   src="https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png"
// />
//                 <motion.img
//                   drag="x"
//                   style={{ width: "20%" }}
//                   initial={{
//                     y: -200,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     y: 0,
//                     opacity: 1,
//                   }}
//                   transition={{ delay: 0.2 }}
//                   src="https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png"
//                 />
//                 <motion.img
//                   drag="x"
//                   style={{ width: "20%" }}
//                   initial={{
//                     y: -200,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     y: 0,
//                     opacity: 1,
//                   }}
//                   transition={{ delay: 0.2 }}
//                   src="https://frm-wows-sg.wgcdn.co/wows_forum_sg/monthly_2020_03/pekora.png.aba93c990b641d384f20c7daeeca1ff4.png"
//                 />
//               </motion.div>
//               {/* </motion.div> */}
//               <motion.img
//                 style={{
//                   width: "35%",
//                   zIndex: 2,
//                   marginRight: 80,
//                   marginBottom: 20,
//                 }}
// initial={{
//   x: 200,
//   opacity: 0,
// }}
// exit={{
//   x: 200,
//   opacity: 0,
// }}
// animate={{
//   x: 0,
//   opacity: 1,
// }}
//                 transition={{ delay: 0.7 }}
//                 src="https://i.pinimg.com/originals/0d/04/f0/0d04f07cb5bb3b5cd376679b8860e764.png"
//               />
//               <motion.div
//                 initial={{
//                   width: 0,
//                 }}
//                 animate={{
//                   width: "100%",
//                 }}
//                 transition={{ delay: 0.3, stiffness: 100 }}
//                 style={{
//                   height: 50,
//                   background: "white",
//                   position: "absolute",
//                   bottom: 0,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <motion.h3
//                   initial={{
//                     y: 100,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     y: 0,
//                     opacity: 1,
//                   }}
//                   style={{ color: "black" }}
//                   transition={{ delay: 0.9 }}
//                 >
//                   Teste
//                 </motion.h3>
//               </motion.div>
//               <motion.div
//                 initial={{
//                   width: 0,
//                 }}
//                 animate={{
//                   width: "100%",
//                 }}
//                 transition={{ delay: 0.4, stiffness: 100 }}
//                 style={{
//                   height: 50,
//                   background: "black",
//                   position: "absolute",
//                   bottom: 10,
//                   display: "flex",
//                   zIndex: -1,
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               ></motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {!selected && (
//           <div
//             style={{
//               width: "300px",
//               height: 300,
//               margin: "100px 200px",
//               objectFit: "cover",
//             }}
//           ></div>
//         )}
//         <AnimatePresence exitBeforeEnter>
//           {!selected && (
//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               transition={{ type: "tween", duration: 0.4 }}
//               style={{
//                 background: "rgba(0, 0, 0, 0.5)",
//                 zIndex: 99,
//                 position: "fixed",
//                 top: 0,
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//               }}
//             ></motion.div>
//           )}
//         </AnimatePresence>
//         <img
//           src="https://i.ytimg.com/vi/H2n9dMkAdOA/maxresdefault.jpg"
//           style={{
//             width: "300px",
//             height: 300,
//             margin: "100px 200px",
//             objectFit: "cover",
//           }}
//           alt=""
//         />
//         <img
//           src="https://i.ytimg.com/vi/4LZPIRtVzh0/maxresdefault.jpg"
//           style={{
//             width: "300px",
//             height: 300,
//             margin: "100px 200px",
//             objectFit: "cover",
//           }}
//           alt=""
//         />
//         <img
//           src="https://i.ytimg.com/vi/J7lMoSaEn6w/maxresdefault.jpg"
//           style={{
//             width: "300px",
//             height: 300,
//             margin: "100px 200px",
//             objectFit: "cover",
//           }}
//           alt=""
//         />

//         {/* <img src="" style={{ width: "50vw", height: 100 }} alt="" /> */}
//         {/* <img src="" style={{ width: "50vw", height: 100 }} alt="" /> */}
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import HeaderCommission from "./tests/HeaderCommission";

function App() {
  return (
    <div>
      <HeaderCommission />
    </div>
  );
}

export default App;
