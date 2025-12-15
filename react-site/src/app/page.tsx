import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="w-full max-w-3xl p-8 text-center">
        <p className="text-mocha-subtext1 mt-1 text-2xl">
          Hello there, I'm Achira.
        </p>
        <h1 className="text-mocha-lavender mt-6 text-5xl font-extrabold tracking-tight sm:text-[4.5rem]">
          Welcome to my little space on the internet.
        </h1>

        <p className="text-mocha-text mx-auto mt-10 max-w-2xl text-lg">
          I’m currently a software engineering undergraduate, passionate about
          creating practical and meaningful software. I enjoy exploring the
          intersection of web development, AI/ML, and the future of technology,
          with a strong interest in open source, cloud computing, and
          science-driven innovation.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/achiranadeeshan/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mocha-blue text-mocha-crust hover:bg-mocha-blue/90 inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold"
          >
            <SiLinkedin className="text-mocha-crust h-5 w-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/AchiraNadeeshan"
            target="_blank"
            rel="noopener noreferrer"
            className="border-mocha-surface2 text-mocha-text hover:bg-mocha-surface0 inline-flex items-center gap-2 rounded-md border bg-transparent px-5 py-3 font-semibold"
          >
            <SiGithub className="text-mocha-text h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
