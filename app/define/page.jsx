

export default function page() {
  return (
    <main className="max-w-4xl mx-auto px-6  bg-black py-16 sm:py-24">

      {/* ── Hero ── */}
      <section className="pb-14 border-b mt-[60px] border-zinc-200">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs uppercase tracking-widest text-white">
            About the developer
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-none text-white">
          Hi, I'm{" "}
          <span className="text-green-500">Derradji Abdelbasset</span>
        </h1>

        {/* Role */}
        <p className="mt-7 text-lg text-zinc-200 font-normal">
          Full-stack developer · ICT Student
        </p>

        {/* Bio */}
        <p className="mt-5 text-base text-white leading-7 max-w-xl">
         I am Derradji Amine, a junior software engineer and full stack web developer passionate about building scalable, modern applications. My journey combines hands-on coding with a strong foundation in computer science, allowing me to bridge theory and practice in every project I take on.
         </p>
        {/* CTAs */}

         <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-green-500 hover:bg-zinc-600 text-white text-sm font-medium transition-colors duration-150"
          >
            View my work
          </a>
          <a
            href="mailto:derradjiamineabdelbaset@gmail.com"
            className="px-5 py-2.5 rounded-lg border border-zinc-300 bg-zinc-100 hover:bg-zinc-50 text-zinc-800 text-sm font-medium transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>

        
      </section>

      <div className="section pt-10">
        
        {/* Bio */}
        <h1 className="mt-10 mb-8 text-2xl font-medium text-white ">🌐 Full Stack Development</h1>
        <p className="mt-3 text-base text-white leading-7 max-w-xl">
          With experience in frontend and backend technologies, I design and develop complete web platforms. My expertise spans the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to deliver responsive user interfaces and efficient server-side solutions that work seamlessly together.
          </p>
        {/* CTAs */}

        {/* Bio */}
        <div className="cont2 pt-9">
        <h1 className="mt-10 mb-8 text-2xl font-medium text-white ">☁️ Cloud & DevOps</h1>
        <p className="mt-3 text-base text-white leading-7 max-w-xl">
         Beyond web development, I have solid knowledge in cloud services, Docker, and Kubernetes. I enjoy designing infrastructure that is reliable, containerized, and easy to scale. This DevOps mindset helps me to work in production environement and collaborate wwith DevOps engineers.
        </p>{/* CTAs */}</div>
      </div>
      <div className="cont2 pt-9">
        <h1 className="mt-10 mb-8 text-2xl font-medium text-white ">🎓 Education</h1>
        <p className="mt-3 text-base text-white leading-7 max-w-xl">
         I am currently a third year student at ENSTTIC (École Nationale Supérieure des Télécommunications et des Technologies de l’Information et de la Communication), where I continue to strengthen my technical foundation and explore advanced topics in software engineering, networking, and cloud computing.
      </p>
      </div>

     

    </main>
  );
}