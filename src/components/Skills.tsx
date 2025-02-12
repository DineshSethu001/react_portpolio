
const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'HTML/CSS', 
    'Python', 'Git', 'UI/UX Design', 'Responsive Design'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
