"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";

const productCategories = [
  { name: "Hand Tools", href: "https://www.satyogtrading.com/Products/HAND-TOOLS/" },
  { name: "Cutting Tools", href: "https://www.satyogtrading.com/Products/CUTTING-TOOLS/" },
  { name: "Fasteners", href: "https://www.satyogtrading.com/Products/FASTENERS-GROUP/" },
  { name: "Lubrication Equipment", href: "https://www.satyogtrading.com/Products/LUBRICATION-EQUIPMENT/" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <div className="hidden md:flex ml-12">
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200 py-2 text-base font-medium">
                    Products
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-700 group-hover:text-orange-500 transition-colors duration-200" />
                  </button>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 shadow-lg rounded-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      {productCategories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                        >
                          {category.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://www.satyogtrading.com/Contact-Us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium"
              >
                Contact Us
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 hover:text-orange-500 p-2.5 -m-2.5"
                aria-label="Open main menu"
              >
                <span className="sr-only">Open menu</span>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div onClick={() => setMobileMenuOpen(false)}>
                <Logo linkTo="/" />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <details className="group">
                    <summary className="-mx-3 flex list-none cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Products
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-2 space-y-1 pl-6">
                      {productCategories.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg py-2 pl-3 pr-3 text-sm font-semibold leading-7 text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </details>
                </div>
                <div className="py-6">
                  <a
                    href="https://www.satyogtrading.com/Contact-Us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}