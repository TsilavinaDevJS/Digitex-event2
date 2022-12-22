import React from "react";
import HeroSection from "../sections/home/hero";
import { PlaneSection } from "../sections/home/Plane.section"
import {Presentation} from "../sections/home/Presentation.section"
import {KeyNumbers} from "../sections/home/Cles.section"
import { Goal } from "../sections/home/Goal.section";
import {EngagementSection} from "../sections/home/Engagement.section"

export default function Home() {
  return (
    <div>
      <div id="Date">
          <HeroSection />
      </div>
      <div id="Entreprise">
         <Presentation/>
      </div>
      <div id='Estimation'>
         <KeyNumbers />
      </div>
      <div id="Objectif">
          <Goal  />
      </div>
      <div id="Plan">
         <PlaneSection />
      </div>
      <div id="Engagement">
        <EngagementSection/>
      </div>
    </div>
  );
}
