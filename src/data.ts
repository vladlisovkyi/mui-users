interface SkillOption {
  value: string;
  label: string;
}

export const jobOptions = [
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "manager", label: "Manager" },
  { value: "analyst", label: "Analyst" },
];

export const radioOptions = [
  { value: "Work from home" },
  { value: "Hybrid" },
  { value: "Office" },
];

export const skillOptions: SkillOption[] = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "nodejs", label: "Node.js" },
];
