import { Metadata } from "next";
import { ImageGrid } from "@/components/ImageGrid/ImageGrid";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Lab Events',
};

export default function LabEvents() {
  const ImageSkeleton = ({ title, description }: { title: string; description?: string; }) => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">{title}</p>
        {description && (
          <>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
              {description}
            </p>
          </>
        )}
      </div>
    );
  };
  
  const imageContent = [
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
      image: "Poster.jpeg",
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
      image: "Postdocevent.jpg",
    },
  ];

  const cards = imageContent.map((content, i) => {
    return {
      id: content.id,
      content: <ImageSkeleton {...content} />,
      className: i % 2 === 0 ? "md:col-span-2" : "col-span-1",
      thumbnail: `/images/events/${content.image}`,
    };
  });
  
  return (
    <div>
      <PageTitle title="Lab Events" />
      <ImageGrid cards={cards} />
    </div>
  );
}
