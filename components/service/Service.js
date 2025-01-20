import "./service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="service" className="px-4">
      <h5 className="text-[12px]">What I Offer</h5>
      <h2 className="text-2xl">Services</h2>

      <div className="container services_container">
        {/* UI/UX Design Services */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_icon" />
              <p>Designing visually appealing and user-friendly interfaces.</p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>Creating interactive prototypes and wireframes using Figma.</p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>Implementing responsive and accessible designs.</p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>Developing comprehensive design systems for consistency.</p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>Crafting custom icons and graphics for unique branding.</p>
            </li>
          </ul>
        </article>

        {/* Full-Stack Development Services */}
        <article className="service">
          <div className="service_head">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_icon" />
              <p>
                Building scalable and dynamic web applications with React and
                Next.js.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Developing robust backend systems using Node.js and Express.js.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Implementing REST APIs and database integration with MongoDB,
                PostgreSQL, and MySQL.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Creating fully responsive and optimized web solutions for all
                devices.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Streamlining development processes with CI/CD pipelines and
                Docker.
              </p>
            </li>
          </ul>
        </article>

        {/* Graphics Design Services */}
        <article className="service">
          <div className="service_head">
            <h3>Graphics Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_icon" />
              <p>Creating motion graphics for digital and social platforms.</p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Designing graphical assets for websites and user interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Developing banners, brochures, and other promotional materials.
              </p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>Building logos that represent brands identity and values.</p>
            </li>
            <li>
              <BiCheck className="service_icon" />
              <p>
                Creating illustrations and visual assets tailored to client
                needs.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
