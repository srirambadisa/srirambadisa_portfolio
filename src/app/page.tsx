import {
  CommandHero,
  ContactBand,
  IdentityStrip,
  ProofSection,
  SkillConstellation,
  WorkflowSection,
} from "@/components/command-studio";

export default function HomePage() {
  return (
    <>
      <CommandHero />
      <IdentityStrip />
      <WorkflowSection />
      <ProofSection />
      <SkillConstellation />
      <ContactBand />
    </>
  );
}
