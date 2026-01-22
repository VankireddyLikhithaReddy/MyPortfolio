import { resumeProfile } from "./resumeData";

export function getAnswer(question) {
  const q = question.toLowerCase();

  if (q.includes("tell me about yourself") || q.includes("introduce")) {
    return resumeProfile.summary;
  }

  if (q.includes("who are you") || q.includes("about you")) {
    return resumeProfile.summary;
  }

  if (q.includes("experience")) {
    return resumeProfile.experience;
  }

  if (q.includes("angular")) {
    return resumeProfile.angular;
  }

  if (q.includes("current") || q.includes("work")) {
    return resumeProfile.currentJob;
  }

  if (q.includes("project")) {
    return resumeProfile.project;
  }

  if (q.includes("skills") || q.includes("technology")) {
    return resumeProfile.skills;
  }

  if (q.includes("certification")) {
    return resumeProfile.certifications;
  }

  if (q.includes("relocation")) {
    return "Yes, I am open to relocation for the right opportunity.";
  }

  if (q.includes("salary") || q.includes("compensation")) {
    return resumeProfile.salary.default;
  }

  if (q.includes("visa") || q.includes("opt")) {
    return resumeProfile.visa.status;
  }

  if (q.includes("stem")) {
    return resumeProfile.visa.stem;
  }

  if (q.includes("sponsorship") || q.includes("h1b")) {
    return resumeProfile.visa.sponsorship;
  }

  return resumeProfile.summary;
}
