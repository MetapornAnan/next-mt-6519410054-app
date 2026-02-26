export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full w-full pl-4">
      <h2 className="text-2xl font-normal mb-4">
        Lets Work <span className="text-[#ff5722]">Together !</span>
      </h2>
      
      <h1 className="text-[42px] leading-[1.2] font-bold mb-6">
        Hi From <span className="text-[#ff5722]">Metaporn</span> , <br />
        Interactive Designer & Fullstack <br />
        Web Developer
      </h1>
      
      <p className="text-[#8c8c8c] text-sm max-w-lg mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime 
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto 
        earum voluptates obcaecati corrupti voluptatem .
      </p>

      <div className="flex gap-16">
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-light text-[#ff5722]">3+</span>
          <span className="text-[#8c8c8c] text-[13px] tracking-wide">Years of<br />Experience</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-light text-[#ff5722]">10+</span>
          <span className="text-[#8c8c8c] text-[13px] tracking-wide">Projects<br />Completed</span>
        </div>
      </div>
    </div>
  );
}