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
        <MenuItem setActive={setActive} active={active} item="Наш каталог">
          <div className="text-sm grid grid-cols-2 gap-10 p-8 bg-gray-50 rounded-xl">
            <ProductItem
              setActive={setActive}
              title="Кухонные гарнитуры"
              href="/catalog/kuhna"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Лучшие проектные решения вашего кухонного гарнитура"
            />
            <ProductItem
              setActive={setActive}
              title="Шкафы и гардеробы"
              href="/catalog/garderob"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Вместительные конструкции с различным наполнением и фурнитурой"
            />
            <ProductItem
              setActive={setActive}
              title="Шкафы купе"
              href="/catalog/kupe"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Дизайнерские проекты шкафов купе для экономии пространства"
            />
            <ProductItem
              setActive={setActive}
              title="Распродажа"
              href="/catalog/rasprodazha"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Реализация продукции в салонах по сниженным ценам"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
