"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        target="_blank"
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://devminds.me/"
      >
        My Company &nbsp;&#129109;
      </Link>
      <Link
        target="_blank"
        href="https://franciscopfeiffer.vercel.app"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <Image src="/devminds.png" width={45} height={45} alt="" />
        <span className="pl-1 font-medium text-red-300">Francisco Pfeiffer</span>
      </Link>
      <Link
        target="_blank"
        href="https://github.com/franpfeiffer/CodeCanvas"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
