

import GridSmallBackgroundDemo from "./components/header";
import SpotlightPreview from "./components/hiring";
import StatefulButtonDemo from "./components/button";
import Footer from "./components/footer";
import FloatingNavDemo  from "./components/navbar";
import Tasks from "./components/task";
import SkillsLoop from "./components/skillsLoop";
import Nav from "./components/nav";
export default function Home() {
  return(
    <div className="bg-black overflow-x-hidden">
      <Nav/>
      <GridSmallBackgroundDemo/>
      <SkillsLoop/>
      <Tasks/>
      <SpotlightPreview/>
      <StatefulButtonDemo/>
      <Footer/>
    </div>
  );
}
