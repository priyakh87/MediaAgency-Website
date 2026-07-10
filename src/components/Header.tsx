import React from 'react'

type IconName = 'arrow' | 'close' | 'menu'; // Or your specific icon string type


interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Logo: React.ComponentType;
  Icon: React.ComponentType<{ name: IconName; size?: number }>;
}

export const Header = ({ menuOpen, setMenuOpen, Logo, Icon }: HeaderProps) => {
  return (
    <header className='site-header'>
      <div className='shell header-inner'>
        <Logo />
        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label='Main navigation'>
          <a href='#services' onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href='#work' onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href='#process' onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href='#about' onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            href='#contact'
            className='mobile-contact'
            onClick={() => setMenuOpen(false)}>
            Start a project
          </a>
        </nav>
        <a className='button button-small header-cta' href='#contact'>
          Start a project <Icon name='arrow' size={18} />
        </a>
        <button
          className='menu-button'
          type='button'
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}>
          <Icon name={menuOpen ? "close" : "menu"} size={25} />
        </button>
      </div>
    </header>
  );
}
