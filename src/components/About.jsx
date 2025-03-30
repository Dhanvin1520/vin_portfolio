 function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
         <p className="text-gray-300">
              I'm a passionate Computer Science student with a love for web development and creating beautiful,
              functional applications. Currently pursuing my degree at Newton School, I'm constantly learning and
              expanding my skills in the ever-evolving tech landscape.
            </p>
            <p className="text-gray-300 mt-4">
              I believe in the power of technology to solve real-world problems and am excited to be part of this journey.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-purple-600 pl-4">
                <h4 className="font-medium text-white">2023 - Present</h4>
                <p className="text-gray-300">Computer Science Student at Newton School of Technology</p>
              </div>
              <div className="border-l-2 border-purple-600 pl-4">
                <h4 className="font-medium text-white">2022 - 2023</h4>
                <p className="text-gray-300">Grade 12</p>
              </div>
              <div className="border-l-2 border-purple-600 pl-4">
            <h4 className="font-medium text-white">2021 - 2022</h4>
                <p className="text-gray-300">.</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default About;
