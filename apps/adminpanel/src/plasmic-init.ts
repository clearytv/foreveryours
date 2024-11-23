import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "02512a2",  // Admin Panel project ID from your git commit
      token: "PLASMIC_TOKEN"
    }
  ]
}); 