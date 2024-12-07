import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { FeatureCard } from "./components/plasmic/website/FeatureCard";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "j4GFx2qhbcsQ1YV8DmhFQd",
      token: "rrrHHntIVUK74fetyaY74LkJuFSQl3FqCtgqnLqhc4JXb1IhGLwJPHm6Dw4lp2wXzpP3YABrkfOvb5jUE8QA"
    }
  ],
  preview: true
}).registerComponent(FeatureCard, {
  name: "FeatureCard",
  projectId: "j4GFx2qhbcsQ1YV8DmhFQd",
  isCode: true
}); 