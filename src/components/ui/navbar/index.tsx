"use client"

import React from "react"
import { FloatingDock } from "../FloatingDock"
import BtnLanguage from "../btn-lenguage"
import { IoHome } from "react-icons/io5"
import { GoProjectSymlink } from "react-icons/go"
import { MdAccountCircle, MdContactMail } from "react-icons/md"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function NavBar() {
  const links = [
    {
      title: "Home",
      icon: <IoHome className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "#home",
    },
    {
      title: "About",
      icon: <MdAccountCircle className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <GoProjectSymlink className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <MdContactMail className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <FaGithub className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "https://github.com/gesualdiafonso",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "https://linkedin.com/in/gesualdiafonso",
    },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 
    backdrop-blur-xl bg-white/10 dark:bg-neutral-900/50 border border-white/10 rounded-2xl 
    px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <FloatingDock items={links} />
      <div className="hidden md:flex ml-3">
        <BtnLanguage />
      </div>
    </nav>
  )
}
