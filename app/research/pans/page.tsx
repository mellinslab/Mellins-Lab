import Link from 'next/link';
import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Pediatric Acute-Onset Neuropsychiatric Syndrome (PANS)',
};

export default function PansPage() {
  return (
    <div>
      <PageTitle title="Pediatric Acute-Onset Neuropsychiatric Syndrome (PANS)" />

      <div className="my-10 lg:mx-16 space-y-8">
        <p>
          Pediatric Acute-Onset Neuropsychiatric Syndrome (PANS) is characterized by the sudden
          onset of neuropsychiatric symptoms, including obsessions/compulsions or food restrictions.
          PANS is commonly observed after infections (e.g., group A streptococcus or influenza), suggesting
          that an immune response, initially triggered against infection, likely contributes to the development of PANS.
        </p>

        <p>
          Currently, Dr. Macaubas, Dr. Bayram, and Nelia work on Natural Killer (NK) cells in PANS patients.
          NK cells play a role in defending against infection, prompting us to investigate their potential role
          in PANS using both genetic and functional approaches. Through phenotypic analysis and functional assays
          (such as CD107a degranulation) of NK cells using flow cytometry-based assays, we aim to determine any
          functional and/or phenotypic differences between NK cells in PANS patients compared to healthy controls.
        </p>

        <img
          className="w-2/3 h-96 object-cover"
          src="images/research/pans1.png"
          alt="PANS image 1"
        />
        <img
          className="w-2/3 h-96 object-cover"
          src="images/research/pans2.png"
          alt="PANS image 2"
        />

        <p>
          Dr. Hussein's current work aims to increase the understanding of Pediatric Acute Onset Neuropsychiatric
          Syndrome (PANS) mechanisms and explore treatment options. Collaborating with Samira, they focus on studying
          the alteration of regulatory T cells (Tregs), crucial inhibitors of autoimmunity and main regulators of
          inflammation, in PANS. It is fascinating how regulatory T cells (Tregs) influence the immune system, especially
          in Pediatric Acute-onset Neuropsychiatric Syndrome (PANS). Their research dives into different types of Tregs,
          particularly those with CD39. They are measuring CD39 enzyme activity in Tregs to see how it affects inflammation,
          hoping to find new treatment options for PANS/PANDAS.
        </p>

        <p>
          Their preliminary data show an increase in the percentage of Tregs in the blood of PANS patients experiencing
          symptoms during a flare-up, compared to healthy controls. Conversely, Tregs decrease during PANS remission.
          Additionally, the percentage of CD39+ cells, a marker of highly active and immunosuppressive regulatory T cell
          subsets, is significantly higher in PANS flare-up patients compared to those in remission and healthy controls.
          Dr. Hussein hypothesizes that the increase in circulating CD39+ Tregs during PANS flare signals a robust immunosuppressive
          response to neuroinflammation in PANS flares. This increase might also indicate defects in Tregs signaling and
          migration to the brain.
        </p>
        
        <img
          className="w-2/3 h-96 object-cover"
          src="images/research/pans3.png"
          alt="PANS image 3"
        />

        <p>
          Dr. Mondal focuses on Blood-brain barrier (BBB) regulation in PANS. BBB dysfunction is presumed in the onset of
          Pediatric Acute Neuropsychiatric Syndrome (PANS). His research is focused on elucidating the mechanisms of novel
          modulators of BBB that are relevant to homeostatic maintenance of the BBB and other novel modulators that increase
          BBB permeability in PANS. He is using transcriptomic and proteomic approaches, permeability and structural assays
          in the cell-based systems. In addition, he is trying to understand whether the immunomodulatory effect of IVIG
          alters disrupted BBB physiology in the improved PANS subjects.
        </p>
        
        <img
          className="w-2/3 h-96 object-cover"
          src="images/research/pans4.png"
          alt="PANS image 4"
        />

        <p>
          Dr. Kalinowski’s work focused on serum C4 protein in PANS. PANS patients have an increased prevalence of comorbid
          autoimmune illness, most commonly arthritis. In addition, an estimated one-third of PANS patients present with low
          serum C4 protein, suggesting decreased production or increased consumption of the Complement 4 (C4) protein. Using
          longitudinal data collected by the Stanford PANS Clinic, we found that PANS patients with low C4B were at increased
          risk for subsequent JIA diagnosis (hazard ratio = 2.7, p-value = 0.004). We also observed a possible increase in
          the risk of Autoimmune Illness in PANS patients, as well as a potential correlation between lower C4B levels and
          the age of onset of PANS.
        </p>
      </div>
    </div>
  );
}
