import { useEffect, useState } from "react";
import { portfolioService } from "../services/portfolioService";

export default function SiteContentSections() {
  const [testimonials, setTestimonials] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [faqItems, setFaqItems] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [testimonialData, teamData, faqData, galleryData] =
        await Promise.all([
          portfolioService.getTestimonials(),
          portfolioService.getTeamMembers(),
          portfolioService.getFaqItems(),
          portfolioService.getGalleryItems(),
        ]);
      setTestimonials(testimonialData);
      setTeamMembers(teamData);
      setFaqItems(faqData);
      setGalleryItems(galleryData);
    };

    load();
  }, []);

  return (
    <div className="space-y-16">
      {testimonials.length > 0 && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-bold text-white">Testimonials</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-slate-300">“{item.quote}”</p>
                <p className="mt-3 text-sm font-semibold text-amber-400">
                  {item.name} · {item.role}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {teamMembers.length > 0 && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-bold text-white">Team</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                {member.photoUrl && (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="mb-4 h-32 w-full rounded-lg object-cover"
                  />
                )}
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-sm text-amber-400">{member.position}</p>
                <p className="mt-3 text-sm text-slate-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {faqItems.length > 0 && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-bold text-white">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-4"
              >
                <p className="font-semibold text-white">{item.question}</p>
                <p className="mt-2 text-sm text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {galleryItems.length > 0 && (
        <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
          <h2 className="text-2xl font-bold text-white">Gallery</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
              >
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
