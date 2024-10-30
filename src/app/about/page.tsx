import React from "react";
import "@/styling/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/gg.avif"
            alt="About Me"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-roles">
            <div className="about-role">
              <h3 className="role-title">Web Developer</h3>
              <p className="role-description">
                {`I’m a Web Developer with expertise in creating responsive and
                efficient web applications. I focus on delivering seamless user
                experiences through clean and scalable code.`}
              </p>
            </div>

            <div className="about-role">
              <h3 className="role-title">Graphic Designer</h3>
              <p className="role-description">
                {`I’m a Graphic Designer focused on creating stunning visuals that
                elevate brands. I bring ideas to life through creative design.`}
              </p>
            </div>

            <div className="about-role">
              <h3 className="role-title">UI Designer</h3>
              <p className="role-description">
                {`I have designed multiple landing pages and have created design
                systems as well.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;