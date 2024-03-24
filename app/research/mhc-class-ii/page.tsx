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

      <div className="my-10 space-y-8">
        MHC Class II Antigen Presentation and Beyond
      </div>
    </div>
  );
}
