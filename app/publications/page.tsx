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
    title: "Human intestinal enteroids model MHC-II in the gut epithelium",
    authors: "2.	Wosen JE, Ilstad-Minnihan A, Co JY, Jiang W, Mukhopadhyay D, Fernandez-Becker N, Kuo CJ, Amieva MR, Mellins ED",
    published: 2019,
    journal: "Front. Immunol",
    pubmed: "31481960",
  },
  {
    title: "Synergy between B cell receptor/antigen uptake and MHCII peptide editing relies on HLA-DO tuning",
    authors: "3.	Jiang W, Adler LN, Macmillan H, Mellins ED",
    published: 2019,
    journal: "Sci Rep.",
    pubmed: "31554902",
  },
  {
    title: "An emergent high fatality lung disease in systemic juvenile idiopathic arthritis",
    authors: "4.	Saper VE, Chen G, Deutsch GH, … Mellins ED",
    published: 2019,
    journal: "Ann. Rheum.",
    pubmed: "31562126",
  },
  {
    title: "Hypocretin-specific CD4+ T cells in narcolepsy patients and controls: in vivo clonal expansion and phenotype",
    authors: "5.	Jiang W, Birtley J, Hung S-C, Wang W, Macaubas C, Kornum B, Chiou S-H, Tian L, Huang H, Adler L, Weaver G, Lu L, Ilstad-Minnihan A, Somasundaram S, Ayyangar S, Davis MM, Stern LJ, Mellins EDD",
    published: 2019,
    journal: "Nat. Comm.",
    pubmed: "31562126",
  },
  {
    title: "Allergen activation preferentially drives monocyte differentiation into dendritic cells in allergic vs healthy individuals through IL-4/IL-13 pathways. ",
    authors: "6.	Zhou X, Yu W, Lyu S-C, Macaubas C, Bunning B, Mellins ED*, Nadeau KC",
    published: 2021,
    journal: " J Exp Med.",
    pubmed: "33944900",
  },
  {
    title: "Neutrophil serine proteases link histone proteolytic cleavage to macrophage differentiation and sJIA. ",
    authors: "7.	Cheung P, Schaffert S, Chang SE, Dvorak M, Donato M, Macaubas C, Li T-M, Foecke MH, Zhang L, Schulert GS, Nigrovic P, Henderson L, Elias JE, Gozani O, Mellins ED*, Khatri P*, Utz PJ*, Kuo AJ",
    published: 2021,
    journal: " Nat Immunol.",
    pubmed: "3401712",
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
