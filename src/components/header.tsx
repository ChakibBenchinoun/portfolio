"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

const navigation = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Projects", path: "projects" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <header className="bg-white fixed z-50 inset-x-0 border-b border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="/">
          <span className="sr-only">Chakib Benchinoun portfolio</span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            C.BEN
          </h1>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={`item.path`}
              className="group font-semibold leading-6 text-gray-900"
            >
              {item.label}
              <div className="bg-gray-900 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
