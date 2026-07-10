import React from 'react'

type IconName = 'arrow' | 'globe' | 'spark' | 'automation' | 'chart' | 'layers';

const About = ({ Icon }: { Icon: React.ComponentType<{name:IconName; size?: number}> }) => {
  return (
    <section className='proof-section section-pad' id='about'>
      <div className='shell proof-grid'>
        <div className='proof-copy' data-reveal>
          <div className='eyebrow light'>
            <span /> Why Micro Agency
          </div>
          <h2>Less agency overhead. More senior attention on the work.</h2>
          <p>
            You work with a compact delivery model built around clear
            communication, practical technology, and outcomes your team can
            maintain after handover.
          </p>
          <a className='button button-light' href='#process'>
            How projects run <Icon name='arrow' />
          </a>
        </div>
        <div className='proof-cards'>
          <article data-reveal>
            <Icon name='layers' size={30} />
            <strong>Connected thinking</strong>
            <p>
              Brand, user experience, technology, and marketing are considered
              together.
            </p>
          </article>
          <article data-reveal>
            <Icon name='spark' size={30} />
            <strong>Purposeful AI</strong>
            <p>
              Automation is applied where it saves time or improves service—not
              added as decoration.
            </p>
          </article>
          <article data-reveal>
            <Icon name='chart' size={30} />
            <strong>Built to improve</strong>
            <p>
              Reusable components, documented workflows, and measurable release
              goals support iteration.
            </p>
          </article>
          <article className='proof-accent' data-reveal>
            <span className='huge'>100%</span>
            <strong>Responsive by default</strong>
            <p>
              Every screen is designed and tested for mobile, tablet, and
              desktop use.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About