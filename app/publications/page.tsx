import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";

export const metadata: Metadata = {
  title: 'Publications',
};

const publications = [
  {
    title: "Epitope selection for HLA-DQ2 presentation: implications for celiac disease and viral defense",
    authors: "Hung SC, Hou T, Jiang W, Wang N, Qiao SW, Chow, IT, Liu X, van der Burg SH, Koelle DM, Kwok WW, Sollid LM, Mellins ED",
    published: 2019,
    journal: "J. Immunol",
    pubmed: "30926644",
  },
  {
    title: "Gene Editing in Rare Genetic Disorders: CRISPR-Cas9 Approaches",
    authors: "Johnson L., O'Reilly M., Singh V.",
    published: 2022,
    journal: "Advances in Genetic Engineering",
    pubmed: "",
  },
];

export default function Publications() {
  return (
    <div>
      <PageTitle title="Publications" />

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publications.map((publication, index) => (
            <div key={index} className="bg-white shadow-lg border-2 rounded-lg p-5 flex flex-col justify-between leading-normal">
              <div>
                <a href={`https://pubmed.ncbi.nlm.nih.gov/${publication.pubmed}/`} target="_blank">
                  <h3 className="text-gray-900 font-bold text-xl mb-2">{publication.title}</h3>
                </a>
                <p className="text-gray-700 text-base mb-4">{publication.authors}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600"><span className="font-semibold">Published:</span> {publication.published}</div>
                <div className="text-sm text-blue-500">{publication.journal}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
