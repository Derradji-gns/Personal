import GridSmallBackgroundDemo from "./components/header";
import Tasks from "./components/task";
import SkillsLoop from "./components/skillsLoop";
import LastHero from "./components/last-hero"

export default function Home() {
  return(
    <div className="bg-black overflow-x-hidden h-auto">
      <GridSmallBackgroundDemo/>
      <SkillsLoop/>
      <Tasks/>
      <LastHero/>
    </div>
  );
}
