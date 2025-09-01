import MeteorsDemo from "./card";

function Live() {
    return(
        <div className="bg-black w-full h-auto grid gap-20 mt-10 md:grid-cols-2">
<div className="py-3 flex items-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6  ">Portfolio</div>
      <MeteorsDemo title={"Online Store"} desc={"An online store created using WordPress to sell watches , with ability for command and validate the command by the manager"} src="/graphics/logo.jpg" link={"https://watches.gt.tc"}/>
      <MeteorsDemo title={"IGENERGY Website"} desc={"A website designed specifically for a science club, includs all its events, informations and members , also the abbility for joinig through the site"} src="/graphics/av.jpg" link={"http://IgenergyStudentClub.github.io/Website"}/>
            <MeteorsDemo title={"IGENERGY Academy"} desc={"An educational platform developed for club members to bring together as many courses as possible in one place for students."} src="/graphics/book.jpg" link={"http://IgenergyStudentClub.github.io/Platform"}/>
      <MeteorsDemo title={"ELKHALIJ School"} desc={"A form that recieve the informations of people to joining Club events with modern design"} src="/graphics/school-svgrepo-com (2).svg" link={"Http://Derradji-gns.github.io/Elkhalij"}/>
      <MeteorsDemo title={"Inscription From"} desc={"A form that recieve the informations of people to joining Club events with modern design"} src="/graphics/techhub.jpg" link={"https://derradji-gns.github.io/Forms/"}/>
            <MeteorsDemo title={"TECH Store"} desc={"responsive modren store present available products to clients"} src="/graphics/hp-svgrepo-com.svg" link={"http://Derradji-gns.github.io/Store"}/>

        </div>

    );
}

export default Live;

