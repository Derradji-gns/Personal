

import GridSmallBackgroundDemo from "./components/header";
import SpotlightPreview from "./components/hiring";
import StatefulButtonDemo from "./components/button";
import Footer from "./components/footer";
import FloatingNavDemo  from "./components/navbar";
import Live from "./components/live";
import SkillsLoop from "./components/skillsLoop";
export default function Home() {
  return(
    <div className="bg-black">
      <FloatingNavDemo/>
      <GridSmallBackgroundDemo/>
      <SkillsLoop/>
      <Live/>
      <SpotlightPreview/>
      <StatefulButtonDemo/>
      <Footer/>

    </div>
  );
}
