import GridSmallBackgroundDemo from "./components/header";
import PortfolioFooter from "./components/footer";
import Tasks from "./components/task";
import SkillsLoop from "./components/skillsLoop";

export default function Home() {
  return(
    <div className="bg-black overflow-x-hidden">
      <GridSmallBackgroundDemo/>
      <SkillsLoop/>
      <Tasks/>
      <PortfolioFooter/>
    </div>
  );
}
