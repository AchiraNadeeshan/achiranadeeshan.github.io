const projects = [
  {
    title: "Personal Portfolio Website",
    repo: "achiranadeeshan.github.io",
    github: "https://github.com/AchiraNadeeshan/achiranadeeshan.github.io",
    description: "My personal portfolio website built with TypeScript and Next.js. It showcases my projects, posts, and experience with a focus on performance and accessibility.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SoftSight Web (fork)",
    repo: "softsight-web",
    github: "https://github.com/AchiraNadeeshan/softsight-web",
    description: "Full-stack web application for the SoftSight system (fork). Frontend and backend components enabling project-success prediction workflows and user interfaces.",
    tags: ["TypeScript", "Full-stack", "Postgres"],
  },
  {
    title: "GlobalBooks SOA",
    repo: "globalbooks-soa",
    github: "https://github.com/AchiraNadeeshan/globalbooks-soa",
    description: "A hybrid service-oriented architecture for GlobalBooks Inc., integrating SOAP and REST services with messaging and BPEL orchestration to support enterprise workflows.",
    tags: ["Java", "SOAP", "REST", "BPEL"],
  },
  {
    title: "PathFinder — Job Matcher",
    repo: "social-activity-job-matcher",
    github: "https://github.com/AchiraNadeeshan/social-activity-job-matcher",
    description: "PathFinder analyzes uploaded social activity (LinkedIn exports, PDFs) and uses ML models to provide personalized job recommendations.",
    tags: ["React", "Python", "Machine Learning", "Next.js", "scikit-learn"],
  },
  {
    title: "MovieTalk — Movie Blog",
    repo: "movie-talk",
    github: "https://github.com/AchiraNadeeshan/movie-talk",
    description: "A modern blog platform to discuss movies with a React frontend, Firebase backend, Dockerized deployment, and CI via GitHub Actions.",
    tags: ["React", "Firebase", "Docker", "NGINX"],
  },
  {
    title: "Personal Dotfiles",
    repo: "dotfiles",
    github: "https://github.com/AchiraNadeeshan/dotfiles",
    description: "Neovim and development environment configurations written in Lua to streamline setup across machines.",
    tags: ["Lua", "dotfiles"],
  },
  {
    title: "Legacy Portfolio",
    repo: "legacy-portfolio",
    github: "https://github.com/AchiraNadeeshan/legacy-portfolio",
    description: "My first portfolio site — a lightweight project built with classic web technologies and Google Apps Script integrations.",
    tags: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
  },
  {
    title: "Serverless Book Store (fork)",
    repo: "book-store-website",
    github: "https://github.com/AchiraNadeeshan/book-store-website",
    description: "A serverless e-commerce webapp (fork) developed for a cloud infrastructure course — uses Lambda, S3, DynamoDB and API Gateway.",
    tags: ["React", "AWS Lambda", "S3", "DynamoDB"],
  },
  {
    title: "NIC Details Extractor",
    repo: "sri_lankan_nic_details_extractor",
    github: "https://github.com/AchiraNadeeshan/sri_lankan_nic_details_extractor",
    description: "A Flutter app that decodes Sri Lankan NIC numbers to extract birthdate, gender, age, and voting eligibility — useful for quick validation and tooling.",
    tags: ["Dart", "Flutter", "Android"],
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto max-w-4xl p-8">
      <h1 className="mb-2 text-4xl font-bold text-mocha-lavender">Projects</h1>
      <p className="mb-8 text-mocha-subtext1">
        A selection of projects that showcase my interests and skills.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-mocha-surface0 bg-mocha-mantle p-6"
          >
            <h2 className="text-2xl font-semibold text-mocha-text">
              {project.title}
            </h2>
            <p className="mt-4 text-mocha-text">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-mocha-surface1 px-3 py-1 text-sm text-mocha-subtext1"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-mocha-blue px-4 py-2 text-sm font-medium text-mocha-crust hover:bg-mocha-blue/90"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
