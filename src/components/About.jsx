
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