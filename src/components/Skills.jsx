const skills = [
  {
    category: "Frontend",
    icon: "\u2699\ufe0f", 
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },

  {
    category: "Programming",
    icon: "\ud83d\udd27", 
    items: ["JavaScript", "Python"],
  },
  {
    category: "Tools",
    icon: "\ud83d\udee0\ufe0f", 
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },

];

function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black" id="skills">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
        <span className="text-purple-500 text-2xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold ml-3 text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <span className="h-2 w-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
