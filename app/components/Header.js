"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container bar">
        <Link href="/" className="brand" aria-label={site.name}>
          <span className="spade" aria-hidden="true">♠</span>
          OnlinePokerBonuses
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/best-poker-bonuses/" className="btn btn-primary btn-sm nav-cta">
            Top Bonuses
          </Link>
        </nav>
      </div>
    </header>
  );
}
