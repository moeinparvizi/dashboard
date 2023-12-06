import Image from "next/image"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const Rightbar = () => {

  return (
    <div className="fixed hidden md:flex flex-wrap md:pe-5">
      <div className="p-5 rounded-lg mb-5 relative bg-gradient-to-b from-bgDark to-bg">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image
            alt=""
            fill
            src="/astronaut.png"
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="capitalize font-bold">
            🔥 available now
          </span>
          <h3>
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-textHard text-[12px] font-semibold">
            Takes 4 minutes to learn
          </span>
          <p className="text-[14px] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reprehenderit eius libero perspiciatis
            recusandae possimus.
          </p>
          <button className="p-[10px] flex items-center gap-[10px] w-max bg-primary transition-all hover:bg-accent border-none rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="p-5 rounded-lg mb-5  bg-gradient-to-b from-bgDark to-bg">
        <div className="flex flex-col gap-5">
          <span className="capitalize font-bold">
            🚀 Coming Soon
          </span>
          <h3>
            New server actions are available, partial
            pre-rendering is coming up!
          </h3>
          <span className="text-textHard text-[12px] font-semibold">
            Boost your productivity
          </span>
          <p className="text-[14px] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reprehenderit eius libero perspiciatis
            recusandae possimus.
          </p>
          <button className="p-[10px] flex items-center gap-[10px] w-max bg-primary transition-all hover:bg-accent border-none rounded-md cursor-pointer">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
