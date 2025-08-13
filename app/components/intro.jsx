

function Intro() {
    return(
        <div className="w-full mb-10 ">
<div className="py-3 flex items-center bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6  ">Presentation</div>
            {/* Profile */}
<div className="flex w-[70%] items-center gap-x-3 ml-6 mt-5">
  <div className="shrink-0">
    <img className="shrink-0 size-16 rounded-full" src="/graphics/me.jpg" alt="Avatar" />
  </div>

  <div className="grow">
    <h1 className="text-sm font-medium text-white">
      Derradji Amine Abdelbasset
    </h1>
    <p className="text-sm text-gray-400">
      ICT Student, Web developer
    </p>
  </div>
</div>
{/* End Profile */}

{/* About */}
<div className="mt-8 ml-3">
  <p className="text-sm text-gray-300">
I am a student at Higher School of Telecommunications Information and Communication Technologies, devoting my time and efforts to research and learning in the fields of technology and computer science, with a special focus on web development. 
  </p>

  <p className="mt-3 text-sm text-gray-300 ">
I believe that learning is a continuous journey, so I always seek to acquire new skills and improve my capabilities, relying on my great passion for technology and continuous development.
  </p>

  <ul className="mt-5 flex flex-col gap-y-3">
    <li className="flex items-center gap-x-2.5">
      <svg className="shrink-0 size-3.5 text-gray-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      <a className="text-[13px] text-gray-300 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="">
        amine.derradji@ensttic.dz
      </a>
    </li>

    <li className="flex items-center gap-x-2.5">
      <svg className="shrink-0 size-3.5 text-gray-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor"/></svg>
      <a className="text-[13px] text-gray-300 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="">
        @aminederr26
      </a>
    </li>

    <li className="flex items-center gap-x-2.5">
      <svg className="shrink-0 size-3.5 text-gray-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
      <a className="text-[13px] text-gray-300 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="">
        @derradjiA997
      </a>
    </li>
  </ul>
</div>
{/* End About */}
</div>


    );
}

export default Intro;