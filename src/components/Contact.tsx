import {
  SubmitEvent,
  useState,useEffect,
  useRef,
} from "react";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "contact@gmail.com";
const CALENDAR_URL = import.meta.env.VITE_CALENDAR_URL || "#contact";
type IconName = 'arrow' | 'mail' | 'globe';

const Contact = ({ Icon }:{Icon:React.ComponentType<{ name: IconName; size?: number }>}) => {
      const [formStatus, setFormStatus] = useState('');
      const formRef = useRef<HTMLFormElement>(null);
      const submitContact = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
      const form = new FormData(event.currentTarget);
      const name = String(form.get("name") || "").trim();
      const email = String(form.get("email") || "").trim();
      const service = String(form.get("service") || "").trim();
      const message = String(form.get("message") || "").trim();

       if (!name || !email || !message) {
         setFormStatus(
           "Please complete your name, email, and project message.",
         );
         return;
       }

       // Show initial success message
       setFormStatus("Success! Your project enquiry is ready to send.");

       // Delay the redirect so user sees the message
       setTimeout(() => {
         const subject = encodeURIComponent(
           `Project enquiry from ${name} — ${service || "Micro Agency"}`,
         );
         const body = encodeURIComponent(
           `Name: ${name}\nEmail: ${email}\nService: ${service || "Not selected"}\n\nProject details:\n${message}`,
         );
         window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

         // Show final thank you message after email opens
         setTimeout(() => {
           setFormStatus("Thank you! Your request has been sent.");
         }, 1000);
       }, 500);
       // Reset the form fields
       if (formRef.current) {
         formRef.current.reset();
       }
     };

  
    useEffect(() => {
      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
  
      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }, []);
  
  return (
    <section className='contact section-pad' id='contact'>
      <div className='contact-glow' aria-hidden='true' />
      <div className='shell contact-layout'>
        <div className='contact-copy' data-reveal>
          <div className='eyebrow light'>
            <span /> Start a project
          </div>
          <h2>Have a digital problem worth solving?</h2>
          <p>
            Share the goal, current situation, and ideal timeline. You will
            receive a practical recommendation on the best first step.
          </p>
          <div className='contact-options'>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Icon name='mail' />{" "}
              <span>
                Email directly<strong>{CONTACT_EMAIL}</strong>
              </span>
            </a>
            <a href={CALENDAR_URL}>
              <Icon name='globe' />{" "}
              <span>
                Prefer a conversation?<strong>Book a discovery call</strong>
              </span>
            </a>
          </div>
        </div>

        <form className='contact-form' onSubmit={submitContact} data-reveal ref={formRef}>
          <div className='field-row'>
            <label>
              Name
              <input
                name='name'
                type='text'
                autoComplete='name'
                placeholder='Your name'
              />
            </label>
            <label>
              Email
              <input
                name='email'
                type='email'
                autoComplete='email'
                placeholder='you@company.com'
              />
            </label>
          </div>
          <label>
            What do you need?
            <select name='service' defaultValue=''>
              <option value='' disabled>
                Select a service
              </option>
              <option>Web development</option>
              <option>AI automation</option>
              <option>Social media marketing</option>
              <option>Combined project</option>
            </select>
          </label>
          <label>
            Project details
            <textarea
              name='message'
              rows={5}
              placeholder='What are you trying to achieve, and what is currently getting in the way?'
            />
          </label>
          <button className='button button-light form-button' type='submit'>
            Prepare enquiry <Icon name='arrow' />
          </button>
          <p className='form-note'>
            This static portfolio form opens your email app. Connect Formspree,
            Netlify Forms, or your own API for direct submissions.
          </p>
          {formStatus && (
            <p className='form-status' role='status'>
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact