import React from 'react';
import './AboutUs.css'; // Importing the external CSS file

const AboutUs = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <h1 className="resume-header">Eden Even-Haim</h1>
      <p className="resume-subtitle">Full Stack Developer | Quick Learner | Organized</p>

      {/* Contact Information */}
      <div className="resume-section">
        <h2 className="resume-title">Contact Information</h2>
        <p className="resume-contact">
          <strong>Email:</strong> <a href="mailto:edenevenhaim@gmail.com" className="resume-link">edenevenhaim@gmail.com</a><br />
          <strong>Phone:</strong> +972 525351613<br />
          <strong>Location:</strong> Ashdod, Israel<br />
          <strong>GitHub:</strong> <a href="https://github.com/EdenEvenHaim" className="resume-link">github.com/EdenEvenHaim</a>
        </p>
      </div>

      {/* Professional Summary */}
      <div className="resume-section">
        <h2 className="resume-title">Professional Summary</h2>
        <p>
          I am a passionate and organized full stack developer with a strong foundation in HTML, CSS, JavaScript, React, Flask, Django, and object-oriented programming (OOP). Known for being a quick learner, I have the ability to rapidly master new technologies and apply them in innovative ways. My continuous curiosity drives me to explore new concepts, ask questions, and seek out challenges to grow as a developer.
        </p>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <h2 className="resume-title">Skills</h2>
        <ul>
          <li><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, React, Flask, Django, OOP</li>
          <li><strong>Key Strengths:</strong> Fast learner with excellent retention, Highly organized, Passionate about learning new technologies, Strong problem-solving abilities</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="resume-section">
        <h2 className="resume-title">Projects</h2>
        <ul>
          <li>
            <strong>Library System Project:</strong> Developed a comprehensive library management system using Flask and React, allowing users to register, log in, and borrow books, with secure JWT authentication.
          </li>
          <li>
            <strong>Cryptocurrency Web Application:</strong> Built a dynamic web app that displays real-time cryptocurrency data using the CoinGecko API. Features advanced search and filtering functionality.
          </li>
          <li>
            <strong>Student Management System:</strong> Created a JavaScript app for managing student information with persistent local storage, ensuring seamless user experience across sessions.
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2 className="resume-title">Education</h2>
        <p>
          Studied Full Stack Web Development at <strong>John Bryce College</strong>, Tel Aviv, Israel.<br />
          Additionally, I am self-taught, constantly learning through personal projects, online courses, and hands-on experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
