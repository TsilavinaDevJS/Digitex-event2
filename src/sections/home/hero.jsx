import { Box,Grid, Typography,styled } from "@mui/material";
import React from "react";
import Bg from "../../assets/Background2.png"
import Vr from "../../assets/VR.png"
import { Markunread,Phone } from "@mui/icons-material";
import { motion } from "framer-motion";

// const ImageWidth = 180;

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hide: {
    opacity: 0,
    x: 400,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const item2={
  hide:{
    opacity:0,
    y:400
  },
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:0.8,
    }
  }
}

const imageDown = {
  hide: {
    opacity: 0,
    y: 400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const imageUp = {
  hide: {
    opacity: 0,
    y: -400,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

// const partener = {
//   hide: {
//     opacity: 0,
//     scale: 0,
//   },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.4,
//     },
//   },
// };

const TitlePresent=styled(Typography)({
  fontWeight:"519",
  paddingTop:"12px"
})

export default function HeroSection() {
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return (
    <>
    <Box component={motion.div} variants={container} initial="hide" whileInView="show" viewport={viewportConfig} position={"relative"} sx={{paddingTop:"6.4em"}}>
      <Box position={"absolute"} sx={{zIndex:"1"}}>
        <Box component={motion.img} src={Bg} sx={{width:"100vw",height:"auto"}} alt=""/>
      </Box>
    <Box p={4} sx={{position:"inherit",zIndex:"99",paddingBottom:"7.81vw"}} >
      <Grid container sx={{marginTop:"0.93vw"}}>
        <Grid xs={4}>
          <motion.img variants={imageUp}  viewportConfig={viewportConfig} src={Vr} style={{width:"30vw",height:"auto",position:"relative"}} alt=""/>
        </Grid>
        <Grid xs={8}>
          <TitlePresent component={motion.div} variants={item}>
            <span style={{color:"#B33C84",fontSize:"4.3vw"}}>Salon</span>
            <Box component="span" m="{1}" sx={{color:"orange",display:"block",marginTop:{xs:"-10px",sm:"-22px"},fontSize:"5.86vw"}}>DIGITEX</Box>
            <span style={{color:"white",fontSize:"1.95vw"}}>Digitalisation-Technologie-Externalisation</span>
          </TitlePresent>
          <Grid container sx={{marginTop:"9.53vw"}}>
            <Grid xs={6}></Grid>
            <Grid xs={6}>
              <TitlePresent component={motion.div} variants={item2} sx={{textAlign:"end",marginTop:{xs:"-53px",sm:"-10px"}}}>
                <span style={{color:"orange",fontSize:"1.95vw",display:"block"}}>Date : </span>
                <span style={{fontSize:"4.3vw",color:"white"}}>
                  Du &#140;
                  <span style={{color:"orange"}}>29</span> &#140;
                   au &#140;
                    <span style={{color:"orange"}}>31</span> <br/>
                    mars 2023
                </span>
              </TitlePresent>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={2.5}></Grid>
            <Grid xs={9.5}>
              <TitlePresent  component={motion.div} variants={item2} sx={{fontSize:"2.73vw",color:"white",textAlign:"end",width:"50vw"}}>
                Au canal Olympia Andohatapenaka
              </TitlePresent>
            </Grid>
          </Grid>
          <Grid container sx={{marginTop:{xs:"0",md:"3.909vw"}}}>
            <Grid xs={6}></Grid>
            <Grid xs={6}>
              <TitlePresent  component={motion.div} variants={item2} sx={{textAlign:"end"}}>
                <Box component="span" m="{1}" sx={{color:"white",textTransform:"uppercase",fontSize:{xs:"12px",sm:"1.32vw"}}}>infoline</Box>
                <Box component="span" m='{1}' sx={{color:"orange",fontSize:{xs:"8px",sm:"1.32vw"},display:"block",width:{xs:"134px",sm:"auto"},marginTop:{xs:"-6px",sm:"auto"}}}>digitex.mdg@gmail.com <Markunread sx={{marginBottom:{xs:"-2px",sm:"-6px"},height:{xs:"12px",sm:"auto"}}}/></Box>
                <Box component="span" m='{1}' sx={{color:"orange",fontSize:{xs:"8px",sm:"1.32vw"},display:"block",width:{xs:"134px",sm:"auto"},marginTop:{xs:"-2px",sm:"auto"}}}>(+261) 34 02 442 38<Phone sx={{marginBottom:{xs:"-2px",sm:"-6px"},height:{xs:"12px",sm:"auto"}}}/></Box>
                <Box component="span" m='{1}' sx={{color:"orange",fontSize:{xs:"8px",sm:"1.32vw"},display:"block",width:{xs:"134px",sm:"auto"},marginTop:{xs:"-2px",sm:"auto"}}}>(+261) 34 44 47 131<Phone sx={{marginBottom:{xs:"-2px",sm:"-6px"},height:{xs:"12px",sm:"auto"}}}/></Box>
              </TitlePresent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>  
   </Box>


    </>
  );
}
