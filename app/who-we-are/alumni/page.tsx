import { Metadata } from "next";
import { PersonCard } from "@/components/PersonCard/PersonCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Who We Are | Alumni',
};

const alumni = [
  {
    name: 'Steven Goodman, MD',
    year: '1992-1994',
    position: 'Rheumatologist, FL',
  },
  {
    name: 'Arunima Bandyopadhyay, PhD ',
    year: '2005-2006',
    position: 'Principal Scientist, Dr. Reddy’s Laboratories, New Haven',
  },
  {
    name: 'Steven Goodman, MD',
    year: '1992-1994',
    position: 'Rheumatologist, FL',
  },
];

export default function WhoWeAreAlumni() {
  return (
    <div>
      <PageTitle title="Who We Are | Alumni" />
      <div className="flex flex-row items-center justify-center my-16 lg:mx-16">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Training Period</th>
              <th className="py-3 px-4 text-left">Current Position</th>
            </tr>
          </thead>
          <tbody>
            {
              alumni.map((alum, i) => (
                <tr key={i} >
                  <td className="py-3 px-4">{alum.name}</td>
                  <td className="py-3 px-4">{alum.year}</td>
                  <td className="py-3 px-4">{alum.position}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
