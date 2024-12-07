import { registerComponent } from "@plasmicapp/host";
import { FeatureCard } from "./";

registerComponent(FeatureCard, {
  name: "FeatureCard",
  props: {
    featureCardTitle: "string",
    featureCardDescription: "string",
    icon: "slot",
    className: "string"
  },
  importPath: "./components/plasmic/website/FeatureCard"
}); 