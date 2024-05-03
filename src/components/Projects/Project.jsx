import "./Project.css";
import ProjectCard from "./ProjectCard.jsx";
import ProjectCardReverse from "./ProjectCardReverse.jsx";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="container">
        <div className="project-content">
          <p>PROJECTS</p>
          <h3>Each project is a unique piece of development 🧩</h3>
        </div>
        <div className="projects-grid">
          <ProjectCard
            title="Meet-Mate - A video calling application 🍿"
            mockup="/Images/Meet-Clone.png"
            live="https://meet-mate-mu.vercel.app/"
            desc=" A WebRTC-based video calling application with Next.js and Websockets, ensuring real-time signaling for
            seamless communication."
            git="https://github.com/PalakShrivas04/google-meet-clone"
          />
          <ProjectCardReverse
            title="EasyBuy - An e-commerce platform 🛒"
            mockup="/Images/Eazy-Buy.png"
            live="https://easy-buy-flame.vercel.app/"
            desc=" a comprehensive MERN stack e-commerce platform featuring user authentication, admin panel for
            product and order management, and seamless integration of Stripe payment gateway."
            git="https://github.com/PalakShrivas04/Easy-Buy"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
