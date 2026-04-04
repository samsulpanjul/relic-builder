"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MENU_LIST = [
  { href: "/character", label: "Character" },
  { href: "/relic", label: "Relic" },
  { href: "/import", label: "Import" },
  { href: "/export", label: "Export" },
];

const MenuNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="wrapper mt-4 mb-6 px-2 flex items-center justify-center gap-2 p-1.5 bg-background/60 backdrop-blur-md border border-white/10 rounded-full shadow-xl">
      {MENU_LIST.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full outline-none
                ${
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
          >
            <span className="relative z-10 tracking-widest">{item.label}</span>

            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {isActive && (
              <motion.div
                layoutId="active-dot"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MenuNavbar;
