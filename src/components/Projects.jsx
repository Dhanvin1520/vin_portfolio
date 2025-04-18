
import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "AirSwipe",
    description: "AirSwipe is a  project that lets users control media playback using hand gestures detected via a webcam. It uses OpenCV for video processing, MediaPipe for hand tracking, and PyAutoGUI to simulate keyboard inputs.",
    image: "https://i.ytimg.com/vi/-_9WFzgI7ak/maxresdefault.jpg",
    tags: ["python", "OpenCv"],
    liveLink: "https://github.com/Dhanvin1520/AirSwipe",
    githubLink: "https://github.com/Dhanvin1520/AirSwipe",
  },
  {
    title: "Automated-Resume Builder",
    description: "The Resume Builder is interactive platform that helps users to generate and download professional and ATS-friendly resumes.",
    image: "https://i.ytimg.com/vi/Dy-qGLpR_Lc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzM1b_8Sd0of_z2G2qVTSfX_WqsA",
    tags: ["JavaScript", "Tailwind", "CSS", "HTML"],
    liveLink: "https://vin-resume-builder-667cae.netlify.app/",
    githubLink: "https://vin-resume-builder-667cae.netlify.app/",
  },
  {
    title: "Indian Invitation Website",
    description: "Developed a responsive and elegantly designed invitation website with traditional Indian aesthetics, featuring , smooth navigation, and event details for a seamless user experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4vQjrel9yde_CES98VrrMSaHW_GRliYX-w&s",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    liveLink: "https://dhanvin1520.github.io/indian-Invitation-web/",
    githubLink: "https://dhanvin1520.github.io/indian-Invitation-web/",
  },
  {
    title: "The Furniture Gallery",
    description: " It features a clean, modern design that adapts seamlessly to various screen sizes, providing an optimal user experience across desktops, tablets, and mobile devices.",
    image: "https://s.tmimgcdn.com/scr/800x500/65800/furnish-minimalist-furniture-website-template_65859-original.jpg",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    liveLink: "https://dhanvin1520.github.io/capstone-project/",
    githubLink: "https://dhanvin1520.github.io/capstone-project/",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          } else {
            entry.target.classList.remove("animate-visible");
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-black text-white overflow-hidden"
      id="projects"
    >
      <div className="max-w-5xl mx-auto perspective-1500 transform-style-3d relative">
        
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black animate-pulse-slow pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 tracking-tight">
            My Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto transform transition-all duration-500 hover:scale-150 hover:rotate-12 rounded-full glow-effect mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I’ve built—each a journey of creativity, problem-solving, and tech mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gradient-to-br from-gray-950/90 to-black/95 p-10 rounded-2xl shadow-3xl border border-purple-500/30 relative z-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-inner hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-x-12 hover:rotate-y-12 glow-card border border-cyan-600/20 overflow-hidden"
            >
              <div className="overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110 glow-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-300 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded-full glow-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center glow-link"
                  >
                    <span className="w-4 h-4 mr-1 inline-block"></span>
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-4 py-1 rounded-lg flex items-center transition-all duration-300 glow-button"
                  >
                    <span className="w-4 h-4 mr-1 inline-block">→</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <style jsx>{`
        .perspective-1500 {
          perspective: 1500px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(147, 51, 234, 0.2);
        }

        .glow-effect {
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.7), 0 0 20px rgba(6, 182, 212, 0.5);
        }

        .glow-card {
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
        }

        .animate-visible {
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Projects;