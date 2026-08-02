import React, { useEffect, useState } from 'react';
import { portfolioService } from '../services/portfolioService';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const data = await portfolioService.getPublishedProjects();
      setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center text-slate-400 font-mono text-sm">
        Loading showcase projects...
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-white mb-2">Featured Work</h2>
        <p className="text-slate-400 text-sm mb-10">Selected projects built at KD Studios.</p>

        {projects.length === 0 ? (
          <p className="text-slate-500 text-sm">No published projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition flex flex-col justify-between"
              >
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-48 object-cover border-b border-slate-800"
                  />
                )}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-3">
                      {project.description || project.subtitle}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-slate-800 text-xs">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-400 hover:underline font-semibold"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}