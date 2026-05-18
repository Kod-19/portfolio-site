# TODO - Fully Responsive Site

- [x] Update `src/App.jsx` to use responsive container padding (remove fixed `px-30`).
- [x] Update `src/components/Navbar.jsx`:
  - [x] Add mobile hamburger menu.
  - [x] Remove fixed spacing like `pl-280` and make layout responsive.

- [x] Update `src/components/Hero.jsx`:
  - [x] Stack columns on mobile (`grid-cols-1 lg:grid-cols-2`).
  - [x] Remove/replace invalid Tailwind classes (e.g. `w-75`).

- [x] Update `src/components/Projects.jsx` to use responsive grid (`grid-cols-1 md:grid-cols-2`).
- [x] Update `src/components/Contact.jsx` to use responsive grid (`grid-cols-1 lg:grid-cols-2`) and make form container responsive.
- [x] Update `src/components/ProjectCard.jsx`:
  - [x] Make text widths responsive (avoid tight `w-2/3` on mobile).
  - [x] Make image height responsive.
- [ ] Run `npm run dev` and manually check common viewport sizes.
