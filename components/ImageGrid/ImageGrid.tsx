"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function ImageGrid({ cards }: { cards: any[]; }) {
  const LabImageComponent = ({ image, title }: { image: any; title: any; }) => {
    return (
    <div className="flex flex-col items-center justify-center space-y-4 border p-2 rounded">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
};

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-8 w-full">
      {cards.map((card) => (
        <LabImageComponent key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
  );
}
