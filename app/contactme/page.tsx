"use client";

export default function Contact() {
  return (
    <div className="max-w-3xl text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2">
        Contact <span className="text-orange-500">Me</span>
      </h2>
      <p className="text-gray-400 mb-10">Let’s get in touch!</p>

      {/* Form */}
      <form className="space-y-8">
        <div className="grid grid-cols-2 gap-8">

  {/* Email */}
  <div className="relative">
    <input
      type="email"
      placeholder=" "
      className="peer w-full bg-transparent border-b border-white/30
      py-2 text-white focus:outline-none focus:border-orange-500
      transition duration-300"
    />
    <label
      className="absolute left-0 top-2 text-[#FF5C00] text-sm
      transition-all duration-300
      peer-placeholder-shown:top-2
      peer-focus:-top-3
      peer-focus:text-orange-500
      peer-focus:text-xs"
    >
      Email
    </label>
  </div>

  {/* Phone */}
  <div className="relative">
    <input
      type="text"
      placeholder=" "
      className="peer w-full bg-transparent border-b border-white/30
      py-2 text-white focus:outline-none focus:border-orange-500
      transition duration-300"
    />
    <label
      className="absolute left-0 top-2 text-[#FF5C00] text-sm
      transition-all duration-300
      peer-placeholder-shown:top-2
      peer-focus:-top-3
      peer-focus:text-orange-500
      peer-focus:text-xs"
    >
      Phone
    </label>
  </div>

  {/* Name */}
  <div className="relative">
    <input
      type="text"
      placeholder=" "
      className="peer w-full bg-transparent border-b border-white/30
      py-2 text-white focus:outline-none focus:border-orange-500
      transition duration-300"
    />
    <label
      className="absolute left-0 top-2 text-[#FF5C00] text-sm
      transition-all duration-300
      peer-placeholder-shown:top-2
      peer-focus:-top-3
      peer-focus:text-orange-500
      peer-focus:text-xs"
    >
      Name
    </label>
  </div>

  {/* Address */}
  <div className="relative">
    <input
      type="text"
      placeholder=" "
      className="peer w-full bg-transparent border-b border-white/30
      py-2 text-white focus:outline-none focus:border-orange-500
      transition duration-300"
    />
    <label
      className="absolute left-0 top-2 text-[#FF5C00] text-sm
      transition-all duration-300
      peer-placeholder-shown:top-2
      peer-focus:-top-3
      peer-focus:text-orange-500
      peer-focus:text-xs"
    >
      Address
    </label>
  </div>

</div>
        
        {/* Content / Message */}
        <div>
          <label className="block text-orange-500 text-sm mb-2">
            Content
          </label>
          <textarea
            rows={3}
            className="w-1/2 bg-transparent border-b border-white/30 
            focus:outline-none focus:border-orange-500 
            transition duration-300 resize-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
  <label className="flex items-center gap-2 cursor-pointer relative">
    
    {/* Input */}
    <input
      type="checkbox"
      className="peer appearance-none w-5 h-5 
      border border-white/40 
      rounded-sm 
      bg-transparent 
      checked:bg-orange-500 
      checked:border-orange-500 
      transition duration-200"
    />

    {/* Check Icon */}
    <svg
      className="absolute left-[2px] w-4 h-4 text-white 
      opacity-0 peer-checked:opacity-100 
      pointer-events-none transition duration-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>

    <span>I would like to receive the newsletter.</span>
  </label>
</div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/2 bg-[#FF5C00] hover:bg-orange-600
                    transition duration-300 
                    py-2 rounded-md text-white font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

/* Reusable Input Component */
function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-orange-500 text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-transparent border-b border-white/30 
        focus:outline-none focus:border-orange-500 
        transition duration-300"
      />
    </div>
  );
}