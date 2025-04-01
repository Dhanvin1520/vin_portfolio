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
"use client"

import { useEffect, useRef } from "react"
import { Github, Code2, Linkedin } from "lucide-react"

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100",
              "rotate-0"
            );
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10",
              "scale-90",
              "rotate-6"
            );
          } else {
            entry.target.classList.remove(
              "opacity-100",
              "translate-y-0",
              "scale-100",
              "rotate-0"
            );
            entry.target.classList.add(
              "opacity-0",
              "translate-y-10",
              "scale-90",
              "rotate-6"
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 md:px-8 bg-black text-white overflow-hidden opacity-0 translate-y-10 scale-90 rotate-6 transition-all duration-1000 ease-out"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black rounded-3xl"></div>

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full shadow-lg shadow-purple-500/30 hover:scale-150 transition-transform duration-500"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/90 to-black/95 p-8 rounded-2xl shadow-xl border border-purple-500/30 backdrop-blur-sm relative z-10">
          <div className="bg-gray-900/80 p-6 rounded-xl shadow-inner border border-purple-600/20 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Who I Am</h3>
            <p className="text-gray-200 leading-relaxed">
              I'm a passionate Computer Science student with a flair for web development and an aspiring Software
              Engineer.gaining skills in coding and editing through personal projects and challenges with 130+ LeetCode problems
              (1500+ rating) and a 600+ Codeforces score.
            </p>
            <p className="text-gray-200 mt-4 leading-relaxed">
              
              
            </p>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://github.com/Dhanvin1520"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-800 border border-gray-700 group-hover:scale-110 transition-all duration-300">
                  <Github
                    size={28}
                    className="text-purple-500 transition-transform duration-300"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-400">
                  GitHub
                </span>
              </a>

              <a
                href="https://leetcode.com/u/dhanvin_1520/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-800 border border-gray-700 group-hover:scale-110 transition-all duration-300">
                  <Code2
                    size={28}
                    className="text-yellow-500 transition-transform duration-300"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-400">
                  LeetCode
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dhanvin-vadlamudi-365614318/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-800 border border-gray-700 group-hover:scale-110 transition-all duration-300">
                  <Linkedin
                    size={28}
                    className="text-blue-500 transition-transform duration-300"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-400">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;