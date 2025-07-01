export default function Skills() {
  const skills = ['Unity', 'Unreal Engine', 'Godot', 'C#', 'Python', 'GDScript'];

  return (
    <section className="relative -mt-60 py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded text-sm font-medium text-white border border-white/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
