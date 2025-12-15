const experiences = [
  {
    role: "Assistant Secretary of Ex-Com",
    company: "IEEE CS SBC of SLTC",
    period: "2024/25 Academic Year",
    description:
      "Demonstrating dedication to upholding the highest standards of quality in all endeavors.",
  },
  {
    role: "Content Creation Team Lead",
    company: "Codemania v4.0 - IEEE CS SBC of SLTC",
    period: "Specific Period Not Given",
    description:
      "Showcased leadership skills in heading the content creation for Codemania v4.0.",
  },
  {
    role: "Content Creation Team Lead",
    company: "Docker Session One - Office of Industry Liaison of SLTC",
    period: "Specific Period Not Given",
    description:
      "Organized and led content creation for a Docker session, demonstrating commitment to industry engagement.",
  },
  {
    role: "Member, Outgoing Global Talent (oGT)",
    company: "AIESEC in SLTC",
    period: "2023/24 (April 2023)",
    description:
      "Active involvement in AIESEC, contributing to the Outgoing Global Talent team.",
  },
];

const skills = {
  "Key Skills": [
    "Software Engineering",
    "Science",
    "Technology",
    "Productivity",
    "Quality Assurance",
    "Leadership",
    "Content Creation",
    "Organizational Skills",
  ],
  "Languages & Technologies": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "NoSQL",
    "Git",
    "Docker",
    "Python",
    "Java",
  ],
};

const universityOrganizations = [
  {
    organization: "IEEE Computer Society Student Branch Chapter (SBC) of SLTC",
    roles: [
      "Member (2023/24)",
      "Content Creation Team Member - Career Fest 2023",
      "Content Creation Team Member - IdeaniX Generation 1",
      "Content Creation Team Lead - Codemania v4.0",
      "Assistant Secretary of Ex-Com (2024/25)",
    ],
  },
  {
    organization: "AIESEC in SLTC",
    roles: [
      "Member of oGT (Outgoing Global Talent) (2023/24)",
      "Promoting Agent & OC Member - Career Fest 2023 AIESEC oGT stall",
    ],
  },
  {
    organization: "Office of Industry Liaison of SLTC",
    roles: ["Content Creation Team Lead - Docker Session One"],
  },
];

export default function Experience() {
  return (
    <div className="container mx-auto max-w-4xl p-8">
      <h2 className="mb-6 mt-12 text-3xl font-bold text-mocha-text">
        University Clubs and Organizations
      </h2>
      <div className="space-y-8">
        {universityOrganizations.map((org) => (
          <div
            key={org.organization}
            className="rounded-lg border border-mocha-surface0 bg-mocha-mantle p-6"
          >
            <h3 className="text-xl font-semibold text-mocha-blue">
              {org.organization}
            </h3>
            <ul className="mt-4 space-y-2">
              {org.roles.map((role) => (
                <li key={role} className="text-mocha-text">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-6 mt-12 text-3xl font-bold text-mocha-text">Skills</h2>
      <div className="rounded-lg border border-mocha-surface0 bg-mocha-mantle p-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-6 last:mb-0">
            <h3 className="mb-4 text-xl font-semibold text-mocha-blue">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-mocha-surface1 px-3 py-1 text-sm text-mocha-subtext1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
