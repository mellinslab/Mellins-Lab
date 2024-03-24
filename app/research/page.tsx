import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Research',
};

const researchs = [
  {
    title: "MHC Class II Antigen Presentation and Beyond",
    description: "MHC Class II molecules are a class of major histocompatibility complex (MHC) molecules normally found only on professional antigen-presenting cells such as dendritic cells, mononuclear phagocytes, some endothelial cells, thymic epithelial cells, and B cells. These cells are important in initiating immune responses.",
  },
  {
    title: "Pediatric Acute-Onset Neuropsychiatric Syndrome (PANS)",
    description: "Pediatric Acute-Onset Neuropsychiatric Syndrome (PANS) is characterized by the sudden onset of neuropsychiatric symptoms, including obsessions/compulsions or food restrictions.",
  },
  {
    title: "Systemic Juvenile Idiopathic Arthritis (sJIA)",
    description: "Systemic Juvenile idiopathic arthritis (JIA) is the most common type of arthritis in kids and teens.",
  },
]

export default function Research() {
  return (
    <div>
      <PageTitle title="Research" />

      <div className="my-10 space-y-8">
        {researchs.map((research, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 pb-4 border-b last:border-none">
            <h2 className="text-xl font-bold">{research.title}</h2>
            <p className="text-center">{research.description}</p>
            <Button>Learn more</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
