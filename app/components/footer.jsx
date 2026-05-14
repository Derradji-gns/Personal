import Image from 'next/image';

function Footer() {
    return(
        <footer className="bg-black mt-20">
          <hr className="border-neutral-300"></hr>
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
     

        <div className="flex justify-center items-center gap-3 ">
          <div className="flex justify-center items-center  h-full w-[50%]">
            <Image src="/graphics/Copilot_20260512_225824.png" width={120} height={120} />
          </div>
          

          <ul className="mt-6 space-y-4 text-sm h-full w-[50%]">
            <li>
              <a href="#" className="text-neutral-700 transition hover:opacity-75"> Introduction</a>
            </li>

            <li>
              <a href="#" className="text-neutral-700 transition hover:opacity-75"> Skills </a>
            </li>

            <li>
              <a href="#" className="text-neutral-700 transition hover:opacity-75"> Projects </a>
            </li>

            <li>
              <a href="#" className="text-neutral-700 transition hover:opacity-75">
                helpfull links
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</footer>
    );
}

export default Footer;