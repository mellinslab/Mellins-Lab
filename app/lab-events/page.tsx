import { Metadata } from "next";
import { ImageGrid } from "@/components/ImageGrid/ImageGrid";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Lab Events',
};

export default function LabEvents() {
  const eventImages = [
    {
      id: 1,
      title: "Dinner at Passionfish in Pacific Groove during the Immunology Annual Conference",
      image: "Dinner.jpg",
    },
    {
      id: 2,
      title: "Immunology Annual Conference- Asilomar, 2023",
      image: "Lab.jpg",
    },
    {
      id: 3,
      title: "Valentine’s Day Mellins Lab edition",
      image: "Lab2.jpg",
    },
    {
      id: 4,
      title: "Running samples with Fluorescence-activated cell sorting (FACS) ",
      image: "Facs.jpg",
    },
    {
      id: 5,
      title: "Poster presentation of Xiaowen at Asilomar",
      image: "Poster.jpg",
    },
    {
      id: 6,
      title: "National Postdoc Appreciation Week Day",
      image: "Postdocevent.jpg",
    },
    {
      id: 7,
      title: "Department of Pediatrics  Social event",
      image: "Pedsevent.jpg",
    },
    {
      id: 8,
      title: "We are here to support Ayan and Noor.",
      image: "Postersession.jpg",
    },
  ];

  
  return (
    <div>
      <PageTitle title="Lab Events" />
      <ImageGrid cards={eventImages} />
    </div>
  );
}
