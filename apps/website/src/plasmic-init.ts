import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "8ac1951",  // Website project ID from your git commit
      token: "PLASMIC_TOKEN"
    }
  ]
}); 