import { ReactNode, useEffect, useState } from "react";
import { Header } from "./components/Header";
import Logo from "./components/Logo";
import { Hero } from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

type IconName =
  | "arrow"
  | "spark"
  | "code"
  | "automation"
  | "social"
  | "check"
  | "menu"
  | "close"
  | "mail"
  | "globe"
  | "chart"
  | "layers";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d='M5 12h14' />
        <path d='m13 6 6 6-6 6' />
      </>
    ),
    spark: (
      <>
        <path d='m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z' />
        <path d='m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z' />
      </>
    ),
    code: (
      <>
        <path d='m8 9-4 3 4 3' />
        <path d='m16 9 4 3-4 3' />
        <path d='m14 5-4 14' />
      </>
    ),
    automation: (
      <>
        <path d='M12 3v3' />
        <path d='M12 18v3' />
        <path d='m4.22 4.22 2.12 2.12' />
        <path d='m17.66 17.66 2.12 2.12' />
        <path d='M3 12h3' />
        <path d='M18 12h3' />
        <path d='m4.22 19.78 2.12-2.12' />
        <path d='m17.66 6.34 2.12-2.12' />
        <circle cx='12' cy='12' r='4' />
      </>
    ),
    social: (
      <>
        <circle cx='6' cy='12' r='2.5' />
        <circle cx='18' cy='6' r='2.5' />
        <circle cx='18' cy='18' r='2.5' />
        <path d='m8.2 10.8 7.6-3.6' />
        <path d='m8.2 13.2 7.6 3.6' />
      </>
    ),
    check: <path d='m5 12 4 4L19 6' />,
    menu: (
      <>
        <path d='M4 7h16' />
        <path d='M4 17h16' />
      </>
    ),
    close: (
      <>
        <path d='m6 6 12 12' />
        <path d='m18 6-12 12' />
      </>
    ),
    mail: (
      <>
        <rect x='3' y='5' width='18' height='14' rx='2' />
        <path d='m3 7 9 6 9-6' />
      </>
    ),
    globe: (
      <>
        <circle cx='12' cy='12' r='9' />
        <path d='M3 12h18' />
        <path d='M12 3a15 15 0 0 1 0 18' />
        <path d='M12 3a15 15 0 0 0 0 18' />
      </>
    ),
    chart: (
      <>
        <path d='M4 19V9' />
        <path d='M10 19V5' />
        <path d='M16 19v-7' />
        <path d='M22 19V3' />
      </>
    ),
    layers: (
      <>
        <path d='m12 2 9 5-9 5-9-5 9-5Z' />
        <path d='m3 12 9 5 9-5' />
        <path d='m3 17 9 5 9-5' />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <div id='top'>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        Logo={Logo}
        Icon={Icon}
      />

      <main>
        <Hero Icon={Icon} />

        <div className='marquee' aria-label='Micro Agency capabilities'>
          <div className='marquee-track'>
            {[1, 2].map((group) => (
              <div
                className='marquee-group'
                key={group}
                aria-hidden={group === 2}>
                <span>WEB DEVELOPMENT</span>
                <i>✦</i>
                <span>AI AUTOMATION</span>
                <i>✦</i>
                <span>SOCIAL MEDIA</span>
                <i>✦</i>
                <span>DIGITAL STRATEGY</span>
                <i>✦</i>
              </div>
            ))}
          </div>
        </div>

        <Services Icon={Icon} />

        <About Icon={Icon} />
        <Work />

        <Process Icon={Icon} />

        <Faq />

        <Contact Icon={Icon} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
