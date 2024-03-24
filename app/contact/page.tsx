import { ContactCard } from "@/components/ContactCard/ContactCard";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function Contact() {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <div className="my-10 space-y-10">
        <ContactCard type="phone" contact="650-498-7574" />
        <ContactCard type="email" contact="mellins@stanford.edu" />
        <ContactCard type="address" contact="Adress: 269 Campus Dr, STANFORD: The Center for Clinical Sciences Research (CCSR) building, Room 1200" />
      </div>
    </div>
  );
}
