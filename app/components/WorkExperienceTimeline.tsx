import { motion } from 'framer-motion';

export default function WorkExperienceTimeline() {
  const experiences = [
    {
      company: 'Freelance',
      role: 'Freelance Developer ',
      date: 'Oct 2025 - Present',
      description: 'Analyzed business workflows to identify automation Opputunites \nend-to-end automation pipelines using Python, Flask, and APIs, reducing manual processing time by ~25–40% across daily operations \nDeveloped client-facing dashboards using JavaScript and REST APIs, enabling real-time KPI visibility and faster data-driven decisions'
    },
    {
      company: 'Study Rat',
      role: 'Full Stack developer',
      date: 'Jun 2025 - Dec 2025',
      description: 'Improved performance by adding search indexing, caching, and pagination, reducing average page load times by 1 second.\n Developed and deployed RESTful APIs for core platform features, integrating third-party services to expand user functionality and streamline application workflows.'
    },
    {
      company: 'Flo Seniors',
      role: 'Ai Engineering Intern',
      date: 'May 2025 - Oct 2025',
      description: 'Redesigned and implemented a modern, user-centered UI/UX, optimizing image delivery through compression and lazy loading to reduce image load times by ~40%, resulting in smoother navigation and improved user flow. \n Simplified site structure and component organization, reducing long-term maintenance effort and minimizing reliance on external developers.'
    },
    {
      company: 'Radical Ai',
      role: 'Ai Engineering Intern',
      date: 'May 2024 - Feb 2025',
      description: 'Worked on AI-powered web applications. Integrated CNNs, RNNs, and transformers, boosting scalability by 50%. \n Enhanced processing speed by 20% using pattern analysis in Python and TensorFlow. \n Identified appropriate datasets and employed efficient data representation techniques to support over 10,000 data points per hour.'
    },
    {
      company: 'Nordic Hospitality Suites',
      role: 'Web Developer',
      date: 'Jan 2021 - Sep 2021',
      description: 'Redesigned website with responsive JavaScript UI. Built advanced booking features, reducing booking time by 20% . \n implemennted lazy load for images reduced load times by 15% (under 2 seconds)'
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </motion.h2>
        <div className="relative border-l-2 border-gray-700 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-6 relative">
              <div className="absolute -left-4 top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
              <div className="bg-gray-900/60 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <span className="text-lg font-semibold text-blue-400">{exp.company}</span>
                  <span className="text-sm text-gray-400 md:text-right">{exp.date}</span>
                </div>
                <div className="text-md font-medium text-white mb-1">{exp.role}</div>
                <div className="text-gray-300 text-sm">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
