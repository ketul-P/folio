Project Structure

src/
├── data.js              ← All your content lives here (edit this!)
├── App.jsx              ← Root, assembles all sections
└── components/
    ├── Nav.jsx          ← Fixed top nav with smooth scroll links
    ├── Hero.jsx         ← Landing with name + LinkedIn/email buttons
    ├── Summary.jsx      ← About section
    ├── Experience.jsx   ← Work history (maps over data.js)
    ├── Education.jsx    ← Education & certifications
    ├── Skills.jsx       ← Tech stack grid
    ├── Projects.jsx     ← Project cards
    ├── Footer.jsx
    ├── SectionWrapper.jsx  ← Scroll-reveal animation wrapper
    └── Tag.jsx          ← Reusable pill tag