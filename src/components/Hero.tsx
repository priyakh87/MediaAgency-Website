import React from 'react';

type IconName = 'arrow' | 'globe' | 'spark' | 'automation' | 'chart'; 

interface HeroProps{
    Icon: React.ComponentType<{ name: IconName; size?: number }>   
}

export const Hero = ({Icon}: HeroProps)=> {
  return (
    <section className='hero section-pad'>
      <div className='hero-grid' aria-hidden='true' />
      <div className='hero-glow' aria-hidden='true' />
      <div className='shell hero-layout'>
        <div className='hero-copy' data-reveal>
          <div className='eyebrow'>
            <span /> Independent digital studio
          </div>
          <h1>
            Small team.
            <br />
            <em>Serious</em> digital growth.
          </h1>
          <p className='hero-lead'>
            Micro Agency builds conversion-focused websites, useful AI
            automations, and social systems that help ambitious businesses move
            faster.
          </p>
          <div className='hero-actions'>
            <a className='button' href='#contact'>
              Discuss your project <Icon name='arrow' />
            </a>
            <a className='text-link' href='#work'>
              See concept work <Icon name='arrow' size={18} />
            </a>
          </div>
          <div className='hero-meta'>
            <div>
              <Icon name='globe' />
              <span>
                Remote collaboration
                <br />
                <strong>Worldwide</strong>
              </span>
            </div>
            <div>
              <Icon name='spark' />
              <span>
                Built for lean teams
                <br />
                <strong>Clear, fast delivery</strong>
              </span>
            </div>
          </div>
        </div>

        <div className='hero-visual' data-reveal>
          <div className='orbit orbit-one' />
          <div className='orbit orbit-two' />
          <div className='visual-card visual-main'>
            <div className='visual-toolbar'>
              <span />
              <span />
              <span />
            </div>
            <div className='visual-kicker'>MICRO / SYSTEM 01</div>
            <div className='visual-title'>
              Ideas into
              <br />
              digital momentum.
            </div>
            <div className='visual-bars'>
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className='visual-footer'>
              <span>Strategy</span>
              <span>Design</span>
              <span>Build</span>
            </div>
          </div>
          <div className='floating-pill pill-top'>
            <Icon name='automation' size={18} /> AI workflows
          </div>
          <div className='floating-pill pill-bottom'>
            <Icon name='chart' size={18} /> Conversion thinking
          </div>
          <div className='floating-number'>
            03<span>core services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
