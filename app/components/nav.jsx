import CardNav from './ui/nav';
const Nav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#171717",
      textColor: "#fff",
      links: [
        { label: "Who I am ?", ariaLabel: "About Company", href : "/define" },
        { label: "Certifications", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#171717",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#171717", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Resume", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
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