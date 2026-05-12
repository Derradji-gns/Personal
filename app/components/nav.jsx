import CardNav from './ui/nav';
const Nav = () => {
  const items = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <CardNav
      logo={"/graphics/Copilot_20260512_193431.png"}
      className='z-1000 w-full '
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