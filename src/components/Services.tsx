import React from 'react'
type IconName = 'arrow' | 'automation' | 'code' | 'social' | 'check'; // Or your specific icon string type


const services = [
  {
    number: "01",
    icon: "code" as IconName,
    title: "Web development",
    copy: "Fast, accessible websites and web apps designed to look sharp, explain your offer clearly, and convert attention into enquiries.",
    deliverables: [
      "Marketing websites",
      "Landing pages",
      "React applications",
      "Performance optimisation",
    ],
  },
  {
    number: "02",
    icon: "automation" as IconName,
    title: "AI automation",
    copy: "Practical automations that remove repetitive work from lead capture, customer support, reporting, and internal operations.",
    deliverables: [
      "AI assistants",
      "Workflow automation",
      "CRM integrations",
      "Internal knowledge tools",
    ],
  },
  {
    number: "03",
    icon: "social" as IconName,
    title: "Social media marketing",
    copy: "A focused content and campaign system that keeps your brand visible, consistent, and connected to measurable business goals.",
    deliverables: [
      "Content strategy",
      "Campaign creative",
      "Publishing systems",
      "Performance reporting",
    ],
  },
];



const Services = ({Icon}: {Icon: React.ComponentType<{ name: IconName; size?: number }>}) => {
  return (
    <section className='services section-pad' id='services'>
      <div className='shell'>
        <div className='section-heading' data-reveal>
          <div>
            <div className='eyebrow'>
              <span /> Services
            </div>
            <h2>One focused partner for your digital growth stack.</h2>
          </div>
          <p>
            Strategy and execution stay connected, so your website, automation,
            and content work as one system instead of separate tasks.
          </p>
        </div>

        <div className='service-list'>
          {services.map((service) => (
            <article className='service-card' key={service.title} data-reveal>
              <div className='service-number'>{service.number}</div>
              <div className='service-icon'>
                <Icon name={service.icon} size={28} />
              </div>
              <div className='service-copy'>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <Icon name='check' size={17} /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services