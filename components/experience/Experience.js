import "./experience.css"
import { HiBadgeCheck } from "react-icons/hi"

const Experience = () => {
  return (
    <section id="experience" className="px-4">
    <h5 className="text-[12px]">See My Skills</h5>
    <h2 className="text-2xl">My Experience</h2>


    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Developer</h3>
        <div className="experience_content">
          <article className="experience_details">
          <HiBadgeCheck className="experience_details-icons"/>
            <div>
            <h4>Javascript</h4>
             <small  className="text-light">Experienced</small>
            </div>
              

          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/> 
             <div>
             <h4>React</h4>
             <small  className="text-light">Experienced</small>
            </div> 
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
            <div>
            <h4>Next JS</h4>
             <small  className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
             <div>
             <h4>Tailwind CSS</h4>
             <small  className="text-light">Experienced</small>
             </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
            <div>
            <h4>React Native</h4>
             <small  className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Photoshop</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>
        </div>
      </div>

      {/* ===== END OF FRONT END  ==== */}

      <div className="experience_graphics">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Node JS</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Express JS</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>REST APIs</h4>
             <small  className="text-light">Experienced</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
           <h4>Database management</h4>
             <small  className="text-light">Intermediate</small>
           </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
            <div>
            <h4>Docker</h4>
             <small  className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience_details">
             <HiBadgeCheck className="experience_details-icons"/>  
           <div>
            <h4>GitHub Actions</h4>
            <small  className="text-light">Experienced</small>
           </div>
          </article>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Experience