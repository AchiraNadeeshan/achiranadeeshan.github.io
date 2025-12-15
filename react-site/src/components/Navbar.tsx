"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Invisible container */}
      <div className="group bg-transparent backdrop-blur-sm hover:bg-mocha-mantle/60">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-4">
          <div className="flex items-center gap-10">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="group/link relative text-sm font-medium tracking-wide transition-all duration-300"
                >
                  {/* Text */}
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-mocha-text"
                        : "text-mocha-subtext1/70 group-hover/link:text-mocha-text"
                    }`}
                  >
                    {label}
                  </span>

                  {/* Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-mocha-lavender/70 transition-transform duration-300 group-hover/link:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom border appears only on hover */}
        <div className="h-px w-full bg-mocha-surface0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </nav>
  );
}
