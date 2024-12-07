import { ComponentMeta } from "@plasmicapp/host";
import { FeatureCard } from "./";

export const featureCardMeta: ComponentMeta<typeof FeatureCard> = {
  name: "FeatureCard",
  displayName: "Feature Card",
  description: "A feature card component with hover effect",
  importPath: "./components/plasmic/website/FeatureCard",
  importName: "FeatureCard",
  props: {
    featureCardTitle: {
      type: "string",
      displayName: "Title",
      description: "The title of the feature card",
      defaultValue: "Feature Title"
    },
    featureCardDescription: {
      type: "string",
      displayName: "Description",
      description: "The description text of the feature card",
      defaultValue: "Some description text of this feature goes here to try fill the space."
    },
    icon: {
      type: "object",
      displayName: "Icon",
      description: "The icon to display in the feature card"
    },
    className: {
      type: "string",
      displayName: "Class Name",
      description: "CSS class name"
    }
  }
}; 