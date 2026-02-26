import Image from "next/image";
import Project from "@/assets/images/Project1.png";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center h-full w-full pl-4">
      <h2 className="text-4xl font-bold mb-10">
        Featured <span className="text-[#FF5C00]">Projects</span>
      </h2>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">
          Manage Task App - fullstack web development
        </h3>
        
        <p className="text-[#7D7373] text-sm leading-relaxed max-w-2xl mb-6">
          Here&apos;s my latest project built with Next.js and Laravel, using TailwindCSS on the 
          front-end. Watch the video to see the responsive landing page in action!
        </p>

        <div className="w-full rounded-xl text-center mx-8">
          <Image
          src={Project}
          alt="Project"
          width={620}
          height={337}
        />
        </div>
      </div>
    </div>
  );
}