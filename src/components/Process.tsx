import React from 'react'

type IconName = 'arrow'; 

const process = [
  [
    "01",
    "Discover",
    "We clarify the business goal, audience, offer, constraints, and what success should look like.",
  ],
  [
    "02",
    "Plan",
    "You receive a focused scope, recommended approach, milestones, and a clear delivery path.",
  ],
  [
    "03",
    "Build",
    "Design and implementation happen in short review cycles so important decisions stay visible.",
  ],
  [
    "04",
    "Launch",
    "We test the experience, document the handover, and support a controlled release.",
  ],
];


const Process = ({Icon}: {Icon: React.ComponentType<{ name: IconName; size?: number }>}) => {
  return (
    <section className='process section-pad' id='process'>
      <div className='shell process-layout'>
        <div className='process-intro' data-reveal>
          <div className='eyebrow'>
            <span /> Process
          </div>
          <h2>Clear from first conversation to final handover.</h2>
          <p>
            No bloated presentation cycles. Each stage ends with a decision, a
            deliverable, or a working release.
          </p>
          <a className='text-link' href='#contact'>
            Start with a brief <Icon name='arrow' size={18} />
          </a>
        </div>
        <div className='process-steps'>
          {process.map(([number, title, copy]) => (
            <article key={number} data-reveal>
              <span className='step-number'>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process