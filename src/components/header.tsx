"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { LogoSite } from "./icons/logo-site";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "#about" },
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
];

export function Header({ className }: { className?: string }) {
  const [navbar, setNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 140) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  React.useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={clsx(
        "fixed z-50 inset-x-0 border-b border-gray-600 transition",
        navbar ? "bg-gray-900" : "bg-transparent"
      )}
      aria-label="Global"
    >
      <div className={clsx("flex items-center justify-between", className)}>
        <a href="/">
          <span className="sr-only">Chakib Benchinoun portfolio</span>
          {/* <h1 className="text-3xl font-medium tracking-tight text-gray-100">
            C<span className="text-lime-500">.</span>BEN
          </h1> */}
          <LogoSite className="w-24 h-12" />
        </a>

        <div className="relative inline-block lg:hidden text-left">
          <DropdownMenuPrimitive.Root>
            <DropdownMenuPrimitive.Trigger asChild>
              <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-6 w-6 text-gray-300"
                  aria-hidden="true"
                />
              </button>
            </DropdownMenuPrimitive.Trigger>

            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.Content
                align="end"
                sideOffset={25}
                className={clsx(
                  "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                  "w-48 rounded px-5 py-4 shadow-md md:w-56",
                  "bg-gray-700"
                )}
              >
                <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200" />
                {navigation.map((item, i) => (
                  <DropdownMenuPrimitive.Item key={`${item.label}-${i}`}>
                    <a
                      href={item.path}
                      className="flex cursor-default select-none items-center rounded px-2 py-2 text-sm outline-none my-2 text-gray-300 font-medium hover:bg-gray-500"
                    >
                      {item.label}
                    </a>
                  </DropdownMenuPrimitive.Item>
                ))}
                <DropdownMenuPrimitive.Item>
                  <a
                    href="#contact"
                    className="flex cursor-default select-none items-center rounded px-2 py-2 outline-none my-2 font-bold text-lime-500 text-xl hover:bg-gray-500"
                  >
                    Contact
                  </a>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              </DropdownMenuPrimitive.Content>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Root>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="group font-medium leading-6 text-gray-300"
            >
              {item.label}
              <div className="bg-lime-500 h-0.5 scale-x-0 group-hover:scale-x-100 transition-all origin-left" />
            </a>
          ))}
          <a
            href="#contact"
            className="font-bold text-xl leading-6 text-lime-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
