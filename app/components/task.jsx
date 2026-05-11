import BorderGlow from '../components/ui/task';
import { FaServer, FaCloudUploadAlt } from "react-icons/fa"
import { GoContainer } from "react-icons/go";;
import { MdOutlineWeb, MdDevices } from "react-icons/md";
import { SiKubernetes } from "react-icons/si";
import { PiDevToLogoFill } from "react-icons/pi";

export default function Tasks() {
    const Tasks = [
        {
            "task" : "Build a Cloud Infrastructure",
            "Description" : "I can realise a Cloud Infrastructure using Huawei Cloud Platform or similar platform's providers",
            "src" : <FaServer className='w-6 h-6 text-neutral-200 mb-1' />
        },
        {
            "task" : "Developp a Full Stack Platforms",
            "Description" : "I can developp a full stack platform using MERN technologies",
            "src" : <MdOutlineWeb className='w-6 h-6 text-neutral-200 mb-1'/>
        },
        {
            "task" : "Build a responsive web design pages",
            "Description" : " ensure the responsitivity of web design using modern design technologies like tailwind and animation tools",
            "src" : <MdDevices className='w-6 h-6 text-neutral-200 mb-1'/>
        },
        {
            "task" : "Build a Cloud Native apps",
            "Description" : "I can build ready cloud apps using Docker and containerasation",
            "src" : <GoContainer className='w-6 h-6 text-neutral-200 mb-1'/>
        },
        {
            "task" : "Deal with Kubernetes environment",
            "Description" : "I already passed a Kubernetes formation which makes me able to interacte with similar environments and deployments",
            "src" : <SiKubernetes className='w-6 h-6 text-neutral-200 mb-1'/>
        },
        {
            "task" : "Contrbuite with Devs Team",
            "Description" : "I have good understanda nd practise of Git/Github allows me to work with devs on same env",
            "src" : <PiDevToLogoFill className='w-6 h-6 text-neutral-200 mb-1'/>
        },
    ]
    
    return (
        <div className="p-4">
            <div className="py-3 flex items-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 mb-10 ">What I Can Do ?</div>
            

                { Tasks.map((task, index) => {

                    return (

<div className="grid gap-2" key={index}>
        <BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#120F17"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#c084fc', '#f472b6', '#38bdf8']}
  className='m-4'
>
  <div style={{ padding: '2em' }}>
    <div className="flex  justify-start gap-4 items-center mb-1">
    {task.src}
    <h2 className='text-white mb-1 font-bold font-3xl'>{task.task}</h2></div>
    <p className='text-neutral-400'>{task.Description}.</p>
  </div>
</BorderGlow>

 </div>)

                })}

</div>
       
    )
} ;