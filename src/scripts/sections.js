class ResumeSections {
  constructor (label) {
    this.id = crypto.randomUUID();
    this.label = label;
    this.identifier = `${this.label.trim().replace(/\s+/g, '-').toLowerCase()}-section`;
    this.visible = false;
  }
}

// IIFE to create ResumeSections instances.
// To create additional sections, just hard-code it in "sections" variable.
export const resumeSectionList = [];
(function () {
  const sections = [
    'Personal Information',
    'Professional Experience',
    'Education',
    'Skills',
    'Projects'
  ]

  for (const section of sections) {
    resumeSectionList.push(new ResumeSections(section));
  }
})();