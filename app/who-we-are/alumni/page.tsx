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
];

export default function WhoWeAreAlumni() {
  return (
    <div>
      <PageTitle title="Who We Are | Alumni" />
      <div className="my-16 lg:mx-16">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Training Period</th>
              <th>Current Position</th>
            </tr>
          </thead>
          <tbody>
            {
              alumni.map((alum, i) => (
                <tr key={i} >
                  <td>{alum.name}</td>
                  <td>{alum.year}</td>
                  <td>{alum.position}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
