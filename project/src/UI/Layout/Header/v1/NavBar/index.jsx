"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components";
import { cn } from "@/utils/cn";


export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn(" inset-x-0 max-w-3xl z-50 ", className)}>
      <Menu setActive={setActive}>

        <MenuItem setActive={setActive} active={active} item="Каталог">
          <div className="text-sm grid grid-cols-2 gap-10 p-8 bg-gray-100 rounded-xl">
            <ProductItem
              title="Мебель"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Бытовая Техника"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Столешницы"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Мойки и смесители"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
