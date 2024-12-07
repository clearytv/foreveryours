import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { FeatureCard } from "./components/plasmic/website/FeatureCard";
import { FeatureIconReplace } from "./components/plasmic/website/FeatureCard/FeatureIconReplace";

const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "j4GFx2qhbcsQ1YV8DmhFQd",
      token: "rrrHHntIVUK74fetyaY74LkJuFSQl3FqCtgqnLqhc4JXb1IhGLwJPHm6Dw4lp2wXzpP3YABrkfOvb5jUE8QA"
    }
  ],
  preview: true
});

// Register the FeatureIconReplace first
PLASMIC.registerComponent(FeatureIconReplace, {
  name: "FeatureIconReplace",
  props: {},
  styleSections: false
});

// Then register the FeatureCard
PLASMIC.registerComponent(FeatureCard, {
  name: "FeatureCard",
  props: {
    featureCardTitle: {
      type: "string",
      defaultValue: "Feature Title",
      displayName: "Title",
      description: "The title text for the feature card"
    },
    featureCardDescription: {
      type: "string",
      defaultValue: "Some description text of this feature goes here to try fill the space.",
      displayName: "Description",
      description: "The description text for the feature card"
    },
    icon: {
      type: "slot",
      displayName: "Icon",
      description: "The icon to display in the feature card",
      defaultValue: {
        type: "component",
        name: "FeatureIconReplace"
      }
    }
  },
  defaultStyles: {
    width: "222px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px"
  },
  styleSections: true
});

export { PLASMIC }; 