import "./portfolio.css"
import IMG1 from "@/public/images/img1.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio" className="px-4">
    <h5 className="text-[12px]">My Recent Work</h5>
    <h2 className="text-2xl">Portfolio</h2>


    <div className="container portfolio_container">


      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/x1ZSg9Xw/task.jpg" alt="Task manager app." />
        </div>
        <h3> Task Management App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/ziprus_task-manager" className="btn" target="_blank">Github</a>
        <a href="https://ziprus-task-manager.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
        
      </article>

      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/BQWmM1fZ/Responsive-Website.jpg" alt="Graphic showcasing a responsive website design developed using HTML, CSS, JavaScript, and React for optimal user experience across devices"/>
        </div>
        <h3> Responsive Website Design </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/Ziprus-Chemicals" className="btn" target="_blank">Github</a>
        <a href="https://ziprus-chemicals.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>

      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/g2pPTgsD/BLOG.jpg"  alt="Blog App" />
        </div>
        <h3>Blog App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/ziprus-blog" className="btn" target="_blank">Github</a>
        <a href="https://ziprus-blog.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/Pf8zHNMk/eccomerce.jpg" alt="Graphic showcasing a e-commerce app developed using HTML, CSS, JavaScript, and React, offering a seamless user experience, personalized playlists, music recommendations, and comprehensive library management for an immersive music listening experience" />
        </div>
        <h3>E-commerce App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/ecommerceApp" className="btn" target="_blank">Github</a>
        <a href="https://ecommerce-app-nine-azure.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/PrrHFVwK/Finance-App.jpg" alt="Graphic showcasing a finance app developed using HTML, CSS, JavaScript, and React, providing intuitive financial management tools, budget tracking, expense visualization, and secure transaction management for efficient personal finance control." />
        </div>
        <h3>Shift Manager App </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/shiftManager" className="btn" target="_blank">Github</a>
        <a href="https://shift-manager-eight.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src="https://i.postimg.cc/MpcDjWqv/shope-plan.jpg" alt="Shopping planner app for daily shopping" />
        </div>
        <h3> Shopping Planner </h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/collinsabu/ShoppingList" target="_blank" className="btn" >Github</a>
        <a href="https://shopping-list-two-tau.vercel.app/" target="_blank" className="btn btn-primary" >Live Demo</a>
        </div>
        
      </article>
    </div>
  </section>
  )
}

export default Portfolio