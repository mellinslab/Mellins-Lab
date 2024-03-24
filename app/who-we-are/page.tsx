import Link from "next/link";
import { Metadata } from "next";
import { PersonCard } from "@/components/PersonCard/PersonCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Who We Are',
};

const people = [
  {
    name: 'Elizabeth D. Mellins, MD',
    title: 'Principal Investigator',
    image: 'Elizabeth.jpg',
    email: 'mellins@stanford.edu',
  },
  {
    name: 'Claudia Macaubas, PhD',
    title: 'Research Scientist',
    image: 'Claudia.jpg',
    email: 'macaubas@stanford.edu',
  },
  {
    name: 'Batuhan Bayram, MD',
    title: 'Postdoctoral Fellow',
    image: 'Batuhan.jpg',
    email: 'bayramb@stanford.edu',
    linkedin: 'https://www.linkedin.com/in/batubayrm/',
  },
  {
    name: 'Noor Hussein,PhD',
    title: 'Postdoctoral Fellow',
    image: 'Noor.jpg',
    email: 'nhussei@stanford.edu',
  },
  {
    name: 'Ayan Mondal, PhD',
    title: 'Postdoctoral Fellow',
    image: 'Ayan.jpg',
    email: 'ayanm@stanford.edu',
  },
  {
    name: 'Agnieszka Kalinowski, MD,PhD',
    title: 'Clinical Assistant Professor',
    image: 'Agnes.jpg',
    email: 'akalinow@stanford.edu',
  },
  {
    name: 'Xiaowen Ding , PhD',
    title: 'Postdoctoral Fellow',
    image: 'Xiaowen.jpg',
    email: 'xwd15279@stanford.edu',
  },
  {
    name: 'Samira Galehdari, MS',
    title: 'Research Assistant',
    image: 'Samira.jpg',
    email: 'samigal@stanford.edu',
  },
  {
    name: 'Paulette Danahe Monroy Alfaro',
    title: 'REACH Post-baccalaureate Scholar ',
    image: 'Paulette.jpg',
    email: 'pmonroy@stanford.edu',
  },
  {
    name: 'Nelia Lechuga, BS',
    title: 'Undergraduate student',
    image: 'Nelia.jpg',
    email: 'nlechuga@stanford.edu',
  },
];

export default function WhoWeAre() {
  return (
    <div>
      <PageTitle title="Who We Are" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>

      <hr />

      <Link
        href="/who-we-are/alumni"
        className="text-2xl font-semibold font-mono"
      >
        Our Alumni
      </Link>
    </div>
  );
}
