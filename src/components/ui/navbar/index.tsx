"use client"

import React from "react"
import { FloatingDock } from "../FloatingDock"
import BtnLanguage from "../btn-lenguage"
import { IoHome } from "react-icons/io5"
import { GoProjectSymlink } from "react-icons/go"
import { MdAccountCircle, MdContactMail } from "react-icons/md"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

export default function NavBar() {

  // Número internacional SEM "+"
  const phoneNumber = "541121799242"

  const message = encodeURIComponent(
    "Hello! I discovered your portfolio and would like to contact you regarding potential job opportunities. Could we schedule a conversation?"
  )

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

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
      external: true,
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: "https://linkedin.com/in/gesualdiafonso",
      external: true,
    },
    {
      title: "WhatsApp",
      icon: <FaWhatsapp className="text-neutral-500 dark:text-neutral-200" size={26} />,
      href: whatsappLink,
      external: true,
    },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 
    backdrop-blur-xl bg-white/10 dark:bg-neutral-900/50 border border-white/10 rounded-2xl 
    px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <FloatingDock 
        items={links.map(link => ({
          ...link,
          target: link.external ? "_blank" : undefined,
          rel: link.external ? "noopener noreferrer" : undefined
        }))}
      />

      <div className="hidden md:flex ml-3">
        <BtnLanguage />
      </div>
    </nav>
  )
}
