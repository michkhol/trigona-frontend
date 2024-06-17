'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MenuItems from './menu-items'
import Image from 'next/image'
import logo from '@/public/images/logo_title.png'

 
export function NavBar() {
  const pathname = usePathname()
 
  return (
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <MenuItems classes="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52"/>
    </div>
    <a className="btn btn-ghost text-xl lg:hidden"><Image src={logo} alt="Trigona Consulting LLC" height={50} /></a>
    <div className="invisible lg:visible w-full flex justify-end"><div className="bg-neutral h-px w-1/2 mx-4"></div></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <MenuItems classes="menu menu-horizontal px-1"/>
  </div>
  <div className="navbar-end">
  <div className="invisible lg:visible w-full"><div className="bg-neutral h-px w-1/2 mx-4"></div></div>
  </div>
</div>
 )
}