import React from 'react'
import Image from 'next/image';
import Profile from '../assets/images/me.jpg';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
 
export default function MyCard() {
  return (
    <div className="w-1/4 bg-[#1D1C1D] text-white rounded-xl shadow-lg p-3.5">
      <p className="text-xl mb-2 first-letter:text-orange-500">Metaporn</p>
      <div className="text-center">
        <Image
          src={Profile}
          alt="profile"
          width={325}
          height={324}
          className="rounded-xl mx-auto"
        />

        <br />
 
        <p className="text-sm text-gray-400">STUID: 6519410054</p>
        <p className="text-sm text-gray-300 mt-1">Fullstack Web Developer</p>
      </div>

      <br />
 
    <div className="flex justify-center gap-4 text-white text-2xl mb-6">
          <FaFacebook className="hover:text-orange-500 cursor-pointer transition" />
          <FaXTwitter className="hover:text-orange-500 cursor-pointer transition" />
          <FaInstagram className="hover:text-orange-500 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-orange-500 cursor-pointer transition" />
          <FaGoogle className="hover:text-orange-500 cursor-pointer transition" />
        </div>
 
 
      <button className="w-full mt-5 bg-[#FF5C00] hover:bg-orange-600 py-2 rounded-lg font-semibold">
        HIRE ME !
      </button>
    </div>
  );
}
 