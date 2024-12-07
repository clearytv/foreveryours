import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { FeatureCard } from "./components/plasmic/website/FeatureCard";
import { featureCardMeta } from "./components/plasmic/website/FeatureCard/plasmic-registration";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rrrHHntIVUK74fetyaY74LkJuFSQ",
      token: "3FqCtgqnLqhc4JXb1lhGLwJPHm6Dw4|p2wXzpP3YABrkfOvb5jUE8QA"
    }
  ],
  preview: true
}).registerComponent(FeatureCard, featureCardMeta); 