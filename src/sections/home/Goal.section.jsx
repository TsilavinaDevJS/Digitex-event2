import { styled, Typography,Grid,Box, Divider } from "@mui/material"
import React from "react"
import Pyramide from "../../assets/pyramide.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cube from "../../assets/cube.png"
import ProgrammesImage from "../../assets/Programmes.jpg"
import FunImg from "../../assets/Creation/Objectif.png"
import ParameterCercle from "../../assets/Creation/ParameterCercle.png"
import CaskCercle from "../../assets/Creation/CaskCercle.png"
import Internet from "../../assets/Creation/Internet.png"
import Parameter2 from "../../assets/Creation/Parameter2.png"
import Internet2 from "../../assets/Creation/internet2.png"
import StatistiqueMoney from "../../assets/Creation/statistiqueMoney.png"
import Ecole from "../../assets/Creation/Ecole.png"
import { motion } from "framer-motion";


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

const Triangle=styled(Box)({
  height:"45px",
  width:"45px",
  background:"#B33C84",
  clipPath:"polygon(80.64% 47.94%, 1.39% 88.89%, 3.67% 0.24%, 78.25% 44.23%)"
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


function ArrowForwardCode(){

  return(
    <>
       <Grid container sx={{marginLeft:"-8px"}} >
        <Grid xs={2}>
          <ArrowForwardIosIcon sx={{color:"orange",width:"55px",height:"40px"}}/>
        </Grid>
        <Grid xs={2} >
          <ArrowForwardIosIcon sx={{color:"orange",width:"55px",height:"40px"}}/>
        </Grid>
    </Grid>
    </>
  )
}

export function Goal(){
  const viewportConfig = {
    once: true,
    margin: "320px",
  };
  return(
    <>
    <Grid container sx={{marginTop:"30px",paddingBottom:"12px"}} component={motion.div} initial="hide" whileInView="show" viewport={viewportConfig}>
      <Grid xs={12} sm={6} md={4}  component={motion.div} variants={item} >
       <ContentTitle
       sx={{  width:{xs:"100vw",sm:"380px"}}}
          container>
          <Grid xs={10}>
           <Title>
             LES UNIVERS THÉMATIQUES
           </Title>          
          </Grid>
          <Grid xs={2}>
             <img style={{width:"auto",height:"25px"}} src={Pyramide} alt=''/>
           </Grid>
       </ContentTitle> 
       <Box className="Content-thematique"  p={2}>
        <Grid container sx={{marginBottom:"12px"}}>
          <Grid xs={2.5}>
              <img src={ParameterCercle} sx={{height:"45px",width:"45px",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              Les entreprises de services Numériques
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}} >
          <Grid xs={2.5}>
              <img src={CaskCercle} sx={{height:"45px",width:"45px",color:"white",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              Les entreprises d'Outsoucing : Call Center,assistanat...
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}} >
          <Grid xs={2.5}>
              <img src={Internet} sx={{height:"45px",width:"45px",color:"white",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              Les fournisseurs en télephonique et internet
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}} >
          <Grid xs={2.5}>
              <img src={Parameter2} sx={{height:"45px",width:"45px",color:"white",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              Les fournisseurs de materiels technologues
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}} >
          <Grid xs={2.5}>
              <img src={Internet2} sx={{height:"45px",width:"45px",color:"white",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              Les fournisseurs d'application et de solution numériques
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}} >
          <Grid xs={2.5}>
              <img src={StatistiqueMoney} sx={{height:"45px",width:"45px",color:"white",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              institutions financiéres
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}} >
          <Grid xs={2.5}>
              <img src={Ecole} sx={{height:"45px",width:"45px",color:"white",marginTop:"12px",marginLeft:"12px"}} alt=""/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"20px"}}>
              Ecoles et universités
            </Para2>
          </Grid>
        </Grid>
      </Box>     
      </Grid>
      <Grid xs={12} sm={6} md={4}   component={motion.div} variants={item}>
      <Divider
       orientation="vertical"
        sx={{
            display:"inline-block",
            width:"3px",
            background:"linear-gradient(45deg,#27215F  10%,#B33C84   90%)",
            marginRight:"-6px",
            marginBottom:{xs:"-343px",sm:"-168px",lg:"-183px"},
         }}/>
      <Box sx={{display:"inline-block",marginTop:{xs:"-159px",sm:"-22px"}}}>
      <ContentTitle
      sx={{  width:{xs:"100vw",sm:"380px"}}}
          container>
          <Grid xs={10}>
           <Title>
             OBJECTIFS
           </Title>          
          </Grid>
          <Grid xs={2}>
             <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
           </Grid>
       </ContentTitle> 
       <Box className="content-Objectif" p={2}>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              INNOVER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              INNOVER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              DÉVELOPPER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              ÉCHANGER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              ORIENTER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              INITIER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              RECRUTER
            </Title>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"9px"}}>
          <Grid xs={2}>
            <Triangle/>
          </Grid>
          <Grid xs={9}>
            <Title sx={{marginTop:"9px"}}>
              RÉSEAUTER
            </Title>
          </Grid>
        </Grid>
        <Box sx={{marginTop:"1.954vw"}}>
        <img src={FunImg} style={{width:"200px",height:"150px",float:"right"}} alt=""/>
        </Box>
       </Box>
       </Box>
      </Grid>
      <Grid xs={12} sm={6} md={4} sx={{paddingTop:{xs:"225px",sm:"0"}}}   component={motion.div} variants={item}>
      <Divider
       orientation="vertical"
        sx={{
            display:"inline-block",
            width:"3px",
            background:"linear-gradient(45deg,#27215F  10%,#B33C84   90%)",
            marginRight:"-6px",
            marginBottom:{xs:"-672px",sm:"-16px",md:"-21px",lg:"-16.4px"}
         }}/>
      <Box sx={{display:"inline-block",marginTop:{md:"-633px",lg:"0"}}}>
      <ContentTitle
      sx={{  width:{xs:"100vw",sm:"380px"}}}
          container>
          <Grid xs={10}>
           <Title>
             PROGRAMMES
           </Title>          
          </Grid>
          <Grid xs={2}>
             <img style={{width:"auto",height:"25px"}} src={Cube} alt=''/>
           </Grid>
       </ContentTitle> 
       <Box className="content-Programmes" p={2} >
        <Grid container>
          <Grid xs={2}>
            <ArrowForwardCode/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"9px"}}>
              JOURNÉES DE RECRUTEMENT
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}}>
          <Grid xs={2}>
            <ArrowForwardCode/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"12px"}}>
              CONFÉRENCES ET ATELIERS
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}}>
          <Grid xs={2}>
            <ArrowForwardCode/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"12px"}}>
              RENCONTRES B2B
            </Para2>
          </Grid>
        </Grid>
        <Grid container sx={{marginBottom:"12px"}}>
          <Grid xs={2}>
            <ArrowForwardCode/>
          </Grid>
          <Grid xs={9}>
            <Para2 sx={{marginTop:"12px"}}>
              ANIMATIONS ET DÉMONSTRATIONS DIVERS
            </Para2>
          </Grid>
        </Grid>
        <Box sx={{display:"grid",justifyContent:"center",paddingTop:"85px"}}>
          <img style={{width:"auto",height:"280px"}} src={ProgrammesImage} alt=''/>
        </Box>
       </Box>
       </Box>
      </Grid>
    </Grid>

    </>
  )
}