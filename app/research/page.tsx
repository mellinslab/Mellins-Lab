import Link from 'next/link';
import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Systemic Juvenile Idiopathic Arthritis (sJIA)',
};

export default function Research() {
  return (
    <div>
      <PageTitle title="Systemic Juvenile Idiopathic Arthritis (sJIA)" />

      <div className="my-10 space-y-8">
        <p>
          Systemic Juvenile idiopathic arthritis (JIA) is the most common type of arthritis in kids and teens.
        </p>

        <p>
          Dr. Ding is working on elucidating the mechanism underlying systemic Juvenile Idiopathic Arthritis (sJIA)
          - associated pulmonary alveolar proteinosis (sJIA-PAP), a phenomenon not historically observed and believed
          to coincident with the use of IL-1 and IL-6 neutralization therapies for sJIA. The key elements of sJIA-PAP
          includes the impact of drug utilization, the functionality of alveolar macrophage, and the intricate regulation
          of chemotaxis and host defense mechanisms.
        </p>

        <img src="/images/research/sjia1.png" alt="SJIA image 1" />

        <p>
          Paulette is using an in vitro model to characterize immune parameters with and without infection-related stimuli
          to provide insight into the molecular mechanisms underlying systemic juvenile idiopathic arthritis-lung disease (sJIA-LD).
        </p>

        <p>
          Monocytes (Non-classical, Intermediate, and Classical) over three time points of culture
        </p>

        <img src="/images/research/sjia2.png" alt="Monocytes (Non-classical, Intermediate, and Classical) over three time points of culture" />

        <p>
          B cells and CD3+T cells over three time points of culture  
        </p>
        
        <img src="/images/research/sjia3.png" alt="B cells and CD3+T cells over three time points of culture" />
      </div>
    </div>
  );
}
