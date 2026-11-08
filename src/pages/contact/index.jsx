import { Section } from "@/components/section";
import { ContactCard } from "@/components/section/contact-card";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Have a project, role or idea in mind? Send me a message and I will get back to you."
    >
      <div className="flex justify-center">
        <ContactCard />
      </div>
    </Section>
  );
}
