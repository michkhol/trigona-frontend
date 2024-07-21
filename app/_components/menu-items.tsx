import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from './nav-links';


export default function MenuItems({ classes }: { classes: string }) {
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    elem?.blur(); // Deprecated, TODO: Shift focus to main window
  };

  const pathname = usePathname()  
  return (
    <ul tabIndex={0} className={classes}>
      { Array.from(navLinks.keys()).map((key) => {
        return (<li onClick={handleClick} key={navLinks.get(key)} ><Link className="font-bold hover:link hover:bg-base-200" href={navLinks.get(key)!}>{key}</Link></li>)
      })}
    </ul>
  )
}

