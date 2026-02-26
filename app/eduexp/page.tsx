export default function EduExp() {
  return (
    <div className="flex flex-col justify-center h-full w-full pl-4">
      <h2 className="text-4xl font-bold mb-10">
        Education & <span className="text-[#FF5C00]">Experience</span>
      </h2>
      
      <div className="flex flex-col gap-3 mx-5 text-3xl">
        <div>
          <span className="text-[#FF5C00] text-xl">2022 - Present</span>
          <h3 className="text-white font-bold text-lg mt-1">UI/UX Designer</h3>
          <p className="text-[#7D7373] text-lg">Freelance</p>
          <h3 className="text-white font-bold text-lg mt-2">Fullstack Web Developer</h3>
          <p className="text-[#7D7373] text-lg">Freelance</p>
        </div>

        <div>
          <span className="text-[#7D7373] text-lg">2022- 2025</span>
          <h3 className="text-white font-bold text-lg mt-1">Bachelor Degree in Technology Digital and Innovation</h3>
          <p className="text-[#7D7373] text-lg">Southeast Asia University</p>
        </div>

        <div>
          <span className="text-[#7D7373] text-lg">2016- 2021</span>
          <h3 className="text-white font-bold text-lg mt-1">High school</h3>
          <p className="text-[#7D7373] text-lg">Assumption College Thonburi School</p>
        </div>
      </div>
    </div>
  );
}