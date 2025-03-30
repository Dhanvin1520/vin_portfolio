const projects = [
  {
    title: "xxxxxxx",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "sdfjnretfwkrf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x200",
    tags: ["JavaScript", "API", "CSS", "HTML"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "frfewrgtgtgapp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
]

function Projects() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
       <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project has helped me develop different skills and
            overcome unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-500 transition-colors flex items-center"
                  >
                    <span className="w-4 h-4 mr-1 inline-block">GH</span>
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded flex items-center transition-colors"
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
    </section>
  )
}

export default Projects