// const skills = [
//   {
//     category: "Frontend",
//     icon: "\u2699\ufe0f", 
//     items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
//   },

//   {
//     category: "Programming",
//     icon: "\ud83d\udd27", 
//     items: ["JavaScript", "Python"],
//   },
//   {
//     category: "Tools",
//     icon: "\ud83d\udee0\ufe0f", 
//     items: ["Git", "GitHub", "VS Code", "Figma"],
//   },

// ];

// function Skills() {
//   return (
//     <section className="py-20 px-4 md:px-8 bg-black" id="skills">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
//           <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill) => (
//             <div key={skill.category} className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//               <div className="flex items-center mb-4">
//         <span className="text-purple-500 text-2xl">{skill.icon}</span>
//                 <h3 className="text-xl font-semibold ml-3 text-white">{skill.category}</h3>
//               </div>
//               <ul className="space-y-2">
//                 {skill.items.map((item) => (
//                   <li key={item} className="flex items-center text-gray-300">
//                     <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
import { useEffect, useRef } from 'react';

const skills = [
  {
    category: "Frontend",
    icon: "\u2699\ufe0f", 
    items: ["HTML", "CSS", "JavaScript", "React","threeJs"],
  },
  {
    category: "Programming",
    icon: "\ud83d\udd27", 
    items: ["JavaScript", "Python"],
  },
  {
    category: "Packages",
    icon: "\ud83d\udee0\ufe0f", 
    items: [ "OpenCV","Git", "Tailwind", "Bootstrap", "Figma"],
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-black text-white overflow-hidden"
      id="skills"
    >
      <div className="max-w-5xl mx-auto perspective-1500 transform-style-3d relative">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black animate-pulse-slow pointer-events-none"></div>

        <div className="text-center mb-12 animate-fade-in animation-delay-400 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up animation-delay-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto transform transition-all duration-500 hover:scale-150 hover:rotate-12 rounded-full glow-effect"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transform rotate-x-6 rotate-y-4 translate-z-20 bg-gradient-to-br from-gray-950/90 to-black/95 p-10 rounded-2xl shadow-3xl border border-purple-500/30 relative z-10">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-inner hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-x-10 hover:rotate-y-10 animate-card-in glow-card border border-purple-600/20"
              style={{ animationDelay: `${0.8 + index * 0.2}s` }}
            >
              <div className="flex items-center mb-4 animate-slide-up" style={{ animationDelay: `${1 + index * 0.2}s` }}>
                <span className="text-3xl text-cyan-300 glow-icon">{skill.icon}</span>
                <h3 className="text-2xl font-bold ml-3 text-purple-300 tracking-wide">{skill.category}</h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-200 animate-text-in"
                    style={{ animationDelay: `${1.2 + index * 0.2 + idx * 0.1}s` }}
                  >
                    <span className="h-2 w-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-2 glow-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
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

        .translate-z-20 {
          transform: translateZ(20px);
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(147, 51, 234, 0.2);
        }

        .glow-effect {
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.7), 0 0 20px rgba(6, 182, 212, 0.5);
        }

        .glow-card {
          box-shadow: 0 0 15px rgba(147, 51, 234, 0.3);
        }

        .glow-icon {
          filter: drop-shadow(0 0 5px rgba(6, 182, 212, 0.5));
        }

        .glow-dot {
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.6);
        }

        .animate-pulse-slow {
          animation: pulseSlow 6s infinite ease-in-out;
        }

        /* Scope to #skills only: Hide elements before visibility */
        #skills:not(.is-visible) .animate-fade-in,
        #skills:not(.is-visible) .animate-slide-up,
        #skills:not(.is-visible) .animate-card-in,
        #skills:not(.is-visible) .animate-text-in {
          opacity: 0;
          animation: none;
        }

        /* Apply animations when #skills has 'is-visible' class, with forwards */
        #skills.is-visible .animate-fade-in {
          animation: fadeIn 2s ease-in forwards;
        }

        #skills.is-visible .animate-slide-up {
          animation: slideUp 1.5s ease-out forwards;
        }

        #skills.is-visible .animate-card-in {
          animation: cardIn 1.8s ease-out forwards;
        }

        #skills.is-visible .animate-text-in {
          animation: textIn 1.8s ease-out forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(-20deg) rotateY(10deg) translateZ(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0) rotateY(0) translateZ(0);
          }
        }

        @keyframes textIn {
          from {
            opacity: 0;
            transform: translateX(-40px) translateZ(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateZ(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;