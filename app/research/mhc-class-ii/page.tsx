import Link from 'next/link';
import { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'MHC Class II Antigen Presentation and Beyond',
};


export default function MHCClassII() {
  return (
    <div>
      <PageTitle title="MHC Class II Antigen Presentation and Beyond" />

      <div className="my-10 lg:mx-16 space-y-8">
        <p>
          MHC Class II molecules are a class of major histocompatibility
          complex (MHC) molecules normally found only on professional antigen-presenting
          cells such as dendritic cells, mononuclear phagocytes, some endothelial cells,
          thymic epithelial cells, and B cells. These cells are important in initiating immune responses.
        </p>

        <p>
          Dr Mellins’s first contribution to immunology was built on my work as a post-doctoral
          fellow and continued in her first independent laboratory. This work revealed the critical
          role of the accessory molecule, HLA-DM, as a catalyst of peptide loading of MHC class II molecules.
          (Morris P et al). Her team went on to map the DM/DR interaction faces, implicating a critical
          role for the N-terminal region of the peptide-binding groove of MHCII and suggesting that HLA-DM
          stabilizes a peptide-receptive form of MHCII (Doebele et al; Pashine et al). This model was further
          supported by additional evidence from her group and others and is the current model in the field.
        </p>

        
        <h3 className="font-semibold">Related papers;</h3>
        <ul className="list-disc">
          <li>Morris P, Shaman J, Attaya M, Amaya M, Goodman S, Bergman C, Monaco JJ, Mellins E.  An essential role for HLA-DM in antigen presentation by class II major histocompatibility molecules. Nature 368:551-554, 1994.</li>
          <li>Doebele RC, Busch R, Scott HM, Pashine A, Mellins ED. Determination of the HLA-DM interaction site on HLA-DR molecules. Immunity 13:517-527, 2000.</li>
          <li>Pashine A, Busch R, Belmares MP, Munning JN, Doebele RC, Buckingham M, Nolan GP, Mellins ED. Interaction of HLA-DR with an acidic face of HLA-DM disrupts sequence-dependent interactions with peptides. Immunity 19:183-192, 2003.</li>
          <li>Yin L, Trenh P, Guce A, Wieczorek M, Lange S, Sticht J, Jiang W, Blysma M, Mellins ED, Freund C, Stern LJ. Susceptibility to HLA-DM is determined by a dynamic MHCII-peptide conformation constrained by interactions throughout the peptide-binding groove. J. Biol. Chem 2014 289:23449-64. PMCID: PMC4156084</li>
        </ul>

        <p>
          Mellins Lab have been interested in the mechanisms of class II allele
          association with autoimmune disease and studied the navigation of the
          class II pathway by disease-associated alleles. We were the first to place
          regulation of peptide loading as central to HLA-disease associations.
          Interestingly,most disease-associated alleles demonstrate reduced affinity for
          CLIP peptide, which we hypothesize is key to their role as inherited risk factors for
          autoimmunity (Rinderknecht et al, 2010). An exception is HLA-DQ2, a susceptibility allele
          for celiac disease and type 1 diabetes, which has reduced interaction with HLA-DM.
          Most recently, we found that IL-1 and IL-6 inhibitors are associated with delayed
          type hypersensitivity reactions in a subset of Still’s disease patients who carry
          the HLA-DRB1*15 haplotype (and a smaller subset without this haplotype). Studies to
          understand the molecular and cellular mechanisms underlying this emerging syndrome are
          on-going in my laboratory. To study antigen presentation by disease-associated alleles,
          we have also been developing reagents that recognize MHCII/peptide complexes, but with higher
          affinity than a TCR tetramer. We refer to these as TCR-likeantibodies.
        </p>

        <h3 className="font-semibold">Related papers;</h3>
        <ul className="list-disc">
          <li>Saper VE, Ombrello MO, Tremoulet A, Montero-Martin G, Prahalad S, Canna S, Shimizu C, Deutsch G, Tan S, Remmers EF, Monos D, Phadke O, Malljosyula V, Xu J, Rosa Duque JS, Chua GT, Ghosh D, Szymanski AM, Rubin D, Tian L, Burns JC, Fernandez-Vina M, Mellins ED*#, Hollenbach JA#. (2022) Hypersensitivity reactions to IL-1 and IL-6 inhibitors are linked to common HLA-DRB1*15 alleles. Ann Rheum Dis 2022. 81:406-415.  PMID: 34789453.</li>
          <li>Busch R, Kollnberger S, Mellins ED MHC association with rheumatic diseases: implications and mechanistic hypotheses. Nat. Rev. Rheum, 2019 15:364-381.</li>
        </ul>

        <p>
          We also continue to work on elucidating molecular events related to peptide loading of
          class II molecules. In B cells, we uncovered evidence for a direct interaction between the
          BCR and HLA-DM, which we hypothesize contributes significantly to the efficient presentation
          of antigen by B cells to CD4+ T cells (Macmillan et al). Most recently, we linked Ig-mediated
          antigen uptake to MHCII peptide presentation, revealing a mechanism by which Ig affinity modulates
          DO-tuning of antigen presentation (Jiang et al). We have studied microbial infection and cytokines
          as modulators of MHCII pathways in APC. We found multiple mechanisms inhibit surface expression of
          MHCII in infected cells.
        </p>

        <h3 className="font-semibold">Related papers;</h3>
        <ul className="list-disc">
          <li>Macmillan H, Strohman MJ, Ayyangar S, Jiang W, Rajasekaran N, Spura A, Hessell A, Madec A-M, Mellins ED. The MHC class II cofactor, HLA-DM, interacts with immunoglobulin in B cells. J Immunol 193:2641-50, 2014. PMCID: PMC4157100</li>
          <li>Lee J, Tam H, Adler LN, Ilstad-Minnihan A, Macaubas C, Mellins ED. The MHC class II antigen presentation pathway in human monocytes differs by subset and is regulated by cytokines. PLOS One 12:e0183594, 2017 PMCID: PMC5568224.</li>
        </ul>
      </div>
    </div>
  );
}
