import { registerComponent } from "@plasmicapp/host";
import { FeatureCard } from "./";

registerComponent(FeatureCard, {
  name: "FeatureCard",
  props: {
    featureCardTitle: {
      type: "string",
      defaultValue: "Feature Title"
    },
    featureCardDescription: {
      type: "string",
      defaultValue: "Some description text of this feature goes here to try fill the space."
    },
    icon: {
      type: "slot",
      defaultValue: undefined
    },
    className: {
      type: "string",
      defaultValue: undefined
    }
  },
  importPath: "./components/plasmic/website/FeatureCard"
}); 