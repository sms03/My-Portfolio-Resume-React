import { useEffect } from 'react';
import { useInView } from '../hooks/react-intersection-observer';
import { Code, ArrowRight, Calendar, Briefcase, ExternalLink, Github, Clock, Sparkles } from 'lucide-react';

console.log('Projects component file loaded');

const workExperience = [
  {
    company: 'AlphaAltair Creative Agency NGEN Luxuaries',
    location: 'INDIA',
    period: 'AUGUST 2024 - NOVEMBER 2024',
    role: '3D Motion Graphics Designer',
    current: false,
  },
  {
    company: 'Future House Music',
    location: 'ROTTERDAM',
    period: 'JUNE 2020 - MARCH 2024',
    role: '3D Motion Graphics Designer',
    current: false,
  },
  {
    company: 'GoZone Skimboards',
    location: 'POLAND',
    period: 'MAY 2021 - FEBRUARY 2022',
    role: '3D Motion Graphics Designer',
    current: false,
  },
  {
    company: 'Rareaattic',
    location: 'INDIA',
    period: 'JUNE 2021 - JULY 2022',
    role: '3D Motion Graphics Designer',
    current: false,
  }
];

const artistWork = [
  {
    client: 'ALAN WALKER',
    period: 'DECEMBER 2020 - AUGUST 2021',
    role: '3D Cover Designer'
  },
  {
    client: 'MORGAN J',
    period: 'AUGUST 2021 - SEPTEMBER 2021',
    role: '3D Cover Designer'
  },
  {
    client: 'BCMP',
    period: 'JANUARY 2021 - FEBRUARY 2021',
    role: '3D Cover Designer'
  }
];

// Completed projects
const projects = [
  {
    id: 1,
    title: 'Ren3Der',
    description: '3D Quotation Calculator',
    technologies: ['React', 'Typescript'],
    color: 'from-portfolio-pastel-blue to-portfolio-pastel-purple',
    icon: <Code size={20} />,
    link: 'https://ren3der.vercel.app'
  },
  {
    id: 2,
    title: 'SharkSenz',
    description: 'Wanna learn and build an effective startup? Try SharkSenz to learn more.',
    technologies: ['React', 'Typescript', 'Three.js', 'JavaScript', 'WebGL'],
    color: 'from-portfolio-pastel-pink to-portfolio-pastel-red',
    icon: <Briefcase size={20} />,
    link: 'https://github.com/sms03/SharkSenz'
  }
];

// In progress projects
const inProgressProjects = [
  {
    id: 1,
    title: 'AI Agents with Google A2A',
    description: 'Building advanced conversational AI agents using Google\'s A2A technology with ADK and MCP servers.',
    technologies: ['Python', 'Google ADK', 'Pydantic', 'MCP'],
    completion: 65,
    startDate: 'April 2025',
    estimatedCompletion: 'July 2025',
    color: 'from-portfolio-pastel-green to-portfolio-pastel-blue',
    icon: <Sparkles size={20} />,
    link: 'https://github.com/sms03/Agent2Agent'
  },
  {
    id: 2,
    title: 'Portfolio Enhancement',
    description: 'Adding new features and improving design of my personal portfolio website.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    completion: 90,
    startDate: 'April 2025',
    estimatedCompletion: 'May 2025',
    color: 'from-portfolio-pastel-blue to-portfolio-pastel-pink',
    icon: <Code size={20} />,
    link: 'https://github.com/sms03/My-Portfolio-Resume'
  }
];

export const Projects = () => {
  console.log('Projects component function executed');
  try {
    const { ref: sectionRef, inView } = useInView({
      threshold: 0.05,
      triggerOnce: true,
      rootMargin: '100px 0px'
    });

    useEffect(() => {
      console.log('Projects component mounted');
      return () => console.log('Projects component unmounted');
    }, []);

    useEffect(() => {
      console.log('Projects inView state:', inView);
    }, [inView]);

    return (
      <>
        <div className="w-full h-8 flex items-center justify-center">
          <div className="w-1/2 h-0.5 bg-gradient-to-r from-portfolio-pastel-pink via-portfolio-pastel-purple to-portfolio-pastel-green opacity-60 rounded-full"></div>
        </div>
        <section id="projects" className="py-16 min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-portfolio-pastel-cream to-white">
          {/* Background elements */}
          <div className="animated-bg animated-circle circle-1"></div>
          
          <div ref={sectionRef} className="section-container relative z-10">
            <h2 className="section-title">
            Projects & Work Experience
            </h2>
            
            {/* In Progress Projects section - NEW SECTION */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-green flex items-center justify-center mr-3">
                  <Clock size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">In Progress Projects</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {inProgressProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`card p-6 group relative overflow-hidden border-l-4 border-portfolio-pastel-green scale-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Project badge */}
                    <div className="absolute top-4 right-4 flex items-center">
                      <span className="px-3 py-1 text-xs font-medium bg-portfolio-pastel-green/20 text-portfolio-pastel-green rounded-full flex items-center">
                        <Clock size={14} className="mr-1" /> In Progress
                      </span>
                    </div>
                    <div className="flex items-start flex-col sm:flex-row">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div className="flex-grow w-full">
                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-portfolio-pastel-green transition-colors pr-0 sm:pr-24 break-words">
                          {project.title}
                        </h3>
                        {/* Timeline */}
                        <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>{project.startDate} - Est. completion: {project.estimatedCompletion}</span>
                        </div>
                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4 break-words">
                          {project.description}
                        </p>
                        {/* Progress bar */}
                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{project.completion}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-portfolio-pastel-green to-portfolio-pastel-blue"
                              style={{ width: `${project.completion}%` }}
                            ></div>
                          </div>
                        </div>
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 break-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        {/* Links */}
                        <div className="flex flex-wrap items-center space-x-3">
                          <a 
                            href={project.link} 
                            className="text-portfolio-pastel-green hover:underline text-sm font-medium flex items-center break-all"
                          >
                            View Project <ArrowRight size={14} className="ml-1" />
                          </a>
                          {project.link !== '#' && (
                            <a href={project.link} className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                              <Github size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Brand Work Experience section */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-pink flex items-center justify-center mr-3">
                  <Briefcase size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Brand Work, as 3D Motion Graphics Designer</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {workExperience.map((job, index) => (
                  <div 
                    key={index} 
                    className={`card p-5 group hover:bg-portfolio-pastel-blue/5 transition-colors slide-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold group-hover:text-portfolio-pastel-blue transition-colors">
                        {job.company}
                      </h4>
                      <span className="text-xs bg-portfolio-pastel-blue/10 text-portfolio-pastel-blue px-2 py-0.5 rounded-full font-medium">
                        {job.location}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{job.role}</p>
                    
                    <div className="flex items-center text-xs text-gray-500 mt-auto">
                      <Calendar size={14} className="mr-1" />
                      {job.period}
                    </div>
                    
                    {job.current && (
                      <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Artist's Work section */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-purple flex items-center justify-center mr-3">
                  <Code size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Artist's Work, as 3D Cover Designer</h3>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-portfolio-pastel-purple/30 ml-3 hidden md:block"></div>
                
                <div className="space-y-8">
                  {artistWork.map((work, index) => (
                    <div 
                      key={index} 
                      className="md:pl-14 relative slide-in-right"
                      style={{ animationDelay: `${index * 150 + 300}ms` }}
                    >
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-portfolio-pastel-purple flex items-center justify-center text-white z-10 hidden md:flex">
                        {index + 1}
                      </div>
                      
                      <div className="card p-5 md:p-6 hover:border-portfolio-pastel-purple transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="w-7 h-7 rounded-full bg-portfolio-pastel-purple flex items-center justify-center text-white z-10 md:hidden">
                          {index + 1}
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-semibold text-lg text-portfolio-pastel-purple">
                              {work.client}
                            </h4>
                            <span className="text-xs bg-portfolio-pastel-purple/10 text-portfolio-pastel-purple px-2 py-1 rounded-full">
                              {work.role}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <Calendar size={14} className="mr-1" />
                            {work.period}
                          </div>
                        </div>
                        
                        <a href="#" className="text-portfolio-pastel-purple hover:underline text-sm font-medium flex items-center whitespace-nowrap">
                          View Work <ArrowRight size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Completed Projects section */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-portfolio-pastel-blue flex items-center justify-center mr-3">
                  <Code size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold">Completed Projects</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className={`card p-6 group relative overflow-hidden border-t-4 border-portfolio-pastel-blue scale-in`}
                    style={{ animationDelay: `${index * 200 + 600}ms` }}
                  >
                    <div className="absolute top-3 right-3 flex items-center">
                      <span className="px-2 py-0.5 text-xs font-medium bg-portfolio-pastel-blue/20 text-portfolio-pastel-blue rounded-full">
                        Completed
                      </span>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-4`}>
                      {project.icon}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-portfolio-pastel-blue transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3 mt-auto">
                      <a href={project.link} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <Github size={16} />
                      </a>
                      <a href={project.link} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <a href="#contact" className="btn-outline inline-flex items-center">
                  Work With Me <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (err) {
    console.error('Projects component runtime error:', err);
    return <div style={{color: 'red', padding: 20}}>Projects section failed to load. Check the console for details.</div>;
  }
};
