import GridSmallBackgroundDemo from "./components/header";
import PortfolioFooter from "./components/footer";
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
      <PortfolioFooter/>
    </div>
  );
}
