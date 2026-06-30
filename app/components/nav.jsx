import CardNav from './ui/nav';
const Nav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#171717",
      textColor: "#fff",
      links: [
        { label: "Main Page", ariaLabel: "About page", href : "/" },
        { label: "Who I am ?", ariaLabel: "About Company", href : "/define" },
        { label: "Certifications", ariaLabel: "About Careers", href : "/certifications" }
        
      ]
    },
    {
      label: "Projects", 
      bgColor: "#171717",
      textColor: "#fff",
      links: [
        { label: "Portfolio", ariaLabel: "Featured Projects", href : "/projects" },
        { label: "My Documentations", ariaLabel: "Developer Documentations", href : "/documents" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#171717", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href : "/certifications" },
        { label: "Resume", ariaLabel: "Twitter", href : "/certifications" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href : "/certifications" }
      ]
    }
  ];

  return (
    <CardNav
      logo={"/graphics/Copilot_20260512_225824.png"}
      className='z-1200 w-full'
      logoAlt="Derradji"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#fff"
      buttonTextColor="#fff"
      ease="power3.out"
  theme="light"
/>
  );
};

export default Nav;