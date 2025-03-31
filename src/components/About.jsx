//  function About() {
//   return (
//     <section className="py-20 px-4 md:px-8 bg-black text-white" id="about">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//     <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
//          <p className="text-gray-300">
//               I'm a passionate Computer Science student with a love for web development and Aspiring software Engineer,Currently gaining skills in coding and editing through personal projects and challenges. solved 120+ leetCode questions and with rating of 1500+ and codeForces Rating of 600+.
//             </p>
//             <p className="text-gray-300 mt-4">
//               I believe in the power of technology to solve real-world problems and am excited to be part of this journey.
//             </p>
//           </div>

//           <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <h3 className="text-xl font-semibold mb-4">My Journey</h3>
//             <div className="space-y-4">
//               <div className="border-l-2 border-purple-600 pl-4">
//                 <h4 className="font-medium text-white">2023 - Present</h4>
//                 <p className="text-gray-300">Computer Science Student at Newton School of Technology</p>
//               </div>
//               <div className="border-l-2 border-purple-600 pl-4">
//                 <h4 className="font-medium text-white">2021 - 2023</h4>
//                 <p className="text-gray-300">Grade 12</p>
//               </div>
//               <div className="border-l-2 border-purple-600 pl-4">
//             <h4 className="font-medium text-white">2021 - 2022</h4>
//                 <p className="text-gray-300">.</p>
//               </div>
//             </div>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
import { useEffect, useRef } from 'react';

function About() {
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
        threshold: 0.5, // Trigger when 20% of the section is visible
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
      id="about"
    >
      <div className="max-w-5xl mx-auto perspective-1500 transform-style-3d relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black animate-pulse-slow pointer-events-none"></div>

        <div className="text-center mb-12 animate-fade-in animation-delay-400 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up animation-delay-600 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto transform transition-all duration-500 hover:scale-150 hover:rotate-12 rounded-full glow-effect"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 transform rotate-x-6 rotate-y-4 translate-z-20 bg-gradient-to-br from-gray-950/90 to-black/95 p-10 rounded-2xl shadow-3xl border border-purple-500/30 relative z-10">
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-inner hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-x-10 hover:rotate-y-10 animate-card-in animation-delay-800 border border-purple-600/20 glow-card">
            <h3 className="text-2xl font-bold mb-4 animate-slide-up animation-delay-1000 text-cyan-300 tracking-wide">Who I Am</h3>
            <p className="text-gray-200 animate-text-in animation-delay-1200 leading-relaxed">
              I'm a passionate Computer Science student with a flair for web development and an aspiring Software Engineer. I’m mastering coding and design through epic personal projects, with 120+ LeetCode problems crushed (1500+ rating) and a 600+ Codeforces score.
            </p>
            <p className="text-gray-200 mt-4 animate-text-in animation-delay-1400 leading-relaxed">
              I’m driven by tech’s power to transform the world and thrilled to shape the future, one line of code at a time.
            </p>
          </div>

          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-inner hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-x-10 hover:rotate-y-10 animate-card-in animation-delay-900 border border-cyan-600/20 glow-card">
            <h3 className="text-2xl font-bold mb-4 animate-slide-up animation-delay-1100 text-purple-300 tracking-wide">My Journey</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-4 animate-timeline-in animation-delay-1300 relative glow-timeline">
                <h4 className="font-medium text-white text-lg">2023 - Present</h4>
                <p className="text-gray-200">Computer Science Student at Newton School of Technology</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 animate-timeline-in animation-delay-1500 relative glow-timeline">
                <h4 className="font-medium text-white text-lg">2021 - 2023</h4>
                <p className="text-gray-200">Grade 12</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4 animate-timeline-in animation-delay-1700 relative glow-timeline">
                <h4 className="font-medium text-white text-lg">2021 - 2022</h4>
                <p className="text-gray-200">.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
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

        .glow-timeline::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -8px;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8), transparent);
          border-radius: 50%;
        }

        .animate-pulse-slow {
          animation: pulseSlow 6s infinite ease-in-out;
        }

        /* Scope to #about only: Hide elements before visibility */
        #about:not(.is-visible) .animate-fade-in,
        #about:not(.is-visible) .animate-slide-up,
        #about:not(.is-visible) .animate-card-in,
        #about:not(.is-visible) .animate-text-in,
        #about:not(.is-visible) .animate-timeline-in {
          opacity: 0;
          animation: none;
        }

        /* Apply animations when #about has 'is-visible' class, with forwards to persist final state */
        #about.is-visible .animate-fade-in {
          animation: fadeIn 2s ease-in forwards;
        }

        #about.is-visible .animate-slide-up {
          animation: slideUp 1.5s ease-out forwards;
        }

        #about.is-visible .animate-card-in {
          animation: cardIn 1.8s ease-out forwards;
        }

        #about.is-visible .animate-text-in {
          animation: textIn 1.8s ease-out forwards;
        }

        #about.is-visible .animate-timeline-in {
          animation: timelineIn 1.8s ease-out forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1100 {
          animation-delay: 1.1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        .animation-delay-1400 {
          animation-delay: 1.4s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-1700 {
          animation-delay: 1.7s;
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

        @keyframes timelineIn {
          from {
            opacity: 0;
            transform: translateX(-50px) translateZ(-20px);
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

export default About