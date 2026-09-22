# FAA Robotics

Company website built for the client FAA Robotics Pvt Ltd, a robotics and STEM education company that sets up robotics labs in schools and sells robotics kits and learning material.

**Live:** https://faaroboticspvtltd.com/

## Sections / Features

- **Home** – landing page with a looping background video, animated headline, and quick links into the rest of the site.
- **About Us** – company story and mission, focused on hands-on STEM learning over rote memorization.
- **For Institutions** – lab setup offerings for schools, including Atal Tinkering Lab (ATL) packages, with an "Apply Now" form link for interested institutions.
- **Student Zone**
  - **Academy & Hall of Fame** – free online learning sessions for students, graduates, and teachers.
  - **Chathurvidha Competition** – a four-category student innovation/robotics competition page with registration details.
- **Robo Store**
  - **Electronics** – electronic components and modules for robotics projects.
  - **Books** – the "Practical Tinker Series" handbooks.
  - **Robots** – robots and educational kits available for purchase/service.
- **Contact Us** – contact form that sends inquiries by email, with success/error feedback in the UI.

## Tech stack

- Vue 3 (Composition API, `<script setup>`)
- Vue Router 4 for page navigation
- Vite as the build tool and dev server
- Tailwind CSS 4 (via `@tailwindcss/postcss`) alongside plain CSS for page-specific styling
- AOS for scroll-triggered animations
- Font Awesome and bootstrap-icons-vue for icons
- Express + Nodemailer for the contact form backend (`server.js`), with a matching Netlify Function (`netlify/functions/contact.cjs`) so the same form works in production
- Deployed on Netlify

---

**Ankit Singh**
[LinkedIn](https://www.linkedin.com/in/ankit-singh-117925249/)
