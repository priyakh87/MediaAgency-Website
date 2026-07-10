import React from 'react'

const projects = [
  {
    category: "Web development",
    title: "Northstar SaaS launch site",
    description:
      "A conversion-led product website with a modular design system, pricing narrative, and clear demo-booking flow.",
    tags: ["React", "TypeScript", "UX strategy"],
    className: "project-violet",
    label: "Concept project",
  },
  {
    category: "AI automation",
    title: "Service desk AI assistant",
    description:
      "A knowledge-grounded support concept that routes requests, drafts answers, and escalates edge cases to a human.",
    tags: ["RAG concept", "Automation", "CRM"],
    className: "project-lime",
    label: "Concept project",
  },
  {
    category: "Social marketing",
    title: "Local brand growth system",
    description:
      "A repeatable planning, content, publishing, and reporting workflow for a service business with a small team.",
    tags: ["Content system", "Campaigns", "Analytics"],
    className: "project-orange",
    label: "Concept project",
  },
];
const Work = () => {
    
  return (
    <section className='work section-pad' id='work'>
      <div className='shell'>
        <div className='section-heading' data-reveal>
          <div>
            <div className='eyebrow'>
              <span /> Selected concepts
            </div>
            <h2>Work that shows the thinking, not fake client claims.</h2>
          </div>
          <p>
            These portfolio concepts demonstrate how Micro Agency approaches
            product storytelling, workflow design, and digital campaigns.
          </p>
        </div>

        <div className='project-grid'>
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.className} ${index === 0 ? "project-wide" : ""}`}
              key={project.title}
              data-reveal>
              <div className='project-topline'>
                <span>{project.category}</span>
                <span className='concept-label'>{project.label}</span>
              </div>
              <div className='project-art' aria-hidden='true'>
                <div className='project-window'>
                  <div className='project-window-bar'>
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className='project-art-grid'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className='project-art-line line-a' />
                  <div className='project-art-line line-b' />
                  <div className='project-art-button' />
                </div>
              </div>
              <div className='project-content'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='tags'>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work