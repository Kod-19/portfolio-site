# KD Studios Portfolio Site - Project Feature Outline

## 1. Project Overview

KD Studios Portfolio Site is a responsive business portfolio website built for KD Studios, led by Kwame Dawson. The site presents web development, e-commerce, web app, and mobile app services, showcases selected work, explains pricing packages, collects project briefs through WhatsApp, and accepts client payments through Paystack.

The project is implemented as a React single page application powered by Vite and styled with Tailwind CSS v4 utility classes plus custom CSS variables and reusable animation utilities.

## 2. Core Goals

- Present KD Studios as a professional web and mobile development studio.
- Make the first screen immediately communicate the service offering.
- Guide visitors toward three primary actions:
  - Start a project brief.
  - View pricing.
  - Make a payment.
- Showcase live projects, experiments, and ongoing development work.
- Provide a simple update/blog area for learning notes and studio news.
- Support mobile-first browsing with responsive layouts and a collapsible navigation menu.
- Keep client communication lightweight by routing forms into WhatsApp messages.
- Support secure payment collection through Paystack.

## 3. Technology Stack

- React 18 for component-based UI.
- Vite for local development, bundling, and production builds.
- Tailwind CSS v4 for utility-first styling.
- React Hook Form for contact and project brief form handling.
- Vercel Analytics for production analytics.
- Paystack Inline JavaScript for payment checkout.
- Static assets stored in `src/assets`.
- Deployment configuration for Vercel.

## 4. Application Structure

### 4.1 Entry Points

- `src/main.jsx`
  - Mounts the React app into the `#root` element.
  - Wraps the app in `StrictMode`.
  - Imports global styles from `src/index.css`.

- `src/App.jsx`
  - Provides simple route selection based on `window.location.pathname`.
  - Renders shared `Navbar` and `Footer` on all routes.
  - Renders `Analytics` from Vercel.
  - Defines the homepage composition.
  - Handles hash scrolling with sticky header offset.

### 4.2 Routes

The app uses lightweight path detection instead of a routing library.

- `/`
  - Homepage with hero, services, featured projects, pricing, blog preview, process, and contact.

- `/projects`
  - Full project library page.

- `/project-brief`
  - Detailed project intake form.

- `/payments`
  - Paystack payment page.

- `/blog`
  - Full blog/update page.

### 4.3 Shared Layout

- `Navbar` appears at the top of every route.
- `Footer` appears at the bottom of every route.
- Main pages use a consistent dark background with subtle radial color accents.
- Content is constrained to a `max-w-7xl` container with responsive horizontal padding.

## 5. Homepage Features

### 5.1 Hero Section

Component: `src/components/Hero.jsx`

Features:

- Full viewport-height hero area adjusted for sticky navbar height.
- Two-column desktop layout and stacked mobile layout.
- KD Studios label and main headline.
- Supporting service description focused on:
  - Websites.
  - E-commerce stores.
  - Custom web apps.
  - Mobile app development with React Native.
- Service chips:
  - Websites.
  - E-Commerce.
  - Web Apps.
  - Mobile Apps.
- Primary calls to action:
  - `Start a Project` links to `/project-brief`.
  - `View Pricing` links to `#pricing`.
  - `Make Payment` links to `/payments` on large screens.
- Proof point cards:
  - Responsive builds.
  - Payment-ready stores.
  - React Native learning.
- Brand/founder visual area using the optimized KD Studios logo.
- Current focus panel describing React Native expansion.
- Fade-up and soft floating animations.

### 5.2 Services Section

Component: `src/components/ServicesOverview.jsx`

Features:

- Section anchor: `#services`.
- Uses reusable `Title` component.
- Four service cards:
  - Business Websites.
  - E-Commerce Stores.
  - Custom Web Apps.
  - Mobile Apps.
- Responsive grid:
  - One column on mobile.
  - Two columns on small screens.
  - Four columns on large screens.
- Each service card uses the shared `interactive-card` visual treatment.

### 5.3 Featured Projects Section

Component: `src/components/Projects.jsx`

Features:

- Section anchor: `#projects`.
- Uses reusable `Title` component.
- Introductory project description.
- Displays featured projects from `src/data/projects.js`.
- Uses `ProjectCard` for consistent project rendering.
- Two-column layout on medium screens and above.
- Includes `More Projects` button linking to `/projects`.

Featured projects:

- Beckery's.
- FitForge.

### 5.4 Pricing Section

Component: `src/components/Pricing.jsx`

Features:

- Section anchor: `#pricing`.
- Uses reusable `Title` component.
- Explains that final pricing depends on features, integrations, and timeline.
- Groups pricing packages by service category.
- Each package card contains:
  - Plan name.
  - Starting price or custom quote.
  - Summary.
  - Optional badge.
  - Perfect-for list.
  - Included features list.
  - Estimated delivery timeline.
  - `Request This Plan` CTA linking to `/project-brief`.

Pricing groups:

- Website Development.
- Mobile App Development.
- Custom Web & Mobile Systems.

Website packages:

- Starter Website, starting from GH₵1,500.
- Business Website, starting from GH₵3,500.
- E-Commerce Website, starting from GH₵6,500.

Mobile app packages:

- Starter Mobile App, starting from GH₵5,000.
- Business Mobile App, starting from GH₵10,000.

Custom system package:

- Custom Systems, quoted per project.

### 5.5 Blog Preview Section

Component: `src/components/BlogPreview.jsx`

Features:

- Section anchor: `#updates`.
- Uses reusable `Title` component.
- Presents KD Studios blog/update positioning.
- Shows the first two posts from `src/data/blogPosts.js`.
- Each preview card includes:
  - Date/status.
  - Read time.
  - Title.
  - Excerpt.
  - Highlight chips.
  - `Read more` link to `/blog`.
- Includes `View all updates` link.

### 5.6 Process Section

Component: `src/components/Process.jsx`

Features:

- Uses reusable `Title` component.
- Explains the project workflow in three steps:
  - Share the idea.
  - Plan the build.
  - Build and launch.
- Three-card responsive grid.
- Each card includes a step number, title, and description.

### 5.7 Contact Section

Component: `src/components/Contact.jsx`

Features:

- Visual section title: `Contact Me`.
- Section anchor placed on contact content: `#contact`.
- Contact copy that invites visitors to build websites, stores, apps, or mobile ideas.
- Calls to action:
  - `Start Project Brief` links to `/project-brief`.
  - `Make Payment` links to `/payments`.
- Social/contact icon links:
  - LinkedIn.
  - GitHub.
  - WhatsApp.
  - Instagram.
- Phone call link: `+233 59 536 3184`.
- Contact form fields:
  - First name.
  - Email.
  - Message.
- Form behavior:
  - Uses React Hook Form.
  - Formats the submitted fields into a WhatsApp message.
  - Opens WhatsApp via `https://wa.me/233595363184`.
  - Shows a completion reminder after opening WhatsApp.
  - Resets the form after submission.

## 6. Navigation Features

Component: `src/components/Navbar.jsx`

Features:

- Sticky header pinned to the top of the viewport.
- Semi-transparent dark background with backdrop blur.
- KD Studios logo and brand label linking to home.
- Desktop navigation links:
  - Home.
  - Services.
  - Projects.
  - Pricing.
  - Blog.
  - Contact.
  - Start Project.
- Mobile navigation:
  - Toggle button with expanded/collapsed state.
  - Dropdown menu with core links.
  - Includes mobile-only `Make Payment` CTA.
- Smooth hash navigation:
  - If already on the homepage, hash links scroll without a page reload.
  - Scroll position accounts for sticky header height.
  - If on another route, hash links navigate back to the homepage and target the section.
- Closes mobile menu after navigation.

## 7. Project Library Features

Page: `src/pages/ProjectsPage.jsx`

Features:

- Route: `/projects`.
- Uses shared dark page layout.
- Uses `Title` with `Project Library`.
- Introduces the expanded project collection.
- Includes CTAs:
  - `Back to Home`.
  - `Get in Touch`.
- Displays all projects from `allProjects`.
- Responsive grid:
  - One column on mobile.
  - Two columns on medium screens.
  - Three columns on extra-large screens.

Project data source:

- `src/data/projects.js`.

Project categories represented:

- Featured live client/project builds.
- Personal app projects.
- Backend experiments.
- UI experiments.
- Full-stack concepts in planning.

## 8. Project Card Features

Component: `src/components/ProjectCard.jsx`

Features:

- Displays project image when available.
- Displays generated placeholder panel when no image is provided.
- Shows project status, title, description, and tags.
- Shows `View Demo` link when a demo URL exists and the project is not marked as in progress.
- Provides a toggleable `Case Study` button.
- Tracks case study expansion state per card.
- Parses case study text into labeled sections when markers exist:
  - Challenge.
  - Approach.
  - Result.
- Shows fallback message when no case study is available.
- Shows additional details as a bullet list.
- Supports optional image fit and image position props.
- Uses hover image scaling and shared interactive card styles.

## 9. Project Data Features

File: `src/data/projects.js`

Data model fields:

- `title`.
- `desc`.
- `img`.
- `demoLink`.
- `tags`.
- `status`.
- `caseStudy`.
- `details`.
- Optional image configuration through component props.

Current featured projects:

- Beckery's:
  - Mobile-first storefront for a baking business.
  - Live demo available.
  - Tags include React, Tailwind CSS, Vercel, Client.
  - Includes case study and implementation details.

- FitForge:
  - Personal workout and fitness tracker.
  - Live demo available.
  - Tags include React, Vite, Tailwind CSS, Firebase, Authentication, Vercel, Personal.
  - Includes case study and detailed feature list.

Current additional projects:

- KanFlow:
  - Productivity task management app.
  - Live demo available.
  - Includes keyboard shortcuts, local storage, and responsive dashboard details.

- Netflix Clone:
  - Streaming UI prototype.
  - Live demo available.
  - Includes TMDB API, Firebase Authentication, Firestore watchlists, carousels, and lazy loading.

- API Practice Builds:
  - Backend experiments using Node.js, Express, and MongoDB.
  - Status: Building.

- UI Component Experiments:
  - Interface studies using React, CSS, and JavaScript.
  - Status: Exploring.

- Full-Stack App Concepts:
  - Product ideas for complete applications.
  - Status: Planning.

## 10. Project Brief Features

Page: `src/pages/ProjectBriefPage.jsx`

Features:

- Route: `/project-brief`.
- Full-page project intake experience.
- Uses shared dark page layout.
- Uses `Title` with `Start a Project`.
- Split layout:
  - Sticky guidance panel on large screens.
  - Form panel for client intake.
- Helpful guidelines panel for visitors.
- CTAs:
  - `Back to Home`.
  - `View My Work`.
- Uses React Hook Form.
- Submits by formatting all answers into a WhatsApp message.
- Opens WhatsApp conversation with KD Studios.
- Resets form after submission.
- Shows reminder message after WhatsApp opens.

Form sections:

- Your Details.
- Project Basics.
- Pages and Features.
- Project Direction.

Your Details fields:

- Full name.
- Email address.
- Phone or WhatsApp.
- Business or brand name.

Project Basics fields:

- Project type.
- Timeline.
- Estimated budget.
- Current website.

Project type options:

- Portfolio site.
- Booking site.
- Landing page.
- Business website.
- E-commerce store.
- Blog or content site.
- Web app.
- Mobile app.
- Not sure yet.

Timeline options:

- As soon as possible.
- Within 2 weeks.
- Within 1 month.
- 1-3 months.
- Flexible.

Budget options:

- Still deciding.
- Small starter project.
- Standard business site.
- Larger custom build.
- Need guidance.

Page options:

- Home.
- About.
- Services.
- Projects or portfolio.
- Booking.
- Shop.
- Blog.
- Contact.
- FAQ.

Feature options:

- Contact form.
- Booking calendar.
- Online payments.
- Product or service listings.
- Photo/video gallery.
- Blog or articles.
- User accounts.
- Admin dashboard.
- Mobile app screens.
- API integration.
- Social media links.
- Analytics setup.

Project Direction fields:

- Main goal.
- Target audience.
- Design style.
- Websites or brands the client likes.
- Content readiness.
- Extra notes.

## 11. Payment Features

Page: `src/pages/PaymentPage.jsx`

Features:

- Route: `/payments`.
- Uses shared dark page layout.
- Uses `Title` with `Secure Checkout`.
- Explains that payments are processed through Paystack.
- Lists accepted payment methods:
  - Mobile Money.
  - Visa and Mastercard.
  - Bank Transfers.
- Includes `View Pricing` CTA.
- Dynamically loads Paystack Inline script from `https://js.paystack.co/v1/inline.js`.
- Removes Paystack script on component unmount.
- Payment form fields:
  - Email address.
  - Amount in GHS.
- Converts entered GHS amount into pesewas by multiplying by 100.
- Uses GHS as the Paystack currency.
- Shows loading state while checkout initializes.
- Disables payment button during initialization.
- Opens Paystack iframe checkout.
- Shows success alert with Paystack payment reference.
- Resets loading state when the Paystack modal closes.
- Shows an alert if Paystack has not finished loading.

## 12. Blog Features

Page: `src/pages/BlogPage.jsx`

Features:

- Route: `/blog`.
- Uses shared dark page layout.
- Uses `Title` with `Blog`.
- Split layout:
  - Sticky intro/sidebar on large screens.
  - Blog post list on the right.
- Blog positioning:
  - KD Studios updates.
  - News, learning notes, and future plans.
  - React Native learning journey.
- CTA linking to `/project-brief`.
- Displays posts from `src/data/blogPosts.js`.
- Each post includes:
  - Date/status.
  - Read time.
  - Title.
  - Excerpt.
  - Highlight cards.
  - Body paragraphs.
  - Tag chips.

Current blog posts:

- Learning React Native for Mobile App Development.
- Future Plan: Mobile App MVPs.
- More Build Notes From KD Studios.

## 13. Blog Data Features

File: `src/data/blogPosts.js`

Data model fields:

- `title`.
- `date`.
- `readTime`.
- `excerpt`.
- `tags`.
- `highlights`.
- `body`.

Content themes:

- React Native learning.
- Mobile app MVP planning.
- KD Studios service and project updates.
- Development lessons and future growth.

## 14. Footer Features

Component: `src/components/Footer.jsx`

Features:

- Appears on every route.
- Brand area with KD Studios logo and summary text.
- Social links:
  - GitHub.
  - LinkedIn.
  - WhatsApp.
  - Instagram.
- Desktop footer link groups:
  - Explore.
  - Services.
  - Actions.
- Mobile footer links:
  - Services.
  - Projects.
  - Pricing.
  - Blog.
- Dynamic copyright year using `new Date().getFullYear()`.
- Phone link in bottom bar.

## 15. Styling and Design System

File: `src/index.css`

### 15.1 Theme Variables

The site defines CSS custom properties for the primary visual system:

- `--primary-color`: bright cyan accent.
- `--secondary-color`: dark blue.
- `--tertiary-color`: action blue.
- `--accent-color`: warm yellow.
- `--dark-bg`: main page background.
- `--surface-bg`: elevated surface background.
- `--card-bg`: card background.
- `--card-border`: card border color.
- `--text-color`: body text.
- `--title-color`: heading text.

### 15.2 Global Styling

- Smooth scroll enabled on `html`.
- Minimum body width of 320px.
- Dark site background.
- Text selection color set on page containers.

### 15.3 Animation Utilities

Custom keyframes:

- `float-soft`.
- `fade-up`.
- `shimmer`.

Custom utility classes:

- `animate-fade-up`.
- `animate-float-soft`.
- `interactive-card`.
- `button-pop`.

### 15.4 Interactive Cards

The `interactive-card` class provides:

- Border with color-mix transparency.
- Layered gradient background.
- Box shadow.
- Hover lift.
- Border color transition.
- Hover shimmer overlay.

### 15.5 Buttons

The `button-pop` class provides:

- Hover lift.
- Slight scale effect.
- Shadow enhancement.
- Shimmer animation overlay.
- Smooth transitions for transform, shadow, border, and background.

### 15.6 Reduced Motion

The site respects `prefers-reduced-motion: reduce` by minimizing:

- Scroll behavior.
- Animation duration.
- Animation iteration count.
- Transition duration.

## 16. Responsiveness Features

- Mobile-first layout across all main sections.
- Sticky navigation remains available on scroll.
- Mobile menu replaces desktop nav below medium breakpoint.
- Hero layout stacks on mobile and becomes two columns on large screens.
- Services, projects, pricing, blog cards, and process steps use responsive grids.
- Forms use single-column mobile layouts and two-column layouts where appropriate on larger screens.
- Project library expands up to three columns on extra-large screens.
- Footer switches from compact mobile links to full desktop grouped navigation.
- Content containers use responsive padding for mobile, tablet, desktop, and wide desktop.

## 17. Forms and Client Communication

Forms currently do not submit to a backend database or email service. Instead, they:

- Collect user input locally in the browser.
- Format the input into a readable message.
- Open WhatsApp with the message prefilled.
- Ask the user to send the WhatsApp message to complete submission.

Form-powered flows:

- Homepage contact form.
- Project brief form.

Benefits:

- No backend required.
- Fast client response path.
- Messages arrive directly in WhatsApp.

Limitations:

- Submission is not complete until the user sends the WhatsApp message.
- There is no stored form history in the app.
- There is no automatic email copy.

## 18. External Integrations

### 18.1 WhatsApp

Used for:

- Contact messages.
- Project brief submissions.
- Direct social/contact link.

Target number:

- `233595363184`.

### 18.2 Paystack

Used for:

- Client payments on `/payments`.

Implementation:

- Loads Paystack inline checkout script dynamically.
- Uses a live public key.
- Accepts email and amount.
- Opens Paystack iframe.
- Shows reference on successful payment.

### 18.3 Vercel Analytics

Used for:

- Site analytics through `@vercel/analytics/react`.

### 18.4 External Project Demos

Project cards link to deployed demos hosted on Vercel or other public URLs.

### 18.5 Social Platforms

Used for:

- GitHub profile.
- LinkedIn profile.
- WhatsApp chat.
- Instagram profile.

## 19. Assets

Current referenced assets include:

- KD Studios logo.
- Profile/brand images.
- Project screenshots.
- Social icons.
- Phone icon.

Important files:

- `src/assets/logo_optimized.png`.
- `src/assets/profile_pic_optimized.jpg`.
- `src/assets/demo2.png`.
- `src/assets/demo3.png`.
- `src/assets/demo4.png`.
- `src/assets/fitforge.png`.
- `src/assets/github_icon.png`.
- `src/assets/github_icon1.png`.
- `src/assets/linkedIn_icon.png`.
- `src/assets/instagram_icon.png`.
- `src/assets/whatsapp_icon.png`.
- `src/assets/phone_icon.png`.

## 20. Deployment and Hosting Features

- Vite build script: `npm run build`.
- Vite preview script: `npm run preview`.
- Vercel-friendly project structure.
- `vercel.json` included.
- `public/_redirects` included for static hosting fallback behavior.
- Google verification HTML file included in `public`.

## 21. SEO and Discoverability Features

Existing support:

- Branded page title and metadata in `index.html`.
- Google verification file in `public`.
- Semantic section headings throughout components.
- Alt text for key image assets.
- Descriptive links and CTAs.

Potential future improvements:

- Add route-specific metadata.
- Add Open Graph and Twitter card image metadata.
- Add structured data for local business or professional service.
- Add sitemap generation.
- Add canonical URL.
- Add individual project case study pages.

## 22. Accessibility Features

Existing support:

- Semantic HTML sections, articles, navs, headers, footers, and forms.
- Accessible labels on major form fields.
- `aria-label` on icon-only social links.
- `aria-expanded` on mobile navigation toggle.
- `aria-hidden` for decorative images/icons where appropriate.
- Keyboard-focusable links and form controls.
- Reduced motion media query.
- Mobile-friendly target sizes for buttons and links.

Potential future improvements:

- Replace mobile menu symbols with clearer accessible icons.
- Add stronger visible focus styles consistently across all controls.
- Add inline form validation messages.
- Add payment amount validation for minimum amount.
- Review contrast on lower-opacity text areas.

## 23. Current Implementation Notes

- Routing is handled manually in `App.jsx`; there is no React Router dependency.
- Hash scrolling is customized to account for sticky header height.
- The homepage imports only the currently active sections:
  - `Hero`.
  - `ServicesOverview`.
  - `Projects`.
  - `Pricing`.
  - `BlogPreview`.
  - `Process`.
  - `Contact`.
- `About.jsx` and `Cards.jsx` exist but are not currently rendered by `App.jsx`.
- Some older icon references inside `About.jsx` may require asset verification before re-enabling that section.
- Project and blog content are centralized in data files, making content updates easier without changing rendering components.

## 24. Future Feature Opportunities

- Add a real backend or serverless endpoint for form submissions.
- Send form submissions to email as well as WhatsApp.
- Add admin-editable project and blog content through a CMS.
- Add individual project case study pages with richer process documentation.
- Add testimonials or client results.
- Add service detail pages for each offering.
- Add frequently asked questions.
- Add package comparison table.
- Add booking calendar integration.
- Add newsletter signup.
- Add client portal for project status and invoices.
- Add automated payment receipt handling.
- Add analytics events for major CTAs.
- Add unit or component tests for form formatting and project card behavior.
- Add end-to-end tests for routing, forms, and payment initialization.

