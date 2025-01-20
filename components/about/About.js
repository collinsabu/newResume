import Image from "next/image";
import "./about.css";
import ME from "@/public/images/img.png";
import { BsAward } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import React, { useState } from "react";

const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    if (showFullDescription) {
      window.location.href = "#about";
    }
  };

  return (
    <section id="about">
      <h5 className="text-[12px]">Get To Know</h5>
      <h2 className="text-2xl">About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <Image
            src={ME}
            alt="Image of Collins Abu"
            className="about_me-image"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card flex justify-center items-center flex-col">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small>5 years +</small>
            </article>

            <article className="about_card flex justify-center items-center flex-col">
              <AiOutlineUsergroupAdd className="about_icon" />
              <h5>Clients</h5>
              <small>35 Worldwide</small>
            </article>

            <article className="about_card flex justify-center items-center flex-col">
              <AiOutlineFolderAdd className="about_icon" />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          {showFullDescription ? (
            <>
              <p>
                I recently expanded my skill set to include UI design using
                Figma, which complements my full stack development work. This
                ensures that the user interfaces I create are not only
                user-friendly but also visually appealing. I have built several
                projects showcasing my expertise in technologies like React,
                Next.js, Node.js, and MongoDB, which you can explore on my
                portfolio.
              </p>
              <p>
                I am now looking for opportunities to join a forward-thinking
                team where I can contribute my skills as a full stack developer.
                I am proficient in creating dynamic, responsive web applications
                using JavaScript, TypeScript, and modern frameworks like React
                and Next.js, alongside building robust backend solutions with
                Node.js, Express.js, and REST APIs. With hands-on experience in
                databases like PostgreSQL, MySQL, Firebase, and SuperBase, I
                excel in delivering end-to-end solutions.
              </p>
              <p>
                Additionally, my knowledge of DevOps tools like Docker, GitHub
                Actions for CI/CD, and deployment platforms like Vercel enables
                me to streamline the development process. If you are looking for
                someone who is dedicated, detail-oriented, and constantly
                striving to learn and improve, let’s connect!
              </p>
              <button onClick={toggleDescription} className="btn btn-primary">
                Read Less
              </button>
            </>
          ) : (
            <>
              <p>
                Hello! I am Collins Abu, a passionate and skilled Full Stack
                Developer with a strong focus on React and Next.js. Over the
                years, I have honed my abilities in building dynamic, scalable,
                and efficient web applications that deliver exceptional user
                experiences. My journey into web development has been driven by
                a deep curiosity for technology and a desire to create digital
                solutions that are both functional and aesthetically pleasing.
              </p>
              <p>
                With a background in graphic design, I bring a unique blend of
                creativity and technical expertise to every project. My design
                skills allow me to craft visually compelling interfaces, while
                my knowledge of modern web technologies enables me to implement
                those designs effectively. Proficient in JavaScript, React,
                Next.js, and backend technologies like Node.js and Express.js, I
                am fully equipped to work across the full stack and deliver
                results.
              </p>
              <button onClick={toggleDescription} className="btn btn-primary">
                Read More
              </button>
            </>
          )}
          <a href="#contact" className="about-cta">
            Let us Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
