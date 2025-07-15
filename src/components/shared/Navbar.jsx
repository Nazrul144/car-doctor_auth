"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();
  const { email, image, name } = session?.data?.user || {};

  //Changing Menu Color by using useEffect:
  const [scrollY, setScrollY] = useState(0);

  useEffect(()=>{

    const handleScroll = ()=>{
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll) //Update scroll position when user scroll

    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  

  },[])

  return (
    <div className={`${scrollY > 100 ? 'bg-[#D1A054]' : 'bg-black/30'} transition-colors duration-500  shadow-xl fixed z-10 w-full top-0`}>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links?.map((link) => (
                <Link key={link.path} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image className="hidden lg:block" src="/Group.svg" alt="Logo" width={100} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 flex gap-4 text-xl font-bold ">
            {links?.map((link) => (
              <Link
                className={` hover:text-primary duration-300 ${pathName == link.path ? "text-red-500" : scrollY > 100 ? "text-black" : "text-white"}`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex space-x-3 items-center">
            <SlHandbag className="text-xl" />
            <IoSearchOutline className="text-xl" />
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <Image
                  className="relative hover:"
                  src={image || "/assets/icons/avater.png"}
                  alt="profile_image"
                  width={30}
                  height={30}
                />
                {name && (
                  <div className="absolute bottom-0 top-4 w-full  text-black text-sm font-bold rounded-md p-1 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                    {name}
                  </div>
                )}
              </div>
            </div>
            <button className="btn text-primary btn-outline">Appointment</button>
            <Link href={"/login"}>
              {session.data ? (
                <button onClick={() => signOut()} className="btn btn-primary text-white font-bold">
                  Logout
                </button>
              ) : (
                <button className="btn btn-primary text-white font-bold">Login</button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "MyBookings",
    path: "/mybookings",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default Navbar;
