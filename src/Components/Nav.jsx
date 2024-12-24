import { hamburger } from '../assets/icons';
import {headerLogo} from '../assets/images';
import {navLinks} from '../constants';
import { useState } from 'react';

const Nav = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
  
  return (
    <header className="padding-x py-8 z-10 absolute w-full ">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
             <img
                src={headerLogo}
                alt='Logo'
                width={130}
                height={29}
             />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                   href={item.href}
                   className='font-montserrat leading-normal text-lg text-slate-500 hover:underline'
                  >
                    {item.label}
                  </a>
                </li>
                 
              ))}
            </ul>
            <div className='hidden max-lg:block' >
              <img
              src={hamburger}
              alt='Hamburger'
              width={25}
              height={25}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>

            {isMenuOpen && (
              <ul className='hidden max-lg:block absolute top-full right-0  bg-white shadow-lg
              flex flex-col items-center gap-4 p-8'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='font-montserrat leading-normal text-lg 
                      text-slate-500 hover:underline'
                      onClick={()=> setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
        </nav>
    </header>
  )
}

export default Nav 
