import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Box, Drawer } from "@mui/material";

const container = {
  hide: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      stiffness: 80,
      damping: 50,
    },
  },
};

const item = {
  hide: {
    x: 500,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const NavDrawer = () => {
  const [Option,setOption]=React.useState("Accueil")
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <Drawer open={isOpen}  anchor="right" onClose={() => toggleOpen()}>
          <motion.div
            variants={container}
            initial="hide"
            animate="show"
            style={{ width: "calc(100vw - 60px)",background:"rgb(12, 12, 57)",height:"calc(100vh - 10%)",position:"relative",top:"10%"}}
          >
            <Box my={2.2}>
            </Box>
            <motion.li variants={item} onClick={()=>{setOption('Accueil');toggleOpen()}} style={{display:"flex",justifyContent:"center"}}>
              <a href="#Date" style={{textDecoration:"none",color:"white",textAlign:"center",padding:"7px",width:"90%",fontSize:"1.3rem",border:"1px solid white",marginBottom:"12px",background:Option === "Accueil" ? '#27215F':"transparent"}}>Accueil</a>
            </motion.li>
            <motion.li variants={item} onClick={()=>{setOption('Entreprise');toggleOpen()}} style={{display:"flex",justifyContent:"center"}}>
              <a href="#Entreprise" style={{textDecoration:"none",color:"white",textAlign:"center",padding:"7px",width:"90%",fontSize:"1.3rem",border:"1px solid white",marginBottom:"12px",background:Option === "Entreprise" ? '#27215F':"transparent"}}>Entreprise</a>
            </motion.li>
            <motion.li variants={item} onClick={()=>{setOption('Estimation');toggleOpen()}} style={{display:"flex",justifyContent:"center"}}>
              <a href="#Estimation" style={{textDecoration:"none",color:"white",textAlign:"center",padding:"7px",width:"90%",fontSize:"1.3rem",border:"1px solid white",marginBottom:"12px",background:Option === "Estimation" ? '#27215F':"transparent"}}>Estimation</a>
            </motion.li>
            <motion.li variants={item} onClick={()=>{setOption('Objectif');toggleOpen()}} style={{display:"flex",justifyContent:"center"}}>
              <a href="#Objectif" style={{textDecoration:"none",color:"white",textAlign:"center",padding:"7px",width:"90%",fontSize:"1.3rem",border:"1px solid white",marginBottom:"12px",background:Option === "Objectif" ? '#27215F':"transparent"}}>Objectif</a>
            </motion.li>
            <motion.li variants={item} onClick={()=>{setOption('Plan');toggleOpen()}} style={{display:"flex",justifyContent:"center"}}>
              <a href="#Plan" style={{textDecoration:"none",color:"white",textAlign:"center",padding:"7px",width:"90%",fontSize:"1.3rem",border:"1px solid white",marginBottom:"12px",background:Option === "Plan" ? '#27215F':"transparent"}}>Plan</a>
            </motion.li>
            <motion.li variants={item} onClick={()=>{setOption('Engagement');toggleOpen()}} style={{display:"flex",justifyContent:"center"}}>
              <a href="#Engagement" style={{textDecoration:"none",color:"white",textAlign:"center",padding:"7px",width:"90%",fontSize:"1.3rem",border:"1px solid white",marginBottom:"12px",background:Option === "Engagement" ? '#27215F':"transparent"}}>Engagement</a>
            </motion.li>
          </motion.div>
        </Drawer>
      </motion.div>
    </>
  );
};

export default NavDrawer;
