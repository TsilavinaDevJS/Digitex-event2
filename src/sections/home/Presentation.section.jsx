import { styled, Typography,Grid,Box } from "@mui/material"
import React from "react"
import Pyramide from "../../assets/pyramide.png"
import Cube from "../../assets/cube.png"
import { motion } from "framer-motion"

const ContentTitle = styled(Grid)(({theme})=>({
  background :theme.palette.background.paper,
  width:"380px",
  padding:"6px 8px 4px 8px",
  marginLeft:"4px",
  clipPath:"polygon(99.78% 108.33%, -0.88% 113.89%, -0.88% -11.12%, 91.23% -13.89%)",
}))

const Title = styled(Typography)(({theme})=>({
  fontSize:"20px",
  color:"white",
  fontWeight:"515",
}))
const Para2 = styled(Typography)({
  color:"white",
  fontSize:"15px",
  fontWeight:"510",
  
})

const item={
  hide:{
    opacity:0,
    y:400
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  }
}




export function Presentation(){
  const viewportConfig={
    once:true
  }
  return (
    <>
  <Box sx={{marginTop:"30px"}} component={motion.div} initial="hide" whileInView="show"  viewport={viewportConfig}>
    <Grid container  component={motion.div} variants={item}>
         <Grid xs={7}>
          <ContentTitle
          sx={{  width:{xs:"100vw",sm:"380px"}}}
          container>
          <Grid xs={10}>
           <Title>
             PRESENTATION DIGITEX
           </Title>          
          </Grid>
          <Grid xs={2}>
             <img style={{width:"auto",height:"25px"}} src={Pyramide} alt=''/>
           </Grid>
             </ContentTitle>
         </Grid>
         <Grid sm={4} sx={{display:{xs:"none",sm:"flex"}}}>
              <img style={{width:"auto",height:"25px",color:"white",marginTop:"12px"}} src={Cube} alt=""/>
         </Grid>
          <Grid md={0.7} sx={{display:{xs:"none",md:"flex"}}}>
              <img style={{width:"auto",height:"40px",color:"white"}} src={Cube} alt=""/>
         </Grid>
     </Grid>
     <Box p={2} component={motion.div} variants={item}>
        <Para2>
            A Pere de rentreprise cligitale, l'innovation et l'acceleration tilers re numerique engagent les entreprises very rune evolution croissante.
              Plus que jarnais, doivent s'appuyer sur les nouvelles technologies pour rester perennes clans un contexte incertain.
        </Para2>
         <br/>
        <Para2>
        Parmi !es pilfers sur lesquels reposent le pilotage de la performance de l'entreprise ainsi que sa digitalisation,
         l'ERP, le ORM, les solutions d'E-Achat, Fa clematerialisation, la BI ainsi que la Data jouerit un role strategique.  
        </Para2>  
        <br/>
        <Para2>
           Madagascar etant un pays a opportunites pour l'externalisation des functions et des services,
        </Para2>  
        <Para2>
          Les nog velles technologies prennent cl'avantages de place dans la vie quoticlienne clans le monde entier mais aussi clans notre pays,
        </Para2>
        <br/>
        <Para2>
            Vest pourquoi iIs serorit Phonneur de Pedition du Salon DIGITEX 2022,
            1es 29 au 31 Mars 2023 pro chains a partir de 09H00 au CANAL Olympia larivo Andohatapenaka.
        </Para2>
     </Box>
     </Box>


    </>
  )
}