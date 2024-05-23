import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: "HOME", href: "/"},
  { name: "ABOUT", href: "/about"},
  { name: "SERVICES", href: "/services"},
  { name: "CONTACT", href: "/contact"},
]

export default function MenuItems({ classes }: { classes: string }) {
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    elem?.blur(); // Deprecated, TODO: Shift focus to main window
  };

  const pathname = usePathname()  
  return (
    <ul tabIndex={0} className={classes}>
      { navLinks.map((link) => {
        return (<li onClick={handleClick} key={link.href} ><Link className={`link ${pathname === link.href ? 'active' : ''}`} href={link.href}>{link.name}</Link></li>)
      })}
    </ul>
  )
}

