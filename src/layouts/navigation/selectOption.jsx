import * as React from "react";
import { styled,Grid } from "@mui/material";
import { motion } from "framer-motion";

const WIDTH = "12.12vw";

const FlexBox = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignContent: "space-evenly",
}));
const Item = styled(motion.div)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  width: WIDTH,
}));

const Indicator = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "2px",
  width: "9.4vw",
  position: "relative",
  top: 8,
  marginLeft:"1.4vw"
}));

const Link =styled('a')(({theme})=>({
  color:theme.palette.primary.main,
  fontSize:"1rem",
  textDecoration:"none",
}))

export default function SelectOption() {
  const [option,setOption]=React.useState('Date')
  return (
    <FlexBox>
      <Grid container>
        <Grid xs={2}>
          <Item onClick={()=>setOption('Date')}>
            <Link href="#Date"  >Accueil</Link>
            {option === "Date" && <Indicator layoutId="indicator" />}
          </Item>          
        </Grid>
        <Grid xs={2}>
          <Item onClick={()=>setOption('Entreprise')}>
            <Link href="#Entreprise"  >Entreprise</Link>
            {option === "Entreprise" && <Indicator layoutId="indicator" />}
          </Item>          
        </Grid>
        <Grid xs={2}>
          <Item onClick={()=>setOption('Estimation')}>
            <Link href="#Estimation"  >Estimation</Link>
            {option === "Estimation" && <Indicator layoutId="indicator" />}
          </Item>          
        </Grid>
        <Grid xs={2}>
          <Item onClick={()=>setOption('Objectif')}>
            <Link href="#Objectif"  >Objectif</Link>
            {option === "Objectif" && <Indicator layoutId="indicator" />}
          </Item>          
        </Grid>
        <Grid xs={2}>
        <Item onClick={()=>setOption('Plan')}>
          <Link href="#Plan"  >Plan</Link>
          {option === "Plan" && <Indicator layoutId="indicator" />}
        </Item>            
        </Grid>
        <Grid xs={2}>
        <Item onClick={()=>setOption('Engagement')}>
          <Link href="#Engagement"  >Engagement</Link>
          {option === "Engagement" && <Indicator layoutId="indicator" />}
        </Item>            
        </Grid>
      </Grid>





    

    </FlexBox>
  );
}
