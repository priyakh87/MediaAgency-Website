import { useMemo } from 'react';
import Logo from './Logo';


const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "#contact";
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || "#contact";


  
const Footer = () => {
    const year = useMemo(() => new Date().getFullYear(), []);
    
  return (
    <footer className='site-footer'>
      <div className='shell footer-top'>
        <Logo />
        <p>Focused digital execution for ambitious businesses.</p>
        <div className='footer-socials'>
          <a href={LINKEDIN_URL}>LinkedIn</a>
          <a href={INSTAGRAM_URL}>Instagram</a>
        </div>
      </div>
      <div className='shell footer-bottom'>
        <span>© {year} Micro Agency. All rights reserved.</span>
        <span>Original portfolio concept.</span>
      </div>
    </footer>
  );
}

export default Footer