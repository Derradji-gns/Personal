

import GridSmallBackgroundDemo from "./components/header";
import Skills from "./components/skills";
import SpotlightPreview from "./components/hiring";
import StatefulButtonDemo from "./components/button";
import Footer from "./components/footer";
import Intro from "./components/intro";
import FloatingNavDemo  from "./components/navbar";
import Live from "./components/live";
export default function Home() {
  return(
    <div className="bg-black">
      <FloatingNavDemo/>
      <GridSmallBackgroundDemo/>
      <Intro/>
      <Skills/>
      <Live/>
      <SpotlightPreview/>
      <StatefulButtonDemo/>
      <Footer/>

    </div>
  );
}
