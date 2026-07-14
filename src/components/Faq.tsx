
const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'Micro Agency is positioned for startups, professional services, local businesses, and lean internal teams that need senior digital execution without hiring a large agency.',
  },
  {
    question: 'Can you handle design and development together?',
    answer: 'Yes. Projects can include positioning, page structure, UI design, frontend development, integrations, quality checks, and deployment support.',
  },
  {
    question: 'What does an AI automation project include?',
    answer: 'It normally starts with a workflow audit, then moves into a small proof of concept, data and permission checks, human fallback rules, testing, and deployment documentation.',
  },
  {
    question: 'How are projects priced?',
    answer: 'Pricing depends on scope, complexity, integrations, content readiness, and delivery timeline. A fixed project fee is usually best for defined work; retainers suit ongoing optimisation and campaigns.',
  },
]

const Faq = () => {
  return (
    <section className='faq section-pad'>
      <div className='shell faq-layout'>
        <div data-reveal>
          <div className='eyebrow'>
            <span /> FAQ
          </div>
          <h2>Useful answers before we start.</h2>
          <p>
            Still evaluating the fit? Send a short project summary and you will
            get a direct response on the recommended next step.
          </p>
        </div>
        <div className='faq-list' data-reveal>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span>+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq