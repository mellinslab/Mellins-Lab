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
    name: 'Philip Morris, PhD',
    year: '1992-1995',
    position: 'Staff Scientist',
  },
  {
    name: 'Melinda Hendrickson, MD',
    year: '1993-1995',
    position: 'Neonatologist, Mountain States Neonatology, Boise, ID',
  },
  {
    name: 'Emily von Scheven, MD',
    year: '1993-1995',
    position: 'Professor of Pediatrics, Clinical researcher, UCSF, San Francisco',
  },
  {
    name: 'Lisa Lau, PhD',
    year: '1995-1997',
    position: 'OTL, Thomas Jefferson U, Philadelphia, PAD',
  },
  {
    name: 'Robert Busch, PhD',
    year: '1995-2000',
    position: 'Senior Lecturer, U of Roehampton, London, UK',
  },
  {
    name: 'Namrata Patil, PhD',
    year: '1997-2000',
    position: 'Scientist, Genentech, San Francisco, CA',
  },
  {
    name: 'Achal Pashine, PhD',
    year: '1999-2004',
    position: 'Exec Director, Head, Immunology, Arvinas, New Haven, CT',
  },
  {
    name: 'Jennifer O’Mahoney, PhD',
    year: '1999-2002',
    position: 'Senior Product Manager, Oncology, Genentech, San Francisco',
  },
  {
    name: 'Vashti Lacaille, PhD',
    year: '2000-2002',
    position: 'Global Product Manager, Beckman Coulter, Debary, FL',
  },
  {
    name: 'Tara Hornell, PhD',
    year: '2000-2005',
    position: 'Home with children',
  },
  {
    name: 'Laura Drohan, MD',
    year: '2001-2004',
    position: 'Neonatologist, Atlanta, GA',
  },
  {
    name: 'Andrew Lee, MD',
    year: '2002-2006',
    position: 'Vice President, Program Executive at Vir Biotechnology, Inc.',
  },
  {
    name: 'Sujin Roh, PhD',
    year: '2003-2007',
    position: 'Home with children, after La Jolla Institute Immunology',
  },
  {
    name: 'Timo Burster, PhD',
    year: '2004-2006',
    position: 'Assoc. Prof. Ulm University, Germany',
  },
  {
    name: 'Christiane Chen-Santel, MD',
    year: '2005-2007',
    position: 'Pediatrician, Charite Hospital, Berlin, Germany',
  },
  {
    name: 'Arunima Bandyopadhyay, PhD',
    year: '2005-2006',
    position: 'Principal Scientist, Dr. Reddy’s Laboratories, New Haven',
  },
  {
    name: 'Jane Park, MD',
    year: '2005-2011',
    position: 'Assoc. Group Med. Dir., Safety Sci. Oncology, Genentech, SF, CA',
  },
  {
    name: 'Taejin Yoon, PhD',
    year: '2005-2011',
    position: 'Exec. Officer, Head, Global Busi. Dev, Yuhan Corp, Korea',
  },
   {
    name: 'Henriette Macmillan, PhD',
    year: '22007-2013',
    position: 'Associate Specialist, Staff Scientist, UCSF, San Francisco, CA',
  },
   {
    name: 'Taejin Yoon, PhD',
    year: '2005-2011',
    position: 'Exec. Officer, Head, Global Busi. Dev, Yuhan Corp, Korea',
  },
   {
    name: 'Narendiran Rajasekaran, PhD',
    year: '2007-2013',
    position: 'Asst Prof., Dept of Chemistry & Biochemistry NAU, Flagstaff, AZ',
  },
   {
    name: 'Tieying Hou, MD, PhD',
    year: '2008-2014',
    position: 'Asst Prof., Dep’t Pathology, Indiana University, Indianapolis, IN',
  },
   {
    name: 'Nan Wang, MD, PhD',
    year: '2008-2014',
    position: 'Research Associate, Staff Scientist, Stanford University',
  },
   {
    name: 'Julia Zhang, MD',
    year: '2012-2014',
    position: 'Asst Prof, Pediatrics, Tufts Univ. Med. School, Boston, MA',
  },
   {
    name: 'Wei Jiang, PhD',
    year: '2012-2016',
    position: 'CSO, start-up, Beijing',
  },
   {
    name: 'Lital Adler, PhD',
    year: '2015-2017',
    position: 'Staff Scientist, Weizmann Institute, Rehovot, Israel',
  },
   {
    name: 'Shu-chen Hung, PhD',
    year: '2016-2020',
    position: 'Senior Associate Scientist, Gilead, San Francisco, CA',
  },
   {
    name: 'Lital Adler, PhD',
    year: '2015-2017',
    position: 'Staff Scientist, Weizmann Institute, Rehovot, Israel',
  },
   {
    name: 'Justine Maller, MD, PhD',
    year: '2018-2020',
    position: 'Medical Director, Genentech, South SF, CA',
  },
   {
    name: 'Rongzeng Liu, PhD',
    year: '2018-2020',
    position: 'Assoc. Prof, Henan U of Science and Technology, China',
  },
   {
    name: 'Debopam Ghosh, PhD',
    year: '2017-2021',
    position: 'Scientist II, Dren Bio Inc, San Carlos, CA',
  },
   {
    name: 'Dhriti Mukhopadhyay MD, PhD',
    year: '2018-2018',
    position: 'Clinical Assistant Professor, U of Arizona, Tuba City, AZ',
  },
   {
    name: 'Shamma Rahman, PhD',
    year: '2018-2022',
    position: 'Faculty, San Jose State University, CA',
  },
  {
    name: 'Ying Li,PhD',
    year: '2021-2022',
    position: 'Staff scientist, Gilead',
  },
  {
    name: 'Achia Khatun,PhD',
    year: '2021-2022',
    position: 'Staff scientist, Genentech',
  },
  {
    name: 'Surbhi Shamma, PhD',
    year: '2020-2023',
    position: 'Research scientist, MD Anderson Cancer Center',
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
