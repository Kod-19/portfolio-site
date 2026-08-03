import { useEffect, useState } from "react";
import profile_pic from "../assets/profile_pic_optimized.jpg";
import logo from "../assets/logo_optimized.png";
import { portfolioService } from "../services/portfolioService";

const proofPoints = [
  "Responsive builds",
  "Payment-ready stores",
  "React Native learning",
];

const serviceChips = ["Websites", "E-Commerce", "Web Apps", "Mobile Apps"];

const Hero = () => {
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    const loadSettings = async () => {
      const settings = await portfolioService.getSiteSettings();
      setSiteSettings(settings);
    };

    loadSettings();
  }, []);

  return (
    <section className="grid min-h-[calc(100vh-76px)] grid-cols-1 items-center gap-8 pt-8 sm:gap-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20">
      <div className="order-2 flex flex-col text-center lg:order-1 lg:text-left animate-fade-up">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--primary-color) sm:text-sm">
          {siteSettings?.businessName || "KD Studios"}
        </p>
        <h1 className="mx-auto max-w-3xl pt-5 text-4xl font-black leading-tight text-(--title-color) sm:text-5xl lg:mx-0 lg:text-6xl">
          Clean websites, web apps, and mobile app experiences.
        </h1>
        <p className="mx-auto max-w-2xl pt-6 text-base font-medium leading-8 text-(--text-color) sm:text-lg lg:mx-0">
          {siteSettings?.heroDescription ||
            "I build responsive business websites, e-commerce stores, and custom web apps, while growing into mobile app development with React Native."}
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-6 lg:justify-start">
          {serviceChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-xs font-bold text-(--text-color)"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-col flex-wrap justify-center gap-3 pt-8 font-bold text-(--title-color) sm:flex-row sm:gap-4 lg:justify-start">
          <a
            href="/project-brief"
            className="button-pop inline-flex min-h-12 items-center justify-center rounded-lg bg-(--tertiary-color) px-6 py-3 text-sm shadow-lg shadow-blue-500/20 sm:text-base"
          >
            Start a Project
          </a>
          <a
            href="#pricing"
            className="inline-flex min-h-10 items-center justify-center text-sm font-black text-(--primary-color) underline-offset-4 transition hover:text-(--accent-color) hover:underline sm:button-pop sm:min-h-12 sm:rounded-lg sm:border sm:border-(--card-border) sm:bg-(--surface-bg) sm:px-5 sm:py-3 sm:text-base sm:text-(--title-color)"
          >
            View Pricing
          </a>
          <a
            href="/payments"
            className="hidden lg:inline-flex min-h-12 items-center justify-center rounded-lg border border-(--primary-color)/30 bg-(--surface-bg) px-6 py-3 text-sm font-black text-(--title-color) shadow-md transition hover:border-(--primary-color) hover:text-(--primary-color) sm:text-base"
          >
            Make Payment
          </a>
        </div>

        <div className="hidden gap-3 pt-8 sm:grid sm:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="rounded-lg border border-white/10 bg-white/3 px-4 py-3 text-sm font-bold text-(--title-color)"
            >
              {point}
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 flex flex-col items-center lg:order-2 animate-fade-up">
        <div className="animate-float-soft rounded-full border border-white/10 bg-(--surface-bg) p-2 shadow-2xl shadow-sky-500/10 sm:p-3">
          <img
            className="aspect-square w-40 rounded-full object-cover sm:w-56 lg:w-72"
            src={logo}
            alt="KD Studios founder Kwame Dawson"
          />
        </div>
        <div className="pt-5 text-center sm:pt-7">
          <p className="text-xl font-bold text-(--title-color) sm:text-2xl">
            {siteSettings?.businessName || "KD Studios"}
          </p>
          <p className="text-base font-medium text-(--text-color) sm:text-lg">
            Led by Kwame Dawson
          </p>
          <p className="text-base font-medium text-(--text-color) sm:text-lg">
            Web and Mobile App Development
          </p>
        </div>
        <div className="mt-6 w-full max-w-sm rounded-lg border border-(--primary-color)/20 bg-(--card-bg) p-4 text-center shadow-xl shadow-sky-500/10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-(--primary-color)">
            Current focus
          </p>
          <p className="pt-2 text-sm font-semibold leading-6 text-(--title-color)">
            {siteSettings?.heroTagline ||
              "Building stronger web systems while expanding into mobile apps with React Native."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
