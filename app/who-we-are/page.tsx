import { Metadata } from "next";
import { PersonCard } from "@/components/PersonCard/PersonCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Who We Are',
};

const examplePeople = [
  {
    name: 'Elizabeth D. Mellins,MD',
    title: 'Principal Investigator',
    image: 'Elizabeth.jpg',
    email: 'mellins@stanford.edu',
  },
];

export default function WhoWeAre() {
  return (
    <div>
      <PageTitle title="Who We Are" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {examplePeople.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-8">
    </div>
    </div>
  );
}
