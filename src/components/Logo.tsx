import React from 'react'

export default function Logo() {
    const [compact, setCompact] = React.useState(false);
  return (
    <a className='logo' href='#top' aria-label='Micro Agency home'>
      <svg className='logo-mark' viewBox='0 0 40 40' aria-hidden='true'>
        <rect x='1' y='1' width='38' height='38' rx='11' />
        <path d='M9 28V12h5l6 7.5 6-7.5h5v16h-6v-7l-5 6-5-6v7H9Z' />
      </svg>
      {!compact && (
        <span className='logo-type'>
          <strong>MICRO</strong>
          <span>AGENCY</span>
        </span>
      )}
    </a>
  );
}
