import React, { useRef } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {

  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => alert("Message sent to your email successfully!"),
      () => alert("Failed to send message. Try again!")
    );

    e.target.reset();
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Express.js",
    "MongoDB", "MySQL", "Python", "Java", "Django",
    "Spring Boot", "REST APIs", "Git & GitHub Actions"
  ];

  const databases = [
    "MongoDB",
    "MySQL",
    "Firebase"
  ];

  const tools = [
    "REST API Development",
    "Postman",
    "HTML & CSS",
    "MS Office",
    "Git & GitHub Actions"
  ];

  const certifications = [
    {
      name: "Microsoft Prompt Engineering",
      file: "/Prompt Engineering (Microsoft).pdf",
      logo: "/logos/microsoft.png"
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Foundations",
      file: "/Oracle Foundation Certificate.pdf",
      logo: "/logos/oracle.png"
    },
    {
      name: "Google Generative AI",
      file: "/Generative AI (Google).pdf",
      logo: "/logos/google.png"
    },
    {
      name: "Google Gemini",
      file: "/Googe Gemini.pdf",
      logo: "/logos/gemini.png"
    },
    {
      name: "GeeksForGeeks",
      file: "/GeeksForGeeks.pdf",
      logo: "/logos/gfg.png"
    }
  ];

  const projects = [
    {
      title: "University Portal (LMS)",
      desc: "MEAN-based role system with Admin, Teacher & Student dashboards for courses and assignments."
    },
    {
      title: "AI Chatbot",
      desc: "MERN-based chatbot providing real-time automated responses and user interaction."
    },
    {
      title: "Weather App",
      desc: "MERN app using OpenWeather API for real-time weather forecasts."
    }
  ];

  return (
    <div>

      {/* NAVBAR */}
      <nav>
        <div className="nav-brand">
          <img
            src="/yourphoto.jpg"
            alt="Karan Profile"
            className="nav-photo"
          />
          <h2>Karan Portfolio</h2>
        </div>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#languages">Languages</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <img src="/yourphoto.jpg" alt="Profile" />
        <h1>Karan Kumar</h1>
        <p>Full Stack Developer (MERN & MEAN)</p>

        <div className="btn-group">

          <a href="https://github.com/KaranKumar254"
            target="_blank" rel="noopener noreferrer">
            <button className="primary">GitHub</button>
          </a>

          <a href="https://www.linkedin.com/in/karan-kumar-282278301/"
            target="_blank" rel="noopener noreferrer">
            <button className="secondary">LinkedIn</button>
          </a>

         <a 
  href="/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="primary">Resume</button>
</a>


        </div>
      </section>

      {/* ABOUT / SUMMARY */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate B.Tech CSE student specializing in Full Stack
          Development (MERN & MEAN). I build dynamic, scalable and secure
          web applications using modern technologies like React, Angular,
          Node.js, Express.js and MongoDB. I am focused on creating efficient,
          user-friendly and real-world software solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="cards">
          {skills.map(skill => (
            <div className="card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      {/* DATABASES */}
      <section>
        <h2>Databases</h2>
        <div className="cards">
          {databases.map(db => (
            <div className="card" key={db}>{db}</div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section>
        <h2>Tools & DevOps</h2>
        <div className="cards">
          {tools.map(tool => (
            <div className="card" key={tool}>{tool}</div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="cards">
          {projects.map((p, i) => (
            <div className="card project" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="certifications">
        <h2>Certifications</h2>

        <div className="cert-grid">
          {certifications.map((c, idx) => (
            <a
              key={idx}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="cert-logo"
              />
              <h3>{c.name}</h3>
            </a>
          ))}
        </div>
      </section>


      {/* EDUCATION */}
      <section id="education">
        <h2>Education</h2>
        <div className="list">
          <p>🎓 B.Tech CSE — Centurion University (Expected 2027)</p>
          <p>🎓 12th — BSEB Board (2023)</p>
          <p>🎓 10th — BSEB Board (2021)</p>
        </div>
      </section>

      <section id="languages">
        <h2>Languages</h2>
        <div className="list">
          <p>Hindi — Native</p>
          <p>English — Intermediate (B1)</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <p>📞 <strong>Mobile:</strong> <a href="tel:+919546322440">+919546322440</a></p>

          <p>📧 <strong>Email:</strong>
            <a href="mailto:babukaran526@gmail.com"> babukaran526@gmail.com</a>
          </p>

          <p>💬 <strong>WhatsApp:</strong>
            <a
              href="https://wa.me/919546322440"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>

        <h3>Or Send a Message</h3>

        <form ref={formRef} onSubmit={sendEmail}>

          <input name="user_name" placeholder="Your Name" required /><br />
          <input name="user_email" placeholder="Your Email" required /><br />
          <textarea name="user_message" placeholder="Your Message" required></textarea><br />

          <button className="primary" type="submit">
            Send Message
          </button>

        </form>
      </section>


      <footer>
        © 2026 | Karan Kumar | Full Stack Developer (MERN & MEAN)
      </footer>

    </div>
  );
}

export default App;
