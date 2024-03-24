"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function ImageGrid({ cards }: { cards: any[]; }) {
  const splitCards = cards.resuce((acc, card, i) => {
    if (i % 4 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(card);
    return acc;
  }, []);

  return (
    <div className="h-screen py-8 w-full">
      {splitCards.map((cards: any[], i: number) => (
        <LayoutGrid key={i} cards={cards} />
      ))}
    </div>
  );
}
