
const Projects = () => {
  const projects = [
    { title: "Project 1", description: "A brief description of project 1" },
    { title: "Project 2", description: "A brief description of project 2" },
    { title: "Project 3", description: "A brief description of project 3" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
